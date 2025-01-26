// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
        Saylani Admin
      </h1>
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
