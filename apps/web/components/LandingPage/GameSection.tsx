import React from "react";
import Image from "next/image";

const GameSection = () => {
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
    <div className="flex justify-center items-center py-[4rem] lg:py-[8rem] bg-[url('/assets/landing-page/game-section-bg.png')] bg-no-repeat bg-cover bg-center lg:h-[60rem] my-[4rem]">
      <div className="flex flex-col max-w-[90rem] grow px-4 gap-16">
        <div className="flex flex-col gap-4 sm:items-end w-full">
          <h1 className="text-cNeutral-100 font-[trispace] font-bold text-2xl sm:text-[56px] leading-normal text-left sm:text-right">
            Go on awesome adventures
            <br />
            with your Soltice!
          </h1>
          <p className="text-[spacegrotesk] text-cNeutral-100 text-left sm:text-right">
            Play games using your Soltice, where every Soltice holds its own
            strength and luck. And level them up through <br />
            battles and prove you are the best Soltice Trainer!
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center sm:justify-end grow gap-4">
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
  );
};

export default GameSection;
