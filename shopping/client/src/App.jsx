import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  // ✅ API se data fetch kar rahe hain
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛍️ Product List</h2>

      {/* ✅ Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((item, i) => (
          <div
            key={i}
            className="w-56 bg-white shadow-md rounded-xl p-4 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 border border-gray-200 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 mx-auto object-contain mb-3"
            />
            <h4 className="text-sm font-semibold text-gray-700 mb-2 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-lg font-bold text-blue-600">💰 ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
