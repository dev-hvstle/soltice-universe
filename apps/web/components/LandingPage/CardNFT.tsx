"use client";
import React from "react";
import Image from "next/image";
import WinRateIcon from "@/public/icons/win-rate-white.svg";
import MultiplierIcon from "@/public/icons/multiplier-white.svg";
import MaxWinIcon from "@/public/icons/max-win-white.svg";

interface ICardNFT {
  className: string;
  imgUrl: string;
  name: string;
  description: any;
  winrate: any;
  multiplier: any;
  maxwin: any;
  setSelectedName: any;
}

const CardNFT = ({
  className,
  imgUrl,
  name,
  description,
  winrate,
  multiplier,
  maxwin,
  setSelectedName,
}: ICardNFT) => {
  const carddata = [
    {
      name: "Win Rate: ",
      icon: <WinRateIcon />,
      value: winrate,
    },
    {
      name: "Multiplier: ",
      icon: <MultiplierIcon />,
      value: multiplier,
    },
    {
      name: "Max Win: ",
      icon: <MaxWinIcon />,
      value: maxwin,
    },
  ];

  return (
    <div
      onClick={() => setSelectedName(name)}
      onMouseEnter={() => setSelectedName(name)}
      className={`flex flex-col w-full max-w-[400px] p-4 gap-4 rounded ${className}`}
    >
      <div className="flex flex-wrap gap-2">
        <Image src={imgUrl} alt={name} height={64} width={64} />
        <div className="flex flex-col gap-1">
          <h1 className="text-cNeutral-100 text-2xl font-bold uppercase">
            {name}
          </h1>
          <p className="font-[spacegrotesk] text-base font-normal text-cNeutral-100">
            {description}
          </p>
        </div>
      </div>
      {carddata.map((data, index) => {
        return (
          <div
            key={index}
            className="px-2 py-0 flex flex-wrap gap-2 items-center w-full"
          >
            {data.icon}
            <h1 className="font-[spacegrotesk] text-base text-cNeutral-100">
              <span className="font-normal">{data.name} </span>
              <span className="font-bold">
                {data.value} {data.name === "Win Rate: " && "%"}
                {data.name === "Multiplier: " && "X"}
                {data.name === "Max Win: " && "TPN"}
              </span>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default CardNFT;
