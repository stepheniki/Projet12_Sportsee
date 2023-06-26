import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";


export default function Header() {
    
  return (
    <div className="Head">
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <div className="Nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </div>
    </div>
  );
};

