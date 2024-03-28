import React from "react";
import { BiHome, BiBookAlt, BiTask, BiMoney, BiBody } from "react-icons/bi";
import "../../nav/navDashCss/navside.css";
import { NavLink } from "react-router-dom";
import "../navDashCss/content.css";
export default function NavSide() {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>My Bank</h2>
      </div>
      <div className="menu--list">
        <NavLink to={"/"} className="item">
          <BiHome className="icon" />
          Dashboard
        </NavLink>
        <NavLink to={"/profil/:id"} className="item">
          <BiBody className="icon" />
          Profile
        </NavLink>
        <NavLink to={"/supply"} className="item">
          <BiTask className="icon" />
          Supply
        </NavLink>
        <NavLink to={"/transfer"} className="item">
          <BiMoney className="icon" />
          Transfer
        </NavLink>
      </div>
    </div>
  );
}
