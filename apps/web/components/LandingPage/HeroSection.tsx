"use client";
import React, { useState } from "react";
import GameModalSection from "./GameModalSection";

const HeroSection = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center py-[4rem] lg:py-[8rem] bg-[url('/assets/landing-page/bg-hero.png')] bg-no-repeat bg-cover bg-center h-[30rem] lg:h-[65rem]">
        <div className="flex flex-col h-full justify-end max-w-[90rem] grow px-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-cNeutral-100 text-2xl sm:text-5xl lg:text-8xl font-[trispace] font-semibold">
                Join the
                <br />
                Soltice Universe
              </h1>
              <h1 className="font-[spacegrotesk] text-2xl font-medium text-cNeutral-100">
                Your journey starts here.
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsShowModal(!isShowModal)}
                className="font-[trispace] uppercase text-cNeutral-900 rounded-lg px-8 py-4 bg-cNeutral-100 font-bold duration-150 hover:opacity-50"
              >
                Play Now
              </button>

              <a
                href="/purchase"
                className="font-[spacegrotesk] text-cNeutral-100 rounded-lg px-8 py-4 border border-cNeutral-100 font-medium duration-150 hover:opacity-50"
              >
                Get your Soltice
              </a>
            </div>
          </div>
        </div>
      </div>
      <GameModalSection showmodal={isShowModal} setShowModal={setIsShowModal} />
    </>
  );
};

export default HeroSection;
