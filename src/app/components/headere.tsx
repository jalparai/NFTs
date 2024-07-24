"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Images/logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#3B3B3B] text-white">
      <nav className="container mx-auto p-4 lg:flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none float-right relative top-[-34px]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center justify-between lg:w-[55%] xl:w-[40%] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/">
            <span className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 text-white text-[16px]">
              Marketplace
            </span>
          </Link>
          <Link href="/about">
            <span className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">
              Rankings
            </span>
          </Link>
          <Link href="/services">
            <span className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">
              Connect a wallet
            </span>
          </Link>
          <Link
            href="/contact"
            className="lg:w-auto lg:mt-0 mt-[10px] w-fit flex items-center justify-evenly bg-[#A259FF] py-3 px-5 rounded-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0001 13.124C8.57374 13.124 7.17251 13.4995 5.93728 14.2128C4.70205 14.926 3.67634 15.9518 2.96327 17.1872C2.79071 17.4861 2.40848 17.5886 2.10953 17.416C1.81058 17.2435 1.70812 16.8612 1.88068 16.5623C2.70345 15.1369 3.88696 13.9532 5.31223 13.1303C6.7375 12.3073 8.3543 11.874 10.0001 11.874C11.6459 11.874 13.2627 12.3073 14.688 13.1303C16.1132 13.9532 17.2968 15.1369 18.1195 16.5623C18.2921 16.8612 18.1896 17.2435 17.8907 17.416C17.5917 17.5886 17.2095 17.4861 17.0369 17.1872C16.3239 15.9518 15.2982 14.926 14.0629 14.2128C12.8277 13.4995 11.4265 13.124 10.0001 13.124Z"
                fill="white"
              />
            </svg>
            <span className="block  lg:inline-block lg:mt-0 lg:ml-2">
              Sign Up
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
