import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frog_drink.gif";

export default function Header() {
  return (
    <div className="border flex justify-between items-center p-4">
      {/* Logo */}
      <div>
        <img src={logo} className="h-20" alt="Logo" />
      </div>
      {/* Nav */}
      <div className="flex justify-center items-center">
        <Link to="/" className="border whitespace-nowrap p-2 mr-4">
          Home
        </Link>
        <Link to="/portfolios" className="border whitespace-nowrap p-2">
          Portfolios
        </Link>
      </div>
    </div>
  );
}
