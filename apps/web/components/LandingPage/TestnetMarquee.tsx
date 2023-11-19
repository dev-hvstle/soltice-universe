import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ImportToken from "@/lib/util/ImportToken";
import { useRouter } from "next/navigation";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { USDTABI, TimePotionABI } from "@/lib/abi";
import FaceIcon from "@/public/icons/face-icon.svg";

const TestnetMarquee = () => {
  const { address: account } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const { config: configUSDT } = usePrepareContractWrite({
    address: "0x91d3100E6Ef656FCB9ecEe9f9ac3Ca2DDC1910e3",
    abi: USDTABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintUsdt, isLoading: isLoadingUsdt } =
    useContractWrite(configUSDT);

  const { config: configTPN } = usePrepareContractWrite({
    address: "0xbcc9F7E989aE209d611fAb5d3A05e8795F224cD2",
    abi: TimePotionABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintTPN, isLoading: isLoadingTPN } =
    useContractWrite(configTPN);

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  return (
    <>
      {showModal && (
        <>
          {" "}
          <div className="fixed top-0 w-full flex justify-center items-center h-full z-[999999999] bg-cNeutral-900/50 backdrop-blur">
            <div className="p-8 flex flex-col gap-8 grow max-w-[434px] bg-cNeutral-950 rounded-lg z-[3]">
              <h1 className="text-[32px] font-[trispace] font-bold text-cNeutral-100 text-center">
                Setup Testnet
              </h1>
              {chain?.unsupported ? (
                <div className="py-4 px-2 rounded-lg border border-cSecondary-500 bg-cSecondary-900 flex flex-col justify-center items-center gap-2">
                  <FaceIcon />
                  <h1 className="font-bold text-cNeutral-100 text-2xl font-[spacegrotesk] text-center">
                    Oh no! You’re currently using ETH Mainnet Network.
                  </h1>
                  <h1
                    className="text-cNeutral-100 text-center text-base font-[spacegrotesk] underline underline-offset-2 cursor-pointer"
                    onClick={() => switchNetwork?.(11155111)}
                  >
                    Change to ETH Sepolia Testnet Network
                  </h1>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-cNeutral-100 font-[spacegrotesk] font-bold text-2xl">
                        Import Testnet Tokens
                      </h1>
                      <ImportToken
                        name={"Tether Peg Token ($USDT)"}
                        address={"0x91d3100E6Ef656FCB9ecEe9f9ac3Ca2DDC1910e3"}
                        symbols={"USDT"}
                        decimal={18}
                      />
                      <ImportToken
                        name={"Time Potion Token ($TPN)"}
                        address={"0xbcc9F7E989aE209d611fAb5d3A05e8795F224cD2"}
                        symbols={"TPN"}
                        decimal={18}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h1 className="text-cNeutral-100 font-[spacegrotesk] font-bold text-2xl">
                        Claim Testnet Tokens
                      </h1>
                      <button
                        onClick={() =>
                          router.push("https://sepoliafaucet.com/")
                        }
                        className="p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 group text-cNeutral-100 font-[spacegrotesk] text-base hover:bg-cNeutral-900 border border-cNeutral-800"
                      >
                        <span className="flex items-center gap-2">
                          ETH Sepolia Faucet
                        </span>
                      </button>
                      <button
                        onClick={() => mintUsdt?.()}
                        disabled={isLoadingUsdt}
                        className="p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 group text-cNeutral-100 font-[spacegrotesk] text-base hover:bg-cNeutral-900 border border-cNeutral-800"
                      >
                        <span className="flex items-center gap-2">
                          {isLoadingUsdt
                            ? "Claiming..."
                            : "1,000 Tether Peg Token ($USDT)"}
                        </span>
                      </button>
                      <button
                        onClick={() => mintTPN?.()}
                        disabled={isLoadingTPN}
                        className="p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 group text-cNeutral-100 font-[spacegrotesk] text-base hover:bg-cNeutral-900 border border-cNeutral-800"
                      >
                        <span className="flex items-center gap-2">
                          {isLoadingTPN
                            ? "Claiming..."
                            : "1,000 Time Potion Token ($TPN)"}
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="bg-cNeutral-100 py-2 px-4 rounded text-base text-cNeutral-950 font-[spacegrotesk]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="sticky top-0 flex justify-center items-center w-full bg-[#F13641] gap-8 py-2 z-[9]">
        <Marquee>
          <div className="flex flex-row gap-8 items-center last:mr-4">
            <h1
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase`}
            >
              <span className="font-normal">THE PLATFORM IS STILL ON</span>
              <span className="font-bold">TEST NET</span>
            </h1>

            <h1
              onClick={() => setShowModal(!showModal)}
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase cursor-pointer`}
            >
              <span className="font-bold underline underline-offset-2">
                CLICK HERE TO SETUP NETWORKS AND CLAIM TOKENS.
              </span>
            </h1>
            <h1
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase`}
            >
              <span className="font-normal">THE PLATFORM IS STILL ON</span>
              <span className="font-bold">TEST NET</span>
            </h1>

            <h1
              onClick={() => setShowModal(!showModal)}
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase cursor-pointer`}
            >
              <span className="font-bold underline underline-offset-2">
                CLICK HERE TO SETUP NETWORKS AND CLAIM TOKENS.
              </span>
            </h1>
            <h1
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase`}
            >
              <span className="font-normal">THE PLATFORM IS STILL ON</span>
              <span className="font-bold">TEST NET</span>
            </h1>

            <h1
              onClick={() => setShowModal(!showModal)}
              className={`font-[spacegrotesk] text-base text-cNeutral-100 uppercase cursor-pointer`}
            >
              <span className="font-bold underline underline-offset-2">
                CLICK HERE TO SETUP NETWORKS AND CLAIM TOKENS.
              </span>
            </h1>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default TestnetMarquee;
