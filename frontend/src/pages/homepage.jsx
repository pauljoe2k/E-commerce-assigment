import { useEffect, useState } from 'react';
import Card from '../components/ProdCard/Card';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get(
      'http://localhost:8080/product/get-products'
    );
    setData(response.data.data);
    console.log(response)
  };

  useEffect(() => {
    // console.log('clicked');

    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);
  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
      <div className="p-8 shadow-lg rounded-lg max-w-6xl w-full z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((ele, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg"
              >
                <Card
                  title={ele.title}
                  image={ele.images?.[0] || 'Product Image missing'}
                  Index={index}
                  description={ele.description}
                  originalPrice={ele.originalPrice}
                  discountedPrice={ele.discountedPrice}
                  rating={ele.rating}
                  id={ele._id}
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