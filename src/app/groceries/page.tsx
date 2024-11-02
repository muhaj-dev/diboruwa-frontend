import React from "react";
import Groceries from "@/containers/groceries/Groceries";
import { Metadata } from "next";

export const metadata = {
  title: "Groceries",
};


// Page component now receives `params` directly
const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Access the id directly


  return (
    <div>
      <Groceries params={{ id }} />
    </div>
  );
};

export default Page;
