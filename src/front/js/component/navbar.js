import React from "react";
import { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button onClick={toggleCollapse}>Toggle Collapse</button>
      <ul>
        <li>
          <FaHome /> {collapsed ? null : "Home"}
        </li>
        <li>
          <FaUser /> {collapsed ? null : "Profile"}
        </li>
        <li>
          <FaCog /> {collapsed ? null : "Settings"}
        </li>
        {/* Add more sidebar items */}
      </ul>
    </div>
  );
};
