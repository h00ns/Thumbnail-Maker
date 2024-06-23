import { z } from "zod";
import {
  BackgroundSchema,
  ContentSchema,
  PositionSchema,
  RatioSchema,
  ThumbnailFormSchema,
} from "./schema";

// 해상도
export const Ratio = {
  RATIO_16_9: "16 / 9",
  RATIO_9_16: "9 / 16",
  RATIO_4_3: "4 / 3",
  RATIO_1_1: "1 / 1",
} as const;

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

export type RatioType = z.infer<typeof RatioSchema>;
export type PositionType = z.infer<typeof PositionSchema>;
export type BackgroundType = z.infer<typeof BackgroundSchema>;
export type ContentSchemaType = z.infer<typeof ContentSchema>;

export type ThumbnailFormType = z.infer<typeof ThumbnailFormSchema>;
