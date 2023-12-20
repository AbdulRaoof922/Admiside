import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ onSave, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", { name, email, password,  });
      onSave(response.data.user); // Assuming the backend returns the created user
      onClose(); 
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded">
        <h2 className="text-xl mb-4">Add New User</h2>

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
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
  <label>Password:</label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
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

export default UserForm;
