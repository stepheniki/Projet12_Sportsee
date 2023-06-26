import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Home (){
    
  return (
    <div className="main-style">
      <div className="main-title">Sélectionnez un utilisateur</div>
      <NavLink to="user/12">👦 Karl </NavLink>
      <NavLink to="user/18">👩 Cecilia </NavLink>
    </div>
  );
};

