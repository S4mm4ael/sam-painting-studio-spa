import {ReactNode} from "react";
import {Navbar} from "../Navbar";

export function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">{children}</main>
    </div>
  );
}
