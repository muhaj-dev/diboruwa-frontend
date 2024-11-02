import React from "react";
import Food from "@/containers/food/Food";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food",
};

// Page component now receives `params` directly
const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Access the id directly

  return (
    <div>
      <Food params={{ id }} />
    </div>
  );
};

export default Page;
