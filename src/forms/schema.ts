import { z } from "zod";
import { Position, Ratio } from "./types";

export const RatioSchema = z.enum([
  Ratio.RATIO_16_9,
  Ratio.RATIO_9_16,
  Ratio.RATIO_4_3,
  Ratio.RATIO_1_1,
]);

export const PositionSchema = z.enum([
  Position.TOP_LEFT,
  Position.TOP_CENTER,
  Position.TOP_RIGHT,
  Position.CENTER_LEFT,
  Position.CENTER_CENTER,
  Position.CENTER_RIGHT,
  Position.BOTTOM_LEFT,
  Position.BOTTOM_CENTER,
  Position.BOTTOM_RIGHT,
]);

export const BackgroundSchema = z.object({
  value: z.string(),
  border: z.string().optional(),
});

export const ContentSchema = z.object({
  position: PositionSchema,
  title: z.object({
    value: z.string(),
    size: z.number(),
    color: z.string(),
    stroke: z.string(),
  }),
  subTitle: z.object({
    value: z.string(),
    size: z.number(),
    color: z.string(),
    stroke: z.string(),
  }),
});

export const ThumbnailFormSchema = z.object({
  ratio: RatioSchema,
  background: BackgroundSchema,
  content: ContentSchema,
});
