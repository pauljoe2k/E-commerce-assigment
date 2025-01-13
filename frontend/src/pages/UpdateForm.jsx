import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function UpdateForm(){
  const { id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        rating: 0,
        discountedPrice: 0,
        originalPrice: 0,
        quantity: 0,
        category: "",
      });
      const [errorInput, setInputError] = useState("");
      const [images, setImages] = useState(null);
    
      const handleImageUpload = (e) => {
        const imagesArray = Array.from(e.target.files);
        setImages(imagesArray);
      };
    
      const handleChange = (e) => {
        setInputError("");
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const {
          title,
          description,
          rating,
          discountedPrice,
          originalPrice,
          quantity,
          category,
        } = formData;
        if (
          title.length <= 0 ||
          description.length <= 0 ||
          discountedPrice <= 0 ||
          originalPrice <= 0 ||
          quantity <= 0 ||
          category.length <= 0
        ) {
          return setInputError("Please fill all the fields correctly.");
        }
    
        let formDataBody = new FormData();
        formDataBody.append("title", title);
        formDataBody.append("description", description);
        formDataBody.append("category", category);
        formDataBody.append("discountedPrice", discountedPrice);
        formDataBody.append("originalPrice", originalPrice);
        formDataBody.append("quantity", quantity);
        formDataBody.append("rating", rating);
    
        images?.map((ele) => {
          formDataBody.append("filepath", ele);
        });
    
        axios
          .post("http://localhost:8080/product/create-product", formDataBody, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log("Product created successfully:", response);
          })
          .catch((error) => {
            console.log("Error creating product:", error);
          });
      };
      useEffect(()=>{
        const getDataForId=async ()=>{
          const singleData= await axios.get(
            `http://localhost:8080/product/get-single/${id}`
            )
          setFormData(singleData.data.data)
          setImages(singleData.data.images)
        };
        getDataForId();
      },[id])
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
          >
            <div className="text-center mb-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlgUtYQLmh29X34jsMTp3LWUZIJAxNODrRkEOPXIbWToqH8yqNCS95CIyBh2xzwxJYKs&usqp=CAU"
                alt="Logo"
                className="w-35 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">
              Product Entry Form
            </h2>
    
            <div className="mb-4">
              <label htmlFor="title" className="text-gray-700 block">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter product title"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="description" className="text-gray-700 block">
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter product description"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="discountedPrice" className="text-gray-700 block">
                Discounted Price
              </label>
              <input
                type="number"
                id="discountedPrice"
                name="discountedPrice"
                value={formData.discountedPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter discounted price"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="originalPrice" className="text-gray-700 block">
                Original Price
              </label>
              <input
                type="number"
                id="originalPrice"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter original price"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="quantity" className="text-gray-700 block">
                Stock Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter stock quantity"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="images" className="text-gray-700 block">
                Upload Product Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageUpload}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="category" className="text-gray-700 block">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter product category"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="rating" className="text-gray-700 block">
                Product Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter product rating"
              />
            </div>
    
            {errorInput && <p className="text-red-500 text-center">{errorInput}</p>}
    
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-purple-600"
            >
              Submit
            </button>
          </form>
        </div>
      );
}
export default UpdateForm;