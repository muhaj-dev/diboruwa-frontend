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
    <footer className="bg-gray-200 text-black p-8">
      <div className="flex justify-between flex-wrap">
        {/* Column 1 */}
        <div className="flex flex-col mb-6">
          <div className="mb-4">
            <div className="relative w-24 h-10 mb-4">
              <Image
                src="/logo.png"
                fill={true}
                alt="Logo"
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Making life easier, one service at a time.
            </p>
          </div>

          {sublinks.map((column, index) => (
            <div key={index} className="mb-6 flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-4">
                {column.title}
              </h3>
              <ul className="list-none p-0">
                {column.links.map((link, index) => (
                  <li key={index} className="mb-2 text-gray-700">
                    <Link
                      href={link.path}
                      className="text-black hover:text-primary transition-colors"
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
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins">
            Follow Us
          </h3>
          <div className="flex gap-5 -mt-3">
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
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} DiboRuwa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
