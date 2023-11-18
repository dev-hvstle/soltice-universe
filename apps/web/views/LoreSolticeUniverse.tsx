"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowRight from "@/public/assets/lore/lore-arrow-right.svg";
import { usePathname } from "next/navigation";

const LoreSolticeUniverse = () => {
  const [showLore, setShowLore] = useState(true);
  const [page, setPage] = useState(1);
  const pathname = usePathname();

  function getImage() {
    switch (page) {
      case 1:
        return (
          <Image
            src={"/assets/lore/lore-1.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 2:
        return (
          <Image
            src={"/assets/lore/lore-2.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 3:
        return (
          <Image
            src={"/assets/lore/lore-3.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 4:
        return (
          <Image
            src={"/assets/lore/lore-4.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 5:
        return (
          <Image
            src={"/assets/lore/lore-5.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 6:
        return (
          <Image
            src={"/assets/lore/lore-6.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
      case 7:
        return (
          <Image
            src={"/assets/lore/lore-7.png"}
            alt={"asdasd"}
            height={500}
            width={500}
            className="w-full max-w-[500px]"
          />
        );
    }
  }

  return (
    <>
      {pathname === "/" && (
        <>
          {showLore ? (
            <div className="fixed top-0 w-full flex justify-center items-center h-full z-[999999999]">
              <div
                className="fixed top-0 w-full flex justify-center items-center h-full bg-cNeutral-900/50 backdrop-blur"
                onClick={() => setShowLore(false)}
              ></div>
              <div className="flex flex-col gap-8 items-center justify-center grow px-4 z-[2] max-w-[30rem]">
                {getImage()}

                <div className="flex justify-between items-center w-full">
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                    className={`${
                      page <= 1 ? "cursor-not-allowed grayscale" : ""
                    } rotate-180`}
                  >
                    <ArrowRight />
                  </button>

                  <button
                    onClick={() => setShowLore(false)}
                    className="font-bold text-base font-[spacegrotesk] text-cNeutral-100"
                  >
                    SKIP LORE
                  </button>
                  <button
                    disabled={page >= 7}
                    onClick={() => setPage(page + 1)}
                    className={`${
                      page >= 7 ? "cursor-not-allowed grayscale" : ""
                    }`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default LoreSolticeUniverse;
