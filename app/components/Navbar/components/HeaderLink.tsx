import {NavLink} from "@remix-run/react";
import React from "react";
import {NavLinkProps} from "~/global/interfaces";

function HeaderLink({name, path}: NavLinkProps) {
  return (
    <NavLink
      className={({isActive}) =>
        isActive
          ? "border-teal-400 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      }
      to={path}>
      {name}
    </NavLink>
  );
}

export default HeaderLink;
