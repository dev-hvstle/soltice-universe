import React from "react";
import Image from "next/image";

interface IPurchaseCard {
  imgUrl: string;
  title: string;
  subTitle: string;
}

const PurchaseCard = ({ imgUrl, title, subTitle }: IPurchaseCard) => {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      <Image src={imgUrl} alt={title} height={17} width={16} />
      <h1 className="font-[switzer] text-base">
        <span className="font-bold text-[#2DE481]">{title}</span>
        <span className="font-normal text-cNeutral-100/80">{subTitle}</span>
      </h1>
    </div>
  );
};

export default PurchaseCard;
