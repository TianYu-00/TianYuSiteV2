import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frog_drink.gif";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header({ toggleTheme, theme }) {
  return (
    <div className="flex items-center p-4">
      {/* Logo */}
      <div className="flex-shrink-0 hidden md:block">
        <img src={logo} className="h-20" alt="Logo" />
      </div>

      {/* Nav */}
      <div className="flex-grow flex items-center justify-end space-x-4">
        <Link to="/" className="text-copy-primary hover:border-b-2 whitespace-nowrap p-2 ">
          Home
        </Link>
        <Link to="/portfolio" className="text-copy-primary hover:border-b-2 whitespace-nowrap p-2">
          Portfolios
        </Link>

        <div className="whitespace-nowrap m-2 p-2">
          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-5 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-5">
              {theme === "light" ? (
                <SunIcon className="size-5 text-yellow-500" />
              ) : (
                <MoonIcon className="size-5 text-blue-700" />
              )}
            </span>
          </Switch>
        </div>
      </div>
    </div>
  );
}
