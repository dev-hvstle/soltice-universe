"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "../ConnectWallet";
import GameModalSection from "./GameModalSection";
import TestnetMarquee from "./TestnetMarquee";

const navigation = [
  {
    id: 1,
    name: "Home",
    linkUrl: "/",
  },
  {
    id: 2,
    name: "Purchase",
    linkUrl: "/purchase",
  },
  {
    id: 3,
    name: "Dashboard",
    linkUrl: "/dashboard",
  },
];

const HeaderLanding = () => {
  const pathname = usePathname();
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full flex flex-col justify-center items-center z-[999] bg-cNeutral-100">
        <TestnetMarquee />
        <div
          className={`flex flex-row justify-between items-center w-full max-w-[90rem] grow text-cNeutral-900 py-[1.2rem] px-4`}
        >
          <div className="flex flex-row gap-8 items-center">
            <a href="/">
              <Image
                src={"/assets/navbar/soltice-logo.png"}
                alt={"Soltice Universe"}
                height={42}
                width={66}
              />
            </a>

            <div className="hidden lg:flex flex-wrap gap-4 items-center">
              {navigation.map((data, index) => {
                return (
                  <a
                    href={data.linkUrl}
                    key={index}
                    className={`text-base font-[spacegrotesk] px-4 py-2 rounded-sm ${
                      pathname === data.linkUrl ? "font-bold" : "font-normal"
                    } text-cNeutral-900 hover:font-bold hover:bg-[#00000008] duration-150`}
                  >
                    {data.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex flex-wrap gap-4 items-center">
            <ConnectWallet />

            <button
              onClick={() => setIsShowModal(!isShowModal)}
              className="font-[spacegrotesk] uppercase bg-cNeutral-900 rounded-md px-4 py-2 text-cNeutral-100 font-bold duration-150 hover:opacity-80"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
      <GameModalSection showmodal={isShowModal} setShowModal={setIsShowModal} />
    </>
  );
};

export default HeaderLanding;
