import React from "react";
import Image from "next/image";

const TimePotionSection = () => {
  return (
    <div className="flex justify-center items-center py-[2rem]">
      <div className="flex flex-wrap items-center gap-16 grow max-w-[90rem] px-4">
        <div className="flex flex-col gap-8 items-center grow order-2 sm:order-1">
          <Image
            src={"/assets/apex-arena/time-potion.png"}
            alt={"Time Potion"}
            height={720}
            width={560}
            className="w-full max-w-[300px]"
          />
        </div>
        <div className="flex flex-col gap-8 lg:items-end grow lg:max-w-[566px] order-1 sm:order-2">
          <h1 className="lg:text-right text-cNeutral-100 text-2xl sm:text-[56px] font-bold font-[trispace]">
            Time Potion $TPN
          </h1>
          <p className="lg:text-right text-cNeutral-100 text-base font-medium font-[spacegrotesk]">
            The Rare Mushroom serves as the in-game BEP-20 token within the
            Soltice Universe. This asset can be utilized to level up your
            Soltice monster and is obtainable through various adventurous
            activities.
          </p>

          <p className="flex flex-col gap-2 lg:text-right text-cNeutral-100 text-base font-medium font-[spacegrotesk]">
            <span>TAXATION:</span>
            <span>
              The Rare Mushroom serves as the in-game BEP-20 token within the
              Soltice Universe. This asset can be utilized to level up your
              Soltice monster and is obtainable through various adventurous
              activities.
            </span>
            <span>
              Rare Mushroom (TPN) is subject to a taxation rate of 4%, which is
              distributed as follows: 1% is allocated to the team wallet, 1% to
              the development wallet, and 2% is directed towards liquidity.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimePotionSection;
