import React, { useEffect, useState } from "react";

function App() {
  const [fa1, setFa1] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFa1(data);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {fa1.map((f, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={f.image}
              alt={f.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4>{f.title}</h4>
            <p>{f.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
