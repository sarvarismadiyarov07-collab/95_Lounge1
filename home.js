src/pages/Home.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/MenuCard";

function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <div className="flex flex-wrap gap-4">
        {menu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;