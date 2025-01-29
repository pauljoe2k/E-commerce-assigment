import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from '../components/productcard/CartCard';
import { Link } from 'react-router-dom';
function CartPage() {
  const [UsersCartData, setUsersCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('Token is missing , Please login');
      }
      const response = await axios.get(
        `http://localhost:8080/cart/get-user-cart-data?token=${token}`
      );
      console.log(response);
      setUsersCartData(response.data.cartData);
    };

    getCartData();
  }, []);
  return (
    <div>
      <Link to={`/select-address`}>
        <button className="bg-slate-800 text-white px-5 py-2 rounded-md ml-40">
          Checkout
        </button>
      </Link>
      {UsersCartData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.productId.title}
              images={singleCartObject.productId.images[0]}
              //   Index={index}
              description={singleCartObject.productId.description}
              originalPrice={singleCartObject.productId.originalPrice}
              discountedPrice={singleCartObject.productId.discountedPrice}
              id={singleCartObject.productId._id}
              createdBy={'paulgay@bruh.com'}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;