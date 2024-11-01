"use client";
import React, { useState, useEffect, useMemo } from "react";
import "./components/home.css";
import { useRouter } from "next/navigation";
import ProductServices from "./components/ProductServices";
import RestAdvert from "./components/restAdvert/RestAdvert";
import Meal from "./components/Meal/Meal";
import Resturant from "./components/restCont/RestContent";
import FoodImage from "./components/foodImage/FoodImage";
import Groceries from "./components/Groceries/Groceries";
import Delivery from "./components/foodDelivery/Delivery";
import Partner from "./components/Partner/Partner";
import LaundryService from "./components/laundryService/LaundryService";
import GroomingService from "./components/groomingService/GroomingService";
import Cleaning from "./components/laundryService/Cleaning";
import { Data } from "@/constants/index";
import Newsletter from "../partnerWithUs/component/newsletter/Newsletter";

type ServiceName =
  | "Laundry chores."
  | "Cleaning duties"
  | "Cooking responsibilities"
  | "Moving/Packing stress";

const serviceTextColorMapping: Record<ServiceName, string> = {
  "Laundry chores.": "#3277a8",
  "Cleaning duties": "#e67300",
  "Cooking responsibilities": "#a67c00",
  "Moving/Packing stress": "#800080",
};

const Home: React.FC = () => {
  const router = useRouter();

  const serviceOptions: string[] = useMemo(
    () => [
      "Laundry chores.",
      "Cleaning duties",
      "Cooking responsibilities",
      "Moving/Packing stress",
    ],
    []
  );

  const [currentService, setCurrentService] = useState<ServiceName>(
    serviceOptions[0] as ServiceName
  );
  const [serviceIndex, setServiceIndex] = useState(0);

  const currentServiceTextColor =
    serviceTextColorMapping[currentService] || "defaultTextColor";

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (serviceIndex + 1) % serviceOptions.length;
      setServiceIndex(nextIndex);
      setCurrentService(serviceOptions[nextIndex] as ServiceName);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceIndex, serviceOptions]);

  // Extract the tags from the Data array
  const tags = useMemo(() => Data.map((item: { tag: any }) => item.tag), []);

  const [selectedTag, setSelectedTag] = useState<string>(tags[0] || "Food");

  // Change the selectedTag every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTag((prevTag) => {
        const currentIndex = tags.indexOf(prevTag);
        const nextIndex = (currentIndex + 1) % tags.length;
        return tags[nextIndex];
      });
    }, 4000); // 4000 milliseconds = 4 seconds

    return () => clearInterval(interval);
  }, [tags]);
  return (
    <>
      <div className="home-container">
        <div className="hero_frame">
          <ProductServices
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            data={[]}
          />
        </div>
        <RestAdvert selectedTag={selectedTag} />
        <Resturant />
        <Meal />
        <Delivery />
        <FoodImage />
        <LaundryService />
        <Cleaning />
        <GroomingService />
        <Groceries />
        <Partner />
        <Newsletter />
      </div>
    </>
  );
};
export default Home;