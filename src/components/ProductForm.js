import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ onSave, onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [quality, setQuality] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!name || !price || !size || !quality) {
      console.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/products",
        { name, price: Number(price), size, quality }
      );
      onSave(response.data); 
      onClose(); 
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded">
        <h2 className="text-xl mb-4">Add New Product</h2>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quality:</label>
          <input
            type="text"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
