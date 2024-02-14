import {Disclosure} from "@headlessui/react";
import {Link, NavLink} from "@remix-run/react";
import {Theme, useTheme} from "remix-themes";
import {BurgerBars, MoonIcon, SunIcon, Xmark} from "../icons";
import BurgerLink from "./components/BurgerLink";
import HeaderLink from "./components/HeaderLink";
import {NavLinks} from "~/global/constants";
import {NavLinkProps} from "~/global/interfaces";

function Navbar() {
  const [theme, setTheme] = useTheme();

  return (
    <Disclosure as="nav">
      {({open}) => (
        <>
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
                  {Object.values(NavLinks).map((link, i) => (
                    <HeaderLink key={i} name={link.name} path={link.path} />
                  ))}
                  <button
                    onClick={() =>
                      setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
                    }>
                    {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
                  </button>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center p-2 rounded-md text-gray-400
             hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset 
             focus:reing-teal-500 dark:hover:bg-gray-800">
                  {open ? <Xmark /> : <BurgerBars />}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {Object.values(NavLinks).map((link, i) => (
                <BurgerLink key={i} name={link.name} path={link.path} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
