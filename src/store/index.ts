import { atom } from "jotai";

export type SelectIdxType = 1 | 2 | 3;

export const SelectIdxAtom = atom<SelectIdxType>(1);

export type SelectBackgroundType = "solid" | "gradation" | "image";

export const SelectBackgroundTypeAtom = atom<SelectBackgroundType>("solid");
