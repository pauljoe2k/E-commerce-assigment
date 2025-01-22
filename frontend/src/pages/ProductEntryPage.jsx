import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import axios from 'axios';
function ProductEntryPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 0,
    discountedPrice: 0,
    originalPrice: 0,
    quantity: 0,
    category: '',
  });
  const [errorInput, setInputError] = useState('');
  const [Images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const ImagesArray = Array.from(e.target.files);
    console.log(ImagesArray);
    setImages(ImagesArray);
  };
  const handleChange = (e) => {
    setInputError('');
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  // 1. take all enteries from the user and store it in use STATES
  //   e.target.value;
  //   setdata(...,[name]:value)
  // 2. take those images and store in another use state
  // 1. convert the all the image paths and set the state
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(Images);
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
      return setInputError('Enter The Information Inside Feilds Correctly...');
    }
    let formDataBody = new FormData();
    formDataBody.append('title', title);
    formDataBody.append('description', description);
    formDataBody.append('category', category);
    formDataBody.append('discountedPrice', discountedPrice);
    formDataBody.append('originalPrice', originalPrice);
    formDataBody.append('quantity', quantity);
    formDataBody.append('rating', rating);
    formDataBody.append('token', localStorage.getItem('token'));
    console.log(Images);
    Images.map((ele) => {
      formDataBody.append('files', ele);
    });

    console.log(formDataBody);
    // axios request post
    const token = localStorage.getItem('token');
    let requestdata = await axios
      .post(
        `http://localhost:8080/product/create-product?token=${token}`,
        formDataBody,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((er) => {
        console.log('error', er);
        return er;
      });

    for (let pair of formDataBody.entries()) {
      if (pair[1] instanceof File) {
        console.log(
          `${pair[0]}: File - ${pair[1].name}, ${pair[1].type}, ${pair[1].size} bytes`
        );
      } else {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  };
  return (
    <div
      className="flex justify-center items-center border border-black"
      style={{ height: '100vh' }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter Title</label>
          <br />
          <input
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
            placeholder="Enter Product title"
          />
        </div>
        <div>
          <label htmlFor="">Enter Description</label>
          <br />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter Description"
          />
        </div>
        <div>
          <label htmlFor="">Discounted Price</label>
          <br />
          <input
            type="number"
            name="discountedPrice"
            onChange={handleChange}
            value={formData.discountedPrice}
            placeholder="discounted-price.."
          />
        </div>
        <div>
          <label htmlFor="">Original Price</label>
          <br />
          <input
            type="number"
            onChange={handleChange}
            name="originalPrice"
            value={formData.originalPrice}
            placeholder="original price.."
          />
        </div>
        <div>
          <label htmlFor="">Stock Quantity</label>
          <br />
          <input
            type="number"
            onChange={handleChange}
            value={formData.quantity}
            name="quantity"
            placeholder="Enter the Stock Quantity.."
          />
        </div>
        <div>
          <label htmlFor="">Upload Product Images</label>
          <br />
          <input type="file" multiple onChange={handleImageUpload} />
        </div>
        <div>
          <label htmlFor="">Enter Category</label>
          <br />
          <input
            type="text"
            onChange={handleChange}
            value={formData.category}
            name="category"
            placeholder="Enter the category..."
          />
        </div>
        <div>
          <label htmlFor="">Enter Rating of product</label>
          <br />
          <input
            value={formData.rating}
            name="rating"
            type="number"
            onChange={handleChange}
            placeholder="Rating of the product"
            className="border border-black "
          />
        </div>
        {errorInput && <p>{errorInput}</p>}
        <button type="Submit" className="bg-blue-400 text-white px-5 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductEntryPage;

