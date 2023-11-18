"use client";
import React, { useEffect, useState } from "react";
import CardNFT from "./CardNFT";
import Image from "next/image";

const NFTSection = () => {
  const [selectedName, setSelectedName] = useState("Sparky");

  function getImage() {
    switch (selectedName) {
      case "Sparky":
        return (
          <Image
            src={"/assets/nft-soltice/sparky-card.png"}
            alt={"sparky"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
      case "Shadow":
        return (
          <Image
            src={"/assets/nft-soltice/shadow-card.png"}
            alt={"shadow"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
      case "Frost":
        return (
          <Image
            src={"/assets/nft-soltice/frost-card.png"}
            alt={"frost"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
      case "Nimbus":
        return (
          <Image
            src={"/assets/nft-soltice/nimbus-card.png"}
            alt={"nimbus"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
      case "Zephyr":
        return (
          <Image
            src={"/assets/nft-soltice/zephyr-card.png"}
            alt={"zephyr"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
      case "Monsta X":
        return (
          <Image
            src={"/assets/nft-soltice/monsta-x-card.png"}
            alt={"monsta-x"}
            height={1290}
            width={725}
            className="w-full max-w-[725px]"
          />
        );
    }
  }

  return (
    <div className="flex justify-center items-center pb-[4rem]">
      <div className="flex flex-wrap gap-8 justify-start items-center max-w-[90rem] grow px-4">
        <div className="flex flex-col max-w-[700px] h-full grow gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-[trispace] font-bold text-cNeutral-100 text-2xl sm:text-[56px] leading-normal">
                Your Soltice NFTs
              </h1>
              <p className="flex flex-col gap-2 text-base font-[spacegrotesk] font-medium text-cNeutral-100 max-w-[500px]">
                <span>
                  {" "}
                  These Soltice Monsters are great! Buy more to have versatility
                  and challenges, and be the best Soltice Trainer!
                </span>
                <span>Pick and unlock the full potential of your Soltice.</span>
              </p>
            </div>

            <div>
              <button className="font-[trispace] text-[#ffffff50] rounded-md px-8 py-4 bg-cNeutral-500 font-bold duration-150 hover:cursor-not-allowed">
                Marketplace
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-center items-center grow w-full">
            <CardNFT
              className={`hover:bg-[#D9631C] ${
                selectedName === "Sparky" && "bg-[#D9631C]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/sparky.png"}
              name={"Sparky"}
              description={
                <>
                  Sparky got some <br /> spunk in them!
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />
            <CardNFT
              className={`hover:bg-[#e24a68] ${
                selectedName === "Shadow" && "bg-[#e24a68]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/shadow.png"}
              name={"Shadow"}
              description={
                <>
                  Edginess proves <br /> effective in combat
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />

            <CardNFT
              className={`hover:bg-[#244681] ${
                selectedName === "Frost" && "bg-[#244681]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/frost.png"}
              name={"Frost"}
              description={
                <>
                  How about a cool <br /> change with Frost?
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />

            <CardNFT
              className={`hover:bg-[#B96237] ${
                selectedName === "Nimbus" && "bg-[#B96237]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/nimbus.png"}
              name={"Nimbus"}
              description={
                <>
                  Soar to the clouds <br /> with Nimbus!
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />

            <CardNFT
              className={`hover:bg-[#D52C27] ${
                selectedName === "Zephyr" && "bg-[#D52C27]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/zephyr.png"}
              name={"Zephyr"}
              description={
                <>
                  Be the wind and be swift <br /> with Zephyr
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />

            <CardNFT
              className={`hover:bg-[#2B2F31] ${
                selectedName === "Monsta X" && "bg-[#2B2F31]"
              } duration-150 w-full`}
              imgUrl={"/assets/apex-arena/monsta-x.png"}
              name={"Monsta X"}
              description={
                <>
                  o Got what it takes to <br /> train Monsta-X?
                </>
              }
              winrate={10}
              multiplier={1}
              maxwin={"4,000.00"}
              setSelectedName={setSelectedName}
            />
          </div>
        </div>
        <div>{getImage()}</div>
      </div>
    </div>
  );
};

export default NFTSection;
