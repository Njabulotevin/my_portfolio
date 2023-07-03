"use client";

import Link from "next/link";

import { AlignRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOn, setIsMenuOn] = useState(false);

  const links = [
    { label: "Home", link: "/" },
    { label: "About Me", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contacts", link: "/contacts" },
  ];

  useEffect(() => {
    setIsMenuOn(false);
  }, [pathname]);

  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 w-full bg-primary-900">
      <motion.div
        style={{ height: 6, width: "100vw", scaleX: scrollYProgress }}
        className="h-2 fixed top-0 left-0 right-0 z-[1000] primary-gradient"
      ></motion.div>
      <section className="flex items-center justify-between max-w-[70vw] mx-auto lg:py-5 py-4 ">
        <img
          src="/Tev..png"
          alt="logo"
          className="w-[40px] h-[50px] lg:h-[54px] lg:w-[90px] object-contain "
        />
        <div className="hidden lg:flex ">
          <ul className="flex gap-10 font-medium text-lg text-gray-100">
            {links.map((link, i) => {
              return (
                <Link href={link.link} key={i}>
                  <li
                    className={clsx(
                      "cursor-pointer px-3",
                      pathname === link.link &&
                        "border-l-2 border-secondary-900"
                    )}
                  >
                    {link.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {isMenuOn && (
          <div className="flex flex-col gap-4 lg:hidden absolute z-50 bg-primary-900 top-0 h-screen w-[80vw] right-0 p-10">
            <div className="text-white ">
              <X
                className="cursor-pointer"
                onClick={() => {
                  setIsMenuOn(false);
                }}
              />
            </div>
            <ul className="flex flex-col gap-10 font-medium text-lg text-gray-100">
              {links.map((link, i) => {
                return (
                  <Link href={link.link} key={i}>
                    <li
                      className={clsx(
                        "cursor-pointer px-3",
                        pathname === link.link &&
                          "border-l-2 border-secondary-900"
                      )}
                    >
                      {link.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
        <div className="lg:hidden flex text-white">
          <button
            onClick={() => {
              setIsMenuOn(!isMenuOn);
            }}
          >
            <AlignRight />
          </button>
        </div>
      </section>
    </div>
  );
}
