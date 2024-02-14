import {NavLink} from "@remix-run/react";
import React from "react";
import {NavLinkProps} from "~/global/interfaces";

function BurgerLink({name, path}: NavLinkProps) {
  return (
    <NavLink
      className={({isActive}) =>
        isActive
          ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
          : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"
      }
      to={path}>
      {name}
    </NavLink>
  );
}

export default BurgerLink;
