/* eslint-disable @next/next/no-img-element */
import React from "react";
import StoneBig from "@/public/assets/apex-arena/starting-window/stone-big.svg";
import ApexArenaCharacterView from "@/views/ApexArenaCharacterView";
import ApexArenaButton from "./ApexArenaButton";

const ApexArenaView = () => {
  return (
    <>
      <div className="flex lg:hidden justify-center items-center bg-[url('/assets/apex-arena/starting-window/apex-bg.png')] bg-no-repeat bg-cover bg-center h-[58.8rem] relative">
        <div className="h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] bg-cNeutral-950/50 backdrop-blur" />

        <h1 className="relative z-[2] text-cNeutral-100 font-[switzer]">
          Only Available on PC{" "}
        </h1>
      </div>
      <div className="hidden lg:flex justify-center items-center bg-[url('/assets/apex-arena/starting-window/apex-bg.png')] bg-no-repeat bg-cover bg-center h-[58.8rem] relative">
        <div className=" h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] bg-cNeutral-950/50 backdrop-blur" />
        <ApexArenaButton />
        <div className="flex flex-col max-w-[75rem] grow items-center justify-center relative z-[2]">
          <StoneBig className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1] w-full max-w-[70rem]" />

          <div className="flex flex-col items-center max-w-[50rem] grow w-full gap-8 relative">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img
                height={400}
                width={400}
                className="w-full max-w-[550px] -z-[1]"
                src={"/assets/title/apex-arena-title-v2.png"}
                alt={"apex-arena"}
              />
              <img
                height={400}
                width={400}
                className="w-full max-w-[550px] -z-[1]"
                src={"/assets/title/apex-arena-subtitle.png"}
                alt={"apex-arena"}
              />
            </div>
            <img
              height={400}
              width={400}
              className="w-full max-w-[250px] -z-[1]"
              src={"/assets/title/choose-your-soltice.png"}
              alt={"apex-arena"}
            />
            <ApexArenaCharacterView />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApexArenaView;
