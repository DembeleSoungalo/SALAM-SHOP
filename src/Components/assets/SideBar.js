// src/Sidebar.js
import React from 'react';
import './SideBar.css';
const SideBar = () => {
    return (
        <div className="sidebar hide-on-medium">
            <h2>SideBar</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default SideBar;