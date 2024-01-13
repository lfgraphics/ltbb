"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { menuItems } from "@/constants/navigationData";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleShowDropdown = (item) => {
    setShowDropdown(true);
    setHoveredLink(item);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (item) => {
    if (!item.children) toggleMenu();
    setExpandedItem(expandedItem === item.name ? null : item.name);
  };

  const hideSubDropdown = () => {
    setExpandedItem(null);
    toggleMenu();
  };

  return (
    <React.Fragment>
      <header className=" w-full sticky top-0 z-30 border-b navbar pb-4 shadow-md ">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="inline-flex space-x-2 logo-container logo">
            <span>
              <Link href="/">
                <Image
                  src="/The_Legal Base-logos_black.png"
                  alt="Logo"
                  width={140}
                  height={100}
                ></Image>
              </Link>
            </span>
          </div>

          <div className="hidden lg:block overflow-x-hidden">
            <ul className="inline-flex space-x-10">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-800 hover:text-black"
                    onMouseEnter={() => handleShowDropdown(item)}
                    onMouseLeave={hideDropdown}
                  >
                    {item.name}
                  </Link>
                  {item?.children && (
                    <div
                      className={`absolute top-10  transform origin-top-left transition duration-500 ${showDropdown && item.name === hoveredLink?.name
                        ? "scale-100"
                        : "scale-0"
                        }`}
                      onMouseEnter={() => handleShowDropdown(item)}
                      onMouseLeave={hideDropdown}
                    >
                      <ul className="bg-white py-4  px-6 mt-6 rounded-xl flex flex-col gap-2 shadow-lg ">
                        {item?.children?.map((item) => {
                          return (
                            <li key={item.name} onClick={hideDropdown}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-800 hover:text-gray-500 transition duration-300"
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              ))}

              <li></li>
            </ul>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>

          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link href="/">
                        <Image
                          src="/The_Legal Base-logos_black.png"
                          alt="Logo"
                          width={100}
                          height={80}
                        />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <React.Fragment key={item.name}>
                          <Link
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                            onClick={() => toggleSubMenu(item)}
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                          {expandedItem === item.name && item.children && (
                            <ul className="bg-white px-6 rounded-xl flex flex-col gap-2">
                              {item?.children?.map((childItem) => (
                                <li key={childItem.name} onClick={hideSubDropdown}>
                                  <Link
                                    href={childItem.href}
                                    className="text-sm text-gray-800 hover:text-gray-500 transition duration-300"
                                  >
                                    {childItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </React.Fragment>
                      ))}
                      <Link
                        href="/services"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        onClick={() => toggleSubMenu("services")}
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Our Services
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
