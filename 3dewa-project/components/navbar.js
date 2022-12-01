import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollPosition } from "hooks/useScollPosition";

export const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dynamicClass, setDynamicClass] = useState("");
  const router = useRouter();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (router.pathname.includes("about")) {
      if (scrollPosition > 200) {
        setDynamicClass("bg-white text-blue-800 shadow");
      } else {
        setDynamicClass("bg-transparent text-white");
      }
    } else {
      setDynamicClass("bg-white text-blue-800 shadow");
    }
  }, [router.pathname, scrollPosition]);

  return (
    <>
      <nav
        className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ${dynamicClass}`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative items-center flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              3D EWA
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="p-2 space-y-2 border rounded shadow">
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
              </div>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col gap-4 lg:flex-row list-none lg:ml-auto">
              <Link
                href="/modals"
                className="flex items-center hover:text-purple-600"
              >
                Modals
              </Link>
              <Link
                href="/about"
                className="flex items-center hover:text-purple-600"
              >
                About Us
              </Link>
              <Link
                href="/sign-in"
                className="flex items-center hover:text-purple-600"
              >
                Sign In
              </Link>
              <Link
                href="/payment"
                className="flex items-center hover:bg-blue-800 text-white bg-blue-700 py-1 px-3"
              >
                Payment
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
