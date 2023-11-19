import React, { useEffect } from "react";
import Image from "next/image";

const GameModalSection = ({ showmodal, setShowModal }: any) => {
  const gamedata = [
    {
      id: 1,
      name: "Apex Arena",
      imgUrl: "/assets/landing-page/apex-arena-game.png",
      linkUrl: "/apex-arena",
      className:
        "hover:border-[#fff] box-content border-2 duration-200 ease-in-out",
    },
    {
      id: 2,
      name: "Equinox Circuit",
      imgUrl: "/assets/landing-page/equinox-circuit-game.png",
      linkUrl: "/#coming-soon",
      className: "grayscale cursor-not-allowed",
    },
    {
      id: 3,
      name: "Sun Sweeper",
      imgUrl: "/assets/landing-page/sun-sweeper-game.png",
      linkUrl: "/#coming-soon",
      className: "cursor-not-allowed",
    },
  ];

  return (
    <>
      {showmodal && (
        <>
          <div className="fixed top-0 w-full flex justify-center items-center h-full z-[999999999]">
            <div
              className="fixed top-0 w-full flex justify-center items-center h-full bg-cNeutral-900/50 backdrop-blur"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex flex-col gap-8 grow px-4 z-[2] max-w-[76rem]">
              <h1 className="font-[trispace] font-extrabold text-[64px] leading-normal text-cNeutral-100 text-center">
                Choose a game
              </h1>
              <div className="flex flex-wrap justify-center items-center grow gap-4">
                {gamedata.map((data, index) => {
                  return (
                    <a href={data.linkUrl} key={index}>
                      <Image
                        src={data.imgUrl}
                        alt={data.name}
                        height={240}
                        width={427}
                        className={`w-full max-w-[427px] ${data.className}`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GameModalSection;
