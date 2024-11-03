import FoodDetail from "@/containers/foodDetails/FoodDetail";
import React from "react";

export const metadata = {
  title: "Food Details",
};

export type IpageProps = {
  params: {
    id: string;
  };
};

// Make the component async
const page: React.FC<IpageProps> = async ({ params }) => {
  const { id } = params;

  return (
    <div>
      <FoodDetail id={id} />
    </div>
  );
};

export default page;
