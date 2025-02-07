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
            .put(`http://localhost:8080/product/update-products/${id}`, formDataBody, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log("Product updated successfully:", response);
            })
            .catch((error) => {
              console.log("Error updating product:", error);
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
          <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-600 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dark-floral.png')] bg-cover bg-center">
          <form onSubmit={handleSubmit} className="bg-gray-700 bg-opacity-90 p-6 rounded-xl shadow-lg w-96 border border-gray-500">
            <h2 className="text-2xl font-semibold text-center text-gray-200 mb-4">💀Product Entry💀 </h2>
        
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Product Title" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
            
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none"></textarea>
        
            <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
        
            <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} placeholder="Original Price" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
        
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Stock Quantity" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
        
            <input type="file" name="images" multiple onChange={handleImageUpload} className="w-full border border-gray-500 bg-gray-600 text-gray-300 rounded-lg px-4 py-2 mb-3 file:bg-gray-500 file:text-white file:border-0 file:px-3 file:py-1 file:rounded-lg file:cursor-pointer hover:file:bg-gray-400" />
        
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
        
            <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="w-full border border-gray-500 bg-gray-600 text-white rounded-lg px-4 py-2 mb-3 focus:outline-none" />
        
            {errorInput && <p className="text-red-500 text-sm text-center">{errorInput}</p>}
        
            <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded-lg mt-4 hover:bg-gray-400 transition duration-300">Submit</button>
          </form>
        </div>
        
        );
  }
  export default UpdateForm;