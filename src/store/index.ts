import { atom } from "jotai";
import { Resolution, ResolutionType, SelectIdxType } from "./types";

// 선택중인 form idx
export const SelectIdxAtom = atom<SelectIdxType>(1);

// 해상도
export const ResolutionAtom = atom<ResolutionType>(Resolution.RATIO_16_9);
