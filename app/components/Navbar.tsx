import {Disclosure} from "@headlessui/react";
import {Link} from "@remix-run/react";
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
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default Navbar;
