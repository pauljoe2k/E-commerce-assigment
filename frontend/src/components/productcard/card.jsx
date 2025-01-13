/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Card({
  title = 'No Title Provided',
  image = 'https://via.placeholder.com/150',
  description = 'No description available.',
  discountedPrice = 0,
  originalPrice = 0,
  rating = 0,
  id,
  handleDelete,
}) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt="Product"
          className="w-full h-48 object-cover"
        />
        {discountedPrice > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(Math.round(rating))].map((_, index) => (
            <span key={index} className="text-yellow-400">&#9733;</span>
          ))}
          {[...Array(5 - Math.round(rating))].map((_, index) => (
            <span key={index} className="text-gray-300">&#9733;</span>
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-xl font-bold text-gray-900">${originalPrice.toFixed(2)}</span>
            {discountedPrice > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${discountedPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
              Add to cart
            </button>
            <Link to={`/update-form/${id}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
                Update
              </button>
            </Link>
            <button
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200"
              onClick={() => handleDelete(id)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
