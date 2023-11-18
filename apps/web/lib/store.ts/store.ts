import { create } from "zustand";
import { ISelectedSoltice, IShowResult, ITransactionHash } from "../interface";

export const useSelectedSoltice = create<ISelectedSoltice>((set) => ({
  selectedID: 0,
  setSelectedID: (selectedID) => {
    set((state) => ({ ...state, selectedID }));
  },
}));

export const useTransactionHash = create<ITransactionHash>((set) => ({
  hash: "",
  setHash: (hash) => {
    set((state) => ({ ...state, hash }));
  },
}));

export const useShowResult = create<IShowResult>((set) => ({
  showResult: false,
  setShowResult: (showResult) => {
    set((state) => ({ ...state, showResult }));
  },
}));
