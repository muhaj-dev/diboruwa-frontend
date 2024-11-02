"use client";
import "./component/groceries.css";
import { useRouter } from "next/navigation";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import MinsMeals from "./component/30MinsMeals/MinsMeals";
import FreeDelivery from "./component/freedelivery/FreeDelivery";

const isBetween10amAnd6pm = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 10 && hours < 18;
};

interface FoodProps {
  params: {
    id: string;
  };
}

const Groceries: React.FC<FoodProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking />
      <MostSold id={id} />
      <MinsMeals />
      <FreeDelivery />
    </div>
  );
};

export default Groceries;


