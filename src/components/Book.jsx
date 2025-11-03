    import React from 'react';

    const Book = ({ image, title, publication, publicationDate, price, reviews }) => {
    return (
        <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        <div className="w-full h-72 overflow-hidden">
            <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2 bg-gray-50"
            />
        </div>
        <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Publication:</span> {publication}
            </p>
            <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Year:</span> {publicationDate}
            </p>
            <p className="text-gray-800 font-semibold text-base mb-2">₹{price}</p>
            <div className="flex items-center text-yellow-500 text-sm mb-4">
            <span className="mr-1">⭐</span>
            {reviews} reviews
            </div>
            
            <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Add to Cart
            </button>
            <button className="flex-1 border border-gray-400 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Details
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default Book;
