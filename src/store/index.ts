import { atom } from "jotai";
import {
  BackgroundType,
  Position,
  PositionType,
  Resolution,
  ResolutionType,
  SelectIdxType,
  TitleType,
} from "./types";

// 선택중인 form idx
export const SelectIdxAtom = atom<SelectIdxType>(1);

// 해상도
export const ResolutionAtom = atom<ResolutionType>(Resolution.RATIO_16_9);

// 배경
export const BackgroundAtom = atom<string>("#d0e0ee");
export const BackgroundTypeAtom = atom<BackgroundType>("solid");
export const UseBorderAtom = atom<boolean>(false);
export const BorderAtom = atom<string>("#e1c8c8");

// 위치
export const PositionAtom = atom<PositionType>(Position.TOP_LEFT);

// 제목
export const TitleAtom = atom<TitleType>({
  value: "썸네일 만들기!",
  size: 104,
  color: "#34963C",
});

// 부제목
export const SubTitleAtom = atom<TitleType>({
  value: "편하고, 간편하게!",
  size: 54,
  color: "#6ebbe6",
});
