// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCoins, FaSignOutAlt, FaStore, FaHome, FaUserAlt, FaShoppingBag, FaThList } from "react-icons/fa";
// import WasteDetails from '../pages/WasteDetails/WasteDetails'; // Corrected import path

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />
    },
    {
      path: "/wastedetails",
      name: "Waste Details",
      icon: <FaThList />
    },
    {
      path: "/mywaste",
      name: "My Waste ",
      icon: <FaThList />
    },
    {
      path: "/products",
      name: "Products",
      icon: <FaStore />
    },
    {
      path: "/cart",
      name: "Cart",
      icon: <FaShoppingBag />
    },
    {
      path: "/coupons",
      name: "Coupons",
      icon: <FaCoins />
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaSignOutAlt />
    }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Hello...!</h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
