import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frog_drink.gif";
import { Switch } from "@headlessui/react";

export default function Header({ toggleTheme, theme }) {
  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Logo */}
      <div>
        <img src={logo} className="h-20" alt="Logo" />
      </div>
      {/* Nav */}
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="text-copy-primary border whitespace-nowrap p-2 mr-4 hover:bg-cta-active hover:text-cta-text"
        >
          Home
        </Link>
        <Link
          to="/portfolios"
          className="text-copy-primary border whitespace-nowrap p-2 hover:bg-cta-active hover:text-cta-text"
        >
          Portfolios
        </Link>
        <div className="whitespace-nowrap p-2">
          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600 "
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6 " />
          </Switch>
        </div>
        {/* <div className="whitespace-nowrap p-2">
          <button className="w-20 h-20 border bg-grape/50"></button>
        </div> */}
      </div>
    </div>
  );
}
