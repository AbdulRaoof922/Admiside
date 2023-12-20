import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from './../../components/ProductForm';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/admin/products/${productId}`);
        const newProducts = products.filter(
          (product) => product._id !== productId
        );
        setProducts(newProducts);
      } catch (error) {
        console.error("Error deleting the product:", error);
      }
    }
  };
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]); 
    setShowForm(false); 
  };
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Admin Product List</h1>
      <div className="flex justify-end mb-2">
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setShowForm(true)} 
    >
      Add Product
    </button>
      </div>
      
      {showForm && (
        <ProductForm
          onClose={() => setShowForm(false)}
          onProductAdd={handleAddProduct}
        />
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Size</th>
              <th className="px-4 py-2 text-center">Quality</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="bg-white border-b">
                <td className="px-4 py-2 text-center">{product.name}</td>
                <td className="px-4 py-2 text-center">${product.price}</td>
                <td className="px-4 py-2 text-center">{product.size}</td>
                <td className="px-4 py-2 text-center">{product.quality}</td>
                <td className="px-4 py-2 text-center">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-600 hover:text-red-900 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ProductPage;
