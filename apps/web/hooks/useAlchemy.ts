import {
  Network,
  Alchemy,
  OwnedNftsResponse,
  GetNftsForOwnerOptions,
} from "alchemy-sdk";
import { useState } from "react";

const useAlchemy = () => {
  const [isLoading, setIsLoading] = useState(false);

  const network = Network.ETH_SEPOLIA;
  // process.env.NEXT_PUBLIC_ENV === "development"
  //   ? Network.ETH_SEPOLIA
  //   : Network.MATIC_MAINNET;

  const settings = {
    apiKey: "s-hdjLqITCIC-0yx948QMzzi7v-43Sss",
    network: network,
  };

  const alchemy = new Alchemy(settings);

  const getNFTsByAddress = async (address: string, options: any) => {
    setIsLoading(true);

    try {
      const res: OwnedNftsResponse = await alchemy.nft.getNftsForOwner(
        address,
        options
      );

      setIsLoading(false);

      return res;
    } catch (err) {
      console.error(err ?? "");
      setIsLoading(false);

      return err;
    }
  };

  const refreshData = async (address: string) => {
    try {
      const res = await alchemy.nft.refreshContract(address);
      return res;
    } catch (err) {
      console.info(err);
    }
  };

  return {
    getNFTsByAddress,
    refreshData,

    // View
    isLoading,
  };
};

export default useAlchemy;
