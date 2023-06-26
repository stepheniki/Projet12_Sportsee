import React from "react";
import iconMeditation from "../assets/iconMeditation.svg";
import iconBike from "../assets/iconBike.svg";
import iconSwiming from "../assets/iconSwiming.svg";
import iconDumbBell from "../assets/iconDumbBell.svg";
import { NavLink } from "react-router-dom";
import  "../styles.css";

export default function SideBar(){
    
  return (
    <div className="sidebar-container">
      <div className="sidebar-nav">
        <div className="sidebar-wrapper">
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </div>
        <div className="sidebar-copyright">Copyright, SportSee 2020</div>
      </div>
    </div>
  );
};

