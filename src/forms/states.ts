import { Position, Ratio, ThumbnailFormType } from "./types";

export const thumbnailFormDefaultValues: ThumbnailFormType = {
  ratio: Ratio.RATIO_16_9,
  background: {
    value: "#d0e0ee",
    border: undefined,
  },
  content: {
    position: Position.TOP_LEFT,
    title: {
      value: "썸네일 만들기!",
      size: 104,
      color: "#34963C",
    },
    subTitle: {
      value: "편하고, 간편하게!",
      size: 54,
      color: "#6ebbe6",
    },
  },
};
