import Input from "@/components/Input";
import PurchaseCard from "@/components/PurchaseCard";
import React, { useState } from "react";
import PurchaseButton from "./PurchaseButton";
import Image from "next/image";

const PurchaseView = () => {
  return (
    <div className="flex justify-center items-center pt-[8rem] pb-[2rem]">
      <div className="flex flex-col max-w-[75rem] gap-6 grow px-4">
        <h1 className="text-cNeutral-100 font-[spacegrotesk] text-2xl sm:text-5xl font-bold">
          Purchase
        </h1>

        <div className="flex flex-wrap justify-between items-center gap-8 px-0 sm:px-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-[spacegrotesk] text-cNeutral-100 font-bold text-xl sm:text-[32px]">
              Sparky the starter Soltice!
            </h1>

            <div className="flex flex-col">
              <PurchaseCard
                imgUrl={"/icons/win-rate-icon.svg"}
                title={"Win Rate: "}
                subTitle={"10%"}
              />
              <PurchaseCard
                imgUrl={"/icons/multiplier-icon.svg"}
                title={"Multiplier: "}
                subTitle={"1 X"}
              />
              <PurchaseCard
                imgUrl={"/icons/max-win-icon.svg"}
                title={"Win Win: "}
                subTitle={"4,000.00 $TPN"}
              />
            </div>

            <h1 className="text-base font-[spacegrotesk] text-cNeutral-100">
              Only <span className="font-bold">12,345</span> / 20,000 available
            </h1>

            {/* Create View For Buy Now Function */}
            <PurchaseButton />
          </div>
          <div className="flex justify-center items-center h-full w-full max-w-[500px] max-h-[500px] relative">
            <Image
              src={"/assets/purchase/sparky.png"}
              alt={"sparky"}
              height={400}
              width={400}
              className="relative z-[2] w-full"
            />

            <Image
              src={"/assets/purchase/sparky.png"}
              alt={"sparky"}
              height={400}
              width={400}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] blur-2xl w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseView;
