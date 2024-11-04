"use client";
import { useState } from "react";
import { BackButton, BackButton2 } from "@/components/ui/BackButton/BackButton";
import { BiEditAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { SecuritySetting } from "../security-setting/SecuritySetting";
import { DeliverySetup } from "../delivery-setup/DeliverySetup";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // Default to "Basic Information"
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className={styles.ProfileSettingContainer}>
      <h3 className={styles.ProfileSettingTitle}>Profile Settings</h3>

      <div className={styles.ProfileSettingsBox}>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 0 ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Basic Information
        </p>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 1 ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Security Setting
        </p>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 2 ? "bg-[#fff]" : "hover:bg-[#fff]"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Delivery Setup
        </p>
      </div>

      <div className={styles.MobileBackBtnSettings}>
        <BackButton className={styles.MobileBackButton} />
        <div
          className={styles.MobileProfileSettingsBox}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div>
            {activeTab === 0
              ? "Basic Information"
              : activeTab === 1
              ? "Security Setting"
              : "Delivery Setup"}
          </div>
          <FaAngleDown />
        </div>
        {isDropdownOpen && (
          <div className={styles.DropdownMenu}>
            {["Basic Information", "Security Setting", "Delivery Setup"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setIsDropdownOpen(false);
                  }}
                  className={`${styles.DropdownMenuItem} ${
                    activeTab === index ? "bg-[#f0f0f0]" : "bg-[#fff]"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        )}
      </div>

      <BackButton2 className={styles.BackButton} />

      <form className={styles.FormContainer}>
        <div className={styles.FormFrame}>
          <div className={styles.FormFirstInput}>
            <div className={styles.FormName}>
              <label htmlFor="fullname" className={styles.FormLabel}>
                Name
              </label>
              <div className={styles.FormNameIcon}>
                <input
                  type="text"
                  className={styles.FormNameInput}
                  name="fullname"
                  placeholder="Kelvin Chikezie"
                />
                <BiEditAlt className={styles.EditIcon} />
              </div>
            </div>

            <div className={styles.FormName}>
              <label htmlFor="mobile" className={styles.FormLabel}>
                Mobile
              </label>
              <div className={styles.FormNameIcon}>
                <input
                  type="text"
                  className={styles.FormNameInput}
                  name="mobile"
                  placeholder="09034145971"
                />
                <BiEditAlt className={styles.EditIcon} />
              </div>
            </div>
          </div>

          <div className={styles.FormFirstInput}>
            <div className={styles.FormName}>
              <label htmlFor="state" className={styles.FormLabel}>
                State
              </label>
              <input
                className={styles.FormNameInput}
                list="states"
                id="state"
                name="state"
              />
              <datalist id="states">
                <option value="Ilorin" />
                <option value="Kano" />
              </datalist>
            </div>

            <div className={styles.FormName}>
              <label htmlFor="city" className={styles.FormLabel}>
                City
              </label>
              <input
                className={styles.FormNameInput}
                list="cities"
                id="city"
                name="city"
              />
              <datalist id="cities">
                <option value="Ilorin" />
                <option value="Offa" />
                <option value="Omu-Aran" />
                <option value="Kano" />
                <option value="Wudil" />
                <option value="Gaya" />
              </datalist>
            </div>
          </div>

          <div className={styles.FormTextareaBox}>
            <label htmlFor="address" className={styles.FormTextareaLabel}>
              Address
            </label>
            <textarea
              className={styles.FormTextareaArea}
              placeholder="24 Louk Street off 120 tonimas"
              name="address"
              rows={4}
              cols={40}
            ></textarea>
          </div>

          <button className={styles.FormSubmit}>Submit</button>
        </div>
      </form>

      <div
        className={`${styles.SecuritySettingContainer} ${
          activeTab === 1 ? "block" : "hidden"
        }`}
      >
        <SecuritySetting />
      </div>
      <div
        className={`${styles.DeliverySetupContainer} ${
          activeTab === 2 ? "block" : "hidden"
        }`}
      >
        <DeliverySetup />
      </div>
    </div>
  );
};
