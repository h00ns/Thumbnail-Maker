// 선택중인 form idx
export type SelectIdxType = 1 | 2 | 3;

// 해상도
export const Resolution = {
  RATIO_16_9: "16 / 9",
  RATIO_9_16: "9 / 16",
  RATIO_4_3: "4 / 3",
  RATIO_1_1: "1 / 1",
} as const;

export type ResolutionType = (typeof Resolution)[keyof typeof Resolution];

// 배경
export type BackgroundType = "solid" | "gradation" | "image";

// 위치
export const Position = {
  TOP_LEFT: "flex-start, flex-start",
  TOP_CENTER: "center, flex-start",
  TOP_RIGHT: "flex-end, flex-start",
  CENTER_LEFT: "flex-start, center",
  CENTER_CENTER: "center, center",
  CENTER_RIGHT: "flex-end, center",
  BOTTOM_LEFT: "flex-start, flex-end",
  BOTTOM_CENTER: "center, flex-end",
  BOTTOM_RIGHT: "flex-end, flex-end",
} as const;

export type PositionType = (typeof Position)[keyof typeof Position];

// 제목, 부제목
export type TitleType = {
  value: string;
  size: number;
  color: string;
};
