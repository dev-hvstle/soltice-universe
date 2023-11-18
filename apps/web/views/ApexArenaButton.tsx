/* eslint-disable @next/next/no-img-element */
"use client";
import { useSelectedSoltice, useTransactionHash } from "@/lib/store.ts/store";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { GameABI } from "@/lib/abi";

const ApexArenaButton = () => {
  const { selectedID, setSelectedID } = useSelectedSoltice((state) => state);
  const { hash, setHash } = useTransactionHash((state) => state);
  const router = useRouter();

  const { config: configPlay } = usePrepareContractWrite({
    address: "0x6D9a9a7b347273AacF26099D9fDc4130c08E4b1E",
    abi: GameABI,
    functionName: "play",
    args: [0, selectedID.toString()],
  });

  const { writeAsync: play, isLoading: isLoadingPlay } =
    useContractWrite(configPlay);

  function handleClick() {
    play?.()
      .then((res) => {
        setHash(res.hash);
        console.log(res.hash + " sinubukan");
        router.push("/apex-arena/battle");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <button
      disabled={selectedID <= 0}
      onClick={handleClick}
      className={`${
        selectedID <= 0
          ? "grayscale cursor-not-allowed"
          : "opacit-100 hover:-translate-y-1 hover:scale-105"
      } absolute bottom-[6.5%] left-1/2 transform -translate-x-1/2  z-[999] duration-150`}
    >
      <Image
        src={"/assets/apex-arena/start-image.png"}
        alt={"start"}
        height={600}
        width={600}
        className="w-full max-w-[500px]"
      />
    </button>
  );
};

export default ApexArenaButton;
