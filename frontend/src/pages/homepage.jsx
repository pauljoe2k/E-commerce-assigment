import { useEffect, useState } from 'react';
import Card from '../components/productcard/card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {

  const [data, setdata] = useState();
  const fetchProduct = async () => {
    const response = await axios.get(
      'http://localhost:8080/product/get-products'
    );
    setdata(response.data.data);
    // console.log(response);
  };

  useEffect(() => {
    console.log('clicked');


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product/get-products');
      setData(response.data.data);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.',err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const callhandle = async () => {
      if (isMounted) await fetchProduct();
    };
    callhandle();

    return () => {
      isMounted = false;
    };
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    console.log('id', id);
    const data = await axios.delete(`http://localhost:8080/product/${id}`);
    setdata(data.data.data);
  };
  return (
    <div>
      <h1 className="text-center">'Home Page fro Follow along'</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
          return (
            <div style={{ margin: 'auto' }} className="border border-white">
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : 'Product Image missing'}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id={ele._id}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
=======

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/product/${id}`);
      setData(response.data.data);
    } catch (err) {
      setError('Failed to delete the product. Please try again.',err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
      <div className="p-8 shadow-lg rounded-lg max-w-6xl w-full z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
          Our Products
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((ele) => (
              <div
                key={ele._id}
                className="flex justify-center items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg"
              >
                <Card
                  title={ele.title}
                  image={ele.images || 'Product Image missing'}
                  description={ele.description}
                  originalPrice={ele.originalPrice}
                  discountedPrice={ele.discountedPrice}
                  rating={ele.rating}
                  id={ele._id}
                  handleDelete={handleDelete}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-white">No products available.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default HomePage;
