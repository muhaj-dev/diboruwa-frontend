"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

export const ProfileSidebar: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Profile Settings");

  const profileInfo = {
    icon: <IoPersonOutline className="text-2xl text-green-700" />,
    name: "Kelivin Chikezie",
    email: "chikeziekelivin@gmial.com",
    href: "/profile",
  };

  const menuItems: MenuItem[] = [
    {
      icon: <BsPersonCircle />,
      label: "Profile Settings",
      href: "/profile/profile-settings",
    },
    { icon: <HiOutlineCube />, label: "Orders", href: "/profile/orders" },
    { icon: <IoIosHeartEmpty />, label: "Favorite", href: "/profile/favorite" },
    {
      icon: <LiaAwardSolid />,
      label: "Subscriptions",
      href: "/profile/subscriptions",
    },
    {
      icon: <HiOutlineEnvelope />,
      label: "Messages",
      href: "/profile/messages",
    },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className="relative">
      <HiMenuAlt4
        className="hidden md:block w-7 h-7 cursor-pointer absolute top-1 left-6"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      />
      <div
        className={`fixed md:relative bg-white rounded-lg shadow-md w-1/3 md:w-full h-full p-6 transition-transform duration-300 ${
          isSidebarVisible
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } md:transform-none`}
      >
        <MdRestaurantMenu
          className="hidden md:block w-7 h-7 cursor-pointer absolute right-4"
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        />
        <Link href={profileInfo.href} className="flex items-center gap-2 mb-4">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
            {profileInfo.icon}
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-medium text-gray-800">
              {profileInfo.name}
            </p>
            <p className="text-sm text-gray-800">{profileInfo.email}</p>
          </div>
        </Link>
        <hr className="my-4 border-t border-gray-300" />
        <div className="flex flex-col">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item.label)}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  activeItem === item.label
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6">
                    {item.icon}
                  </div>
                  <p
                    className={`text-lg font-normal ${
                      activeItem === item.label
                        ? "text-green-700"
                        : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
                <LiaAngleRightSolid
                  className={`w-5 h-5 ${
                    activeItem === item.label
                      ? "text-green-700"
                      : "text-gray-800"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
