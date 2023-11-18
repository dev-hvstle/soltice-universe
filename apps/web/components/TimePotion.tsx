import { cn } from "@/lib/utils";
import React from "react";

interface ITimePotion {
  balance: any;
}

const TimePotion = ({ balance }: ITimePotion) => {
  return (
    <div className="flex flex-col">
      <h1
        className={(cn("font-[spacegrotesk]"), "text-xs font-medium uppercase")}
      >
        Time Potion
      </h1>
      <h1
        className={(cn("font-[spacegrotesk]"), "text-base font-bold uppercase")}
      >
        {balance}
      </h1>
    </div>
  );
};

export default TimePotion;
