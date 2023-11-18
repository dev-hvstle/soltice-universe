import React from "react";
import ApexArenaNFTView from "./ApexArenaNFTView";

const PurchaseInventoryView = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 grow max-w-[75rem] px-4">
        <h1 className="font-[switzer] text-[32px] font-bold text-cNeutral-100">
          Level up your Soltice here!
        </h1>
        <h1 className="font-[switzer] text-2xl font-bold text-cNeutral-100">
          Inventory
        </h1>

        <div className="flex flex-wrap justify-start items-center gap-4 text-cNeutral-100 grow w-full">
          <ApexArenaNFTView />
        </div>
      </div>
    </div>
  );
};

export default PurchaseInventoryView;
