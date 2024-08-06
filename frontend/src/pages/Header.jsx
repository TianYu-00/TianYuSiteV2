import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frog_drink.gif";
import { Switch } from "@headlessui/react";

export default function Header() {
  const [enabled, setEnabled] = useState(false);
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
        <div className="whitespace-nowrap p-2">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600 "
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6 " />
          </Switch>
        </div>
      </div>
    </div>
  );
}
