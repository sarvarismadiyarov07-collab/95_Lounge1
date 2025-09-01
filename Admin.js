src/pages/Admin.jsx

import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    axios.get("http://localhost:5000/api/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/menu", form)
      .then(() => {
        setForm({ name: "", price: "", image: "" });
        fetchMenu();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={addItem} className="space-y-2 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Add Item
        </button>
      </form>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.id} className="border p-2 rounded flex justify-between">
            <span>{item.name} - {item.price} so‘m</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;