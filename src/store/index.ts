import { atom } from "jotai";
import {
  BackgroundType,
  Position,
  PositionType,
  Resolution,
  ResolutionType,
  SelectIdxType,
} from "./types";

// 선택중인 form idx
export const SelectIdxAtom = atom<SelectIdxType>(1);

// 해상도
export const ResolutionAtom = atom<ResolutionType>(Resolution.RATIO_16_9);

// 배경
export const BackgroundAtom = atom<string>("#ffffff");
export const BackgroundTypeAtom = atom<BackgroundType>("solid");
export const UseBorderAtom = atom<boolean>(false);
export const BorderAtom = atom<string>("#e1c8c8");

// 위치
export const PositionAtom = atom<PositionType>(Position.TOP_LEFT);
