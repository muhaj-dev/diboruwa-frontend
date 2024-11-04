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
import "./profile-sidebar.css";
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
    { icon: <HiOutlineCube />, label: "Orders", href: "/profile/or-ders" },
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
    <div className="ProfileContainer">
      <HiMenuAlt4
        className="MenuIcon"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      />
      <div
        className={`ProfileSidebarContainer ${
          isSidebarVisible
            ? "transform translate-x-0"
            : "transform -translate-x-[200%]"
        } md:transform-none`}
      >
        <MdRestaurantMenu
          className="CancelIcon"
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        />
        <Link href={profileInfo.href} className="ProfileSidebarProfileLink">
          <div className="ProfileSidebarPics">{profileInfo.icon}</div>
          <div className="ProfileSidebarName">
            <p className="ProfileName">{profileInfo.name}</p>
            <p className="ProfileEmail">{profileInfo.email}</p>
          </div>
        </Link>
        <hr className="SidebarLine" />
        <div className="ProfileSidebarSidemenu">
          <ul className="ProfileSidebarList">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item.label)}
                className={`ProfileSidebarItem ${
                  activeItem === item.label
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
              >
                <Link href={item.href} className="ProfileSidebarLink">
                  <div className="ProfileSidebarLeftIcon">{item.icon}</div>
                  <p
                    className={`ProfileSidebarLinkName ${
                      activeItem === item.label
                        ? "text-green-700"
                        : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
                <LiaAngleRightSolid
                  className={`ProfileSidebarRightIcon ${
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
