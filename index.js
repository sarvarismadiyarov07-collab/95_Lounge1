import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">95 Lounge</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
