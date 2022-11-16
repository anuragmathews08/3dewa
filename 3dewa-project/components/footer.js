import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-blue-800 text-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let&apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Feel free to email us on below email address
              </h5>
              <p>support@3dewa.com</p>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="flex flex-col">
                    <Link href="/about-us">About Us</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/sign-in">Sign In</Link>
                    <Link href="/payment">Payment</Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} 3D EWA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
