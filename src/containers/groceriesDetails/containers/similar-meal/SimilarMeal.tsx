import React from "react";
import { FirstSimilarMeal } from "./FirstSimilarMeal";
import { SecondSimilarMeal } from "./SecondSimilarMeal";

interface SimilarMealProps {
  id: string;
}

export const SimilarMeal: React.FC<SimilarMealProps> = ({ id }) => {
  return (
    <section className="p-0">
      <FirstSimilarMeal id={id} />
      <SecondSimilarMeal id={id} />
    </section>
  );
};
