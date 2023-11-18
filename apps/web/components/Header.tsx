"use client";
import React from "react";
import Image from "next/image";
import { ConnectWallet } from "./ConnectWallet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import HeaderLanding from "./LandingPage/HeaderLanding";
import { useAccount, useContractRead, Address, useBalance } from "wagmi";
import { GameABI, TimePotionABI } from "@/lib/abi";
import ethers from "ethers";
import TimePotion from "./TimePotion";

const navigation = [
  {
    id: 1,
    name: "Apex Arena",
    linkUrl: "/apex-arena",
  },
  {
    id: 2,
    name: "Equinox Circuit",
    linkUrl: "/",
  },
];

const Header = () => {
  const { address } = useAccount();

  const pathname = usePathname();

  const { data: getEnergy } = useContractRead({
    address: "0x6D9a9a7b347273AacF26099D9fDc4130c08E4b1E",
    abi: GameABI,
    functionName: "getEnergy",
  });

  const { data: balance } = useBalance({
    address: address,
    token: "0xbcc9F7E989aE209d611fAb5d3A05e8795F224cD2",
  });

  const energy: any = getEnergy;

  if (pathname !== "/apex-arena" && pathname !== "/apex-arena/battle")
    return <HeaderLanding />;

  return (
    <div
      className={`fixed top-0 w-full flex justify-center items-center z-[999] ${
        pathname === "/apex-arena/battle" && "bg-cNeutral-100"
      }`}
    >
      <div
        className={`flex flex-row justify-between items-center max-w-[90rem] grow ${
          pathname === "/apex-arena/battle"
            ? "text-cNeutral-900 py-[1.2rem]"
            : "text-cNeutral-100 py-[2rem]"
        } px-4 `}
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

          <div className="flex flex-wrap gap-4 items-center">
            {navigation.map((data, index) => {
              return (
                <a
                  href={data.linkUrl}
                  key={index}
                  className={`text-base font-[spacegrotesk] ${
                    pathname === data.linkUrl ? "font-bold" : "font-normal"
                  } ${
                    pathname === "/apex-arena/battle"
                      ? "text-cNeutral-900 "
                      : "text-cNeutral-100"
                  }`}
                >
                  {data.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/apex-arena/time-potion.png"}
              alt={"Time Potion"}
              height={32}
              width={24}
            />

            <TimePotion balance={balance?.formatted} />
          </div>

          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/navbar/energy-icon.png"}
              alt={"Energy Icon"}
              height={32}
              width={24}
            />

            <div className="flex flex-col">
              <h1
                className={
                  (cn("font-[spacegrotesk]"), "text-xs font-medium uppercase")
                }
              >
                Energy
              </h1>
              <h1
                className={
                  (cn("font-[spacegrotesk]"), "text-base font-bold uppercase")
                }
              >
                {energy.toString() || 0}/10
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col">
            <h1
              className={
                (cn("font-[spacegrotesk]"), "text-xs font-medium uppercase")
              }
            >
              Resets in
            </h1>
            <h1 className={(cn("font-[spacegrotesk]"), "text-base font-bold")}>
              8hrs:5min
            </h1>
          </div> */}
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
