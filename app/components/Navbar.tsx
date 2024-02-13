import {Disclosure} from "@headlessui/react";
import {Link, NavLink} from "@remix-run/react";
import React from "react";

function Navbar() {
  return (
    <Disclosure as="nav">
      {({open}) => (
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex items-center">
                <Link to="/">
                  <h1 className="text-2xl font-medium">
                    Sam <span className="text-teal-400">Painting Studio</span>
                  </h1>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "border-teal-400 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  }
                  to={"/"}>
                  Home
                </NavLink>
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "border-teal-400 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  }
                  to={"/about"}>
                  About
                </NavLink>
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "border-teal-400 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  }
                  to={"/gallery"}>
                  Gallery
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default Navbar;
