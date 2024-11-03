"use client";
import { useState } from "react";
import { BackButton, BackButton2 } from "@/components/ui/BackButton/BackButton";
import { BiEditAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { SecuritySetting } from "../security-setting/SecuritySetting";
import { DeliverySetup } from "../delivery-setup/DeliverySetup";

export const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // Default to "Basic Information"
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="w-full p-8 pb-14 mx-auto flex flex-col flex-shrink-0 rounded-lg bg-white md:p-6 md:pt-4 sm:px-0 sm:bg-transparent">
      <h3 className="text-[var(--Black-100,#2a2a2a)] font-poppins text-2xl font-light mb-4 hidden sm:block lg:text-xl md:text-lg">
        Profile Settings
      </h3>

      <div className="flex p-2 rounded-lg bg-[#f9f9f9] justify-between text-[var(--Soft-black,#565656)] font-poppins text-base gap-4 sm:hidden lg:text-sm md:gap-2">
        <p
          className={`flex justify-center items-center px-12 py-2 rounded-md cursor-pointer transition ${
            activeTab === 0 ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Basic Information
        </p>
        <p
          className={`flex justify-center items-center px-12 py-2 rounded-md cursor-pointer transition ${
            activeTab === 1 ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Security Setting
        </p>
        <p
          className={`flex justify-center items-center px-12 py-2 rounded-md cursor-pointer transition ${
            activeTab === 2 ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Delivery Setup
        </p>
      </div>

      <div className="relative flex items-center sm:hidden">
        <BackButton className="mt-4 hidden sm:block" />
        <div
          className="relative flex w-full justify-center items-center gap-1 px-4 py-2 rounded-md bg-[#f6f6f6] cursor-pointer font-poppins text-base font-normal"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>
            {activeTab === 0
              ? "Basic Information"
              : activeTab === 1
              ? "Security Setting"
              : "Delivery Setup"}
          </span>
          <FaAngleDown />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-3 z-10">
            {["Basic Information", "Security Setting", "Delivery Setup"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg cursor-pointer ${
                    activeTab === index ? "bg-gray-100" : ""
                  } hover:bg-gray-100`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        )}
      </div>

      <form className="flex flex-col items-center gap-6 p-16 border border-[rgba(118,117,117,0.21)] rounded-md bg-[var(--white,#fefefe)] lg:border-none lg:p-0 lg:bg-transparent md:p-6 sm:w-full sm:border-none sm:bg-[rgba(252,252,252,0.38)]">
        <div className="flex flex-col items-center gap-6 p-8 w-full rounded-md bg-[var(--white,#fefefe)] lg:w-full lg:p-0 lg:bg-transparent">
          <div className="flex items-center gap-4 w-full sm:flex-col">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[var(--Soft-black,#565656)] font-poppins text-base font-normal">
                Name
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-80 h-10 pl-3 rounded-md bg-[#f6f6f6] placeholder:text-[var(--Soft-black,#565656)] placeholder:font-poppins placeholder:text-base placeholder:font-normal focus:border-green-500 focus:outline-none md:w-60 sm:w-full sm:border-[0.5px] sm:border-gray-400"
                  placeholder="Enter your name"
                />
                <BiEditAlt className="absolute right-4 text-[24px] text-[#565656] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-[var(--Soft-black,#565656)] font-poppins text-base font-normal">
              Additional Information
            </label>
            <textarea
              className="w-[41vw] h-32 p-2 rounded-md bg-[#f6f6f6] placeholder:text-[var(--Soft-black,#565656)] placeholder:font-poppins placeholder:text-base placeholder:font-normal focus:border-green-500 focus:outline-none resize-none md:w-80 sm:w-full sm:border-[0.5px] sm:border-gray-400"
              placeholder="Enter additional information"
            />
          </div>

          <button className="w-[41vw] flex justify-center items-center gap-2 p-2 rounded-md bg-[rgba(118,117,117,0.22)] text-white font-poppins text-base font-normal md:w-80 sm:w-full">
            Submit
          </button>
        </div>
      </form>

      <div
        className={`bg-[rgba(252,252,252,0.38)] ${
          activeTab === 1 ? "block" : "hidden"
        }`}
      >
        <SecuritySetting />
      </div>
      <div
        className={`bg-[rgba(252,252,252,0.38)] ${
          activeTab === 2 ? "block" : "hidden"
        }`}
      >
        <DeliverySetup />
      </div>
    </div>
  );
};
