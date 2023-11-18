import PurchaseInventoryView from "@/views/PurchaseInventoryView";
import PurchaseView from "@/views/PurchaseView";
import React from "react";

const PurchasePage = () => {
  return (
    <>
      <PurchaseView />
      <PurchaseInventoryView />
    </>
  );
};

export default PurchasePage;
