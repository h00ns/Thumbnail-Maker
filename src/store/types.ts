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
