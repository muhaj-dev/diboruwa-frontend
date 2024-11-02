"use client";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sublinks } from "@/constants";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-8 md:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-8 lg:gap-0">
        {/* Column 1 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-6 lg:mb-0">
          <div className="mb-4 flex flex-col lg:items-start sm:flex-col items-center xs:items-center xxs:items-center">
            <div className="relative w-24 h-10 mb-4">
              <Image
                src="/logo.png"
                fill={true}
                alt="Logo"
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 mb-4 text-center lg:text-left">
              Making life easier, one service at a time.
            </p>
          </div>

          {sublinks.map((column, index) => (
            <div key={index} className="mb-3 flex flex-col gap-4 sm:items-center ">
              <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-4">
                {column.title}
              </h3>
              <ul className="list-none p-0 text-center lg:text-left">
                {column.links.map((link, index) => (
                  <li key={index} className="mb-2 text-gray-700">
                    <Link
                      href={link.path}
                      className="text-black hover:text-[#27a124] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-16">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins">
            Follow Us
          </h3>
          <div className="flex gap-5 mt-1">
            <Link
              href="https://web.facebook.com/people/Dibo-Ruwa/100091340989617/"
              className="text-content text-2xl"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://twitter.com/DiboRuwa"
              className="text-content text-2xl"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/diboruwa/"
              className="text-content text-2xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dibo-ruwa"
              className="text-content text-2xl"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DiboRuwa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
