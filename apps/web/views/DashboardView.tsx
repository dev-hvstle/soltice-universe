/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

const inventorydata = [
  {
    id: 1,
    name: "Sparky",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/sparky.svg",
    background: "bg-[#532e17]",
  },
  {
    id: 2,
    name: "Shadow",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/shadow.svg",
    background: "bg-[#351d22]",
  },
  {
    id: 3,
    name: "Frost",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/frost.svg",
    background: "bg-[#143339]",
  },
  {
    id: 4,
    name: "Nimbus",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/nimbus.svg",
    background: "bg-[#3a3014]",
  },
  {
    id: 5,
    name: "Zephyr",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/zephyr.svg",
    background: "bg-[#351918]",
  },
  {
    id: 6,
    name: "Monsta-X",
    quantity: 152,
    imgUrl: "/assets/nft-section/characters/monsta-x.svg",
    background: "bg-[#2e1e30]",
  },
];

const DashboardView = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      className="flex flex-col justify-start items-center pt-[10rem] py-[2rem] h-auto gap-8"
      id="dashboard-section"
    >
      <div className="flex h-auto flex-col py-3 lg:py-2 gap-5 max-w-[95rem] px-[1rem] w-full">
        <h1 className="font-[spacegrotesk] tracking-wide text-2xl sm:text-6xl text-left lg:text-5xl mb-2 text-cNeutral-100">
          Dashboard
        </h1>
      </div>

      <div className="flex h-auto flex-col gap-2 max-w-[90rem] w-full">
        <h1 className="font-[spacegrotesk] tracking-wide text-2xl  text-left md:text-3xl text-cNeutral-100">
          Inventory
        </h1>
        <h1 className="font-[spacegrotesk] text-xl text-[#7a7a7a] text-left md:text-2xl">
          Choose your Soltice to merge.
        </h1>
      </div>

      <div className="flex flex-col w-full md:flex-row justify-center items-center max-w-[90rem] gap-10">
        <div
          style={{
            borderColor: "#36f1e6",
            border: "5px",
            borderBottomWidth: 0,
          }}
          className={`flex flex-col items-center justify-end gap-2 w-[200px] max-w-[180px] min-h-[250px] px-5 py-5 cursor-pointer `}
        >
          <Image
            src={"/assets/dashboard/time-potion2.png"}
            className="pointer-events-none select-none mb-2"
            alt="text"
            width={40}
            height={40}
          />
          <span>
            <h1 className="font-[spacegrotesk] tracking-wide text-xl text-left md:text-1xl text-[#8cd531]">
              99,999 $TPN
            </h1>
            <p className="font-[spacegrotesk]  text-left tracking-widest text-md text-[#7a7a7a]">
              remaining
            </p>
          </span>
        </div>
        <div className="border-b-2 border-[#3b3b3b] flex md:hidden h-[auto] w-full"></div>
        <div className="border-l-2 border-[#3b3b3b] hidden md:flex h-[200px]"></div>

        <Swiper
          // slidesPerView={slideCount}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          className="relative w-[300px] sm:ww-[600px] md:w-[700px] grow"
          id="side-anim-right-features"
          breakpoints={{
            375: {
              width: 300,
              slidesPerView: 1,
            },

            640: {
              width: 400,
              slidesPerView: 2,
            },

            768: {
              width: 500,
              slidesPerView: 3,
            },

            1024: {
              width: 900,
              slidesPerView: 4,
            },

            1280: {
              width: 940,
              slidesPerView: 4,
            },

            1500: {
              width: 1100,
              slidesPerView: 5,
            },
          }}
        >
          {inventorydata.map((item) => {
            return (
              <SwiperSlide
                className="mySwiperTeam-slide-v2 select-none w-auto"
                key={item.id}
              >
                <div
                  className={`flex flex-col items-center justify-center min-h-fit rounded-xl ${item.background} cursor-pointer p-4 hover-button`}
                >
                  <Image
                    src={item.imgUrl}
                    className="pointer-events-none select-none w-64"
                    alt="text"
                    height={400}
                    width={400}
                  />

                  <span>
                    <h1 className="font-[spacegrotesk] tracking-wide text-xl  text-left md:text-xl text-cNeutral-100">
                      {item.name}
                    </h1>
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default DashboardView;
