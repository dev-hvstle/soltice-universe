"use client";
import Input from "@/components/Input";
import { MonsterABI, USDTABI } from "@/lib/abi";
import React, { useEffect, useState } from "react";
import {
  usePrepareContractWrite,
  useContractRead,
  useContractWrite,
  useAccount,
  Address,
} from "wagmi";
import { ethers } from "ethers";

const PurchaseButton = () => {
  const { address } = useAccount();
  const [isApproved, setIsApproved] = useState(false);
  const [form, setForm] = useState({
    qty: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { data: checkAllowance } = useContractRead({
    address: "0x91d3100E6Ef656FCB9ecEe9f9ac3Ca2DDC1910e3" || "",
    abi: USDTABI,
    functionName: "allowance",
    args: [address as Address, "0x557558Ccb0B3F601Be541D19cC96626ba3F64a3B"],
  });

  const { config } = usePrepareContractWrite({
    address: "0x557558Ccb0B3F601Be541D19cC96626ba3F64a3B" || "", // change to savings address
    abi: MonsterABI,
    functionName: "mint",
    args: [form.qty],
  });

  const { config: configApprove } = usePrepareContractWrite({
    address: "0x91d3100E6Ef656FCB9ecEe9f9ac3Ca2DDC1910e3" || "",
    abi: USDTABI,
    functionName: "approve",
    args: [
      "0x557558Ccb0B3F601Be541D19cC96626ba3F64a3B",
      BigInt(String(ethers.MaxUint256)),
    ],
  });

  const { writeAsync, isLoading } = useContractWrite(config);

  const {
    writeAsync: approved,
    isLoading: isLoadingApprove,
    isError,
  } = useContractWrite(configApprove);

  async function handleOnSubmit() {
    writeAsync?.();
  }

  async function handleOnApproved() {
    approved?.()
      .then((res) => {
        location.reload();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if ((checkAllowance as any) > 0) {
      // console.log(checkAllowance + " Testing");
      setIsApproved(true);
    } else if (isError) {
      setIsApproved(false);
    } else {
      setIsApproved(false);
    }
  }, [form.qty]);

  return (
    <div className="flex flex-col gap-4">
      <Input
        id={"qty"}
        placeholder={"Enter Quantity"}
        title={"Enter an Quantity:"}
        value={form.qty}
        onChange={handleChange}
        type={"number"}
      />
      {isApproved ? (
        <button
          onClick={handleOnSubmit}
          className={`py-4 px-8 rounded-2xl font-[switzer] w-full font-bold uppercase ${
            !isLoading
              ? "text-cNeutral-900 bg-[#2DE481]"
              : "bg-[#FFFFFF1A] text-cNeutral-100/50"
          }`}
        >
          {isLoading === true ? "Loading..." : "Buy Now"}
        </button>
      ) : (
        <>
          <button
            disabled={isLoadingApprove}
            onClick={handleOnApproved}
            className={`py-4 px-8 rounded-2xl font-[switzer] w-full font-bold uppercase ${
              !isLoadingApprove
                ? "text-cNeutral-900 bg-cNeutral-100"
                : "bg-[#FFFFFF1A] text-cNeutral-100/50"
            }`}
          >
            {isLoadingApprove === true ? "Approving..." : "Approve"}
          </button>
        </>
      )}
    </div>
  );
};

export default PurchaseButton;
