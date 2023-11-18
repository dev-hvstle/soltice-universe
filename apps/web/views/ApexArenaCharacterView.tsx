/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";
import SelectedSoltice from "@/public/assets/apex-arena/square-select.svg";
import { useSelectedSoltice } from "@/lib/store.ts/store";
import useAlchemy from "@/hooks/useAlchemy";
import { useAccount } from "wagmi";
import useMounted from "@/hooks/useMounted";

const soltice = [
  {
    id: 1,
    name: "sparky",
    imgUrl: "/assets/apex-arena/sparky.png",
    nameImg: "/assets/apex-arena/sparky-text.png",
  },
  {
    id: 2,
    name: "shadow",
    imgUrl: "/assets/apex-arena/shadow.png",
    nameImg: "/assets/apex-arena/shadow-text.png",
  },
  {
    id: 3,
    name: "frost",
    imgUrl: "/assets/apex-arena/frost.png",
    nameImg: "/assets/apex-arena/frost-text.png",
  },
  {
    id: 4,
    name: "nimbus",
    imgUrl: "/assets/apex-arena/nimbus.png",
    nameImg: "/assets/apex-arena/nimbus-text.png",
  },
  {
    id: 5,
    name: "zephyr",
    imgUrl: "/assets/apex-arena/zephyr.png",
    nameImg: "/assets/apex-arena/zephyr-text.png",
  },
  {
    id: 6,
    name: "monsta-x",
    imgUrl: "/assets/apex-arena/monsta-x.png",
    nameImg: "/assets/apex-arena/monsta-x-text.png",
  },
];

const ApexArenaCharacterView = () => {
  const [swiper, setSwiper] = React.useState<any>(null);
  const { getNFTsByAddress, refreshData } = useAlchemy();
  const { address, isConnected } = useAccount();
  const [nftCollection, setNftCollection] = useState<any>([]);

  const { selectedID, setSelectedID } = useSelectedSoltice((state) => state);

  const nexto = () => {
    swiper.slideNext();
  };
  const backto = () => {
    swiper.slidePrev();
  };

  const getData = async () => {
    try {
      const nftsByAddress: any = await getNFTsByAddress(String(address), {
        contractAddresses: ["0x557558Ccb0B3F601Be541D19cC96626ba3F64a3B"], // contract address
        refreshCache: true,
        omitMetadata: false,
        pageSize: 10,
        tokenUriTimeoutInMs: 10000,
      });
      // eslint-disable-next-line camelcase
      const nft_collection = nftsByAddress?.ownedNfts;
      // eslint-disable-next-line camelcase
      const nft_collection_data: any = [];
      const imageArray: any = [];

      // eslint-disable-next-line camelcase
      nft_collection.map((ownedNFT: any) => {
        // eslint-disable-next-line camelcase
        nft_collection_data.push(ownedNFT);
        imageArray.push(ownedNFT.tokenId);
      });
      setNftCollection(nft_collection_data);
      console.log(nft_collection_data);
    } catch (err) {
      console.info(err);
    }
  };

  useEffect(() => {
    {
      if (isConnected) {
        getData();
      }
      // console.log(selectedID + " Testing");
    }
  }, [address, selectedID]);

  const { hasMounted } = useMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        loop
        modules={[Pagination, Navigation]}
        className="relative w-[300px] sm:ww-[600px] md:w-[700px]"
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiper(s);
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {nftCollection.map((data: any, index: any) => {
          return (
            <SwiperSlide
              key={index}
              className="group relative flex flex-col items-center justify-center overflow-visible pt-6 w-[300px]"
              onClick={() => setSelectedID(data.tokenId)}
            >
              <div className="flex flex-col justify-center items-center relative">
                <Image
                  src={data.rawMetadata.image}
                  alt={data.title}
                  height={300}
                  width={300}
                  className={`w-full max-w-[200px] p-4 duration-300 relative z-[2] ${
                    selectedID === data.tokenId
                      ? "group-hover:scale-95 group-hover:translate-y-2"
                      : "group-hover:-translate-y-2"
                  }`}
                />
                <SelectedSoltice
                  className={`absolute top-[22.5%] left-1/2 transform -translate-x-1/2 -translate-y-[22.5%] z-[1] scale-125 ${
                    selectedID === data.tokenId
                      ? "opacity-100 group-hover:-translate-y-[20.5%] group-hover:scale-[120%]"
                      : "opacity-0"
                  } duration-150`}
                />

                <div className="flex items-center gap-2">
                  <h1 className="text-cNeutral-100 font-[switzer] text-2xl font-bold">
                    {data.rawMetadata.attributes[0].value}
                  </h1>
                  <h1 className="text-cNeutral-100 font-[switzer] text-2xl font-bold">
                    {data.tokenId}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {nftCollection.length <= 3 ? (
        ""
      ) : (
        <>
          <button
            onClick={nexto}
            className="p-1 bg-alice-white/5 rounded-full absolute top-1/2 -right-[5%] transform  -translate-y-1/2 z-[99] hover:scale-110"
          >
            <Arrow />
          </button>
          <button
            onClick={backto}
            className="p-1 bg-alice-white/5 rounded-full absolute top-1/2 -left-[8%] transform rotate-180 -translate-y-1/2 z-[99] hover:scale-110"
          >
            <Arrow />
          </button>
        </>
      )}
    </div>
  );
};

export default ApexArenaCharacterView;
