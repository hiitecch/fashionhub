import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
     ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`;

  return (
    <div className="w-full md:w-56 lg:w-60 bg-white rounded-2xl border border-gray-200 shadow-md p-4 self-start">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Dashboard</h2>
      <nav className="flex flex-col gap-3 text-sm font-medium">
        <NavLink className={navLinkClass} to="/add">
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
          <span className="hidden md:inline">Add Items</span>
        </NavLink>

        <NavLink className={navLinkClass} to="/list">
          <img className="w-5 h-5" src={assets.order_icon} alt="List Icon" />
          <span className="hidden md:inline">List Items</span>
        </NavLink>

        <NavLink className={navLinkClass} to="/orders">
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders Icon" />
          <span className="hidden md:inline">Orders</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
