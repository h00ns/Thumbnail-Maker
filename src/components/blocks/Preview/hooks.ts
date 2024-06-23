import { Resolution } from "./../../../store/types";
import { ResolutionAtom } from "@/store";
import { useAtom } from "jotai";
import { RefObject, useEffect, useState } from "react";

export const useGetSize = (ref: RefObject<HTMLDivElement>) => {
  const [resolution] = useAtom(ResolutionAtom);

  const [scale, setScale] = useState(1);

  const [originWidth, originHeight, aspectRatio] = {
    [Resolution.RATIO_16_9]: [1280, 720, "16 / 9"],
    [Resolution.RATIO_9_16]: [720, 1280, "9 / 16"],
    [Resolution.RATIO_4_3]: [800, 600, "4 / 3"],
    [Resolution.RATIO_1_1]: [720, 720, "1 / 1"],
  }[resolution] as [number, number, string];

  useEffect(() => {
    if (!ref.current) return;

    addEventListener("resize", handleResize);
    handleResize();

    function handleResize() {
      if (!ref.current) return;

      const { width: refWidth, height: refHeight } =
        ref.current.getBoundingClientRect();

      const PC_PADDING = 112;
      const MOBILE_PADDING = 24;
      const PADDING = refWidth > 480 ? PC_PADDING : MOBILE_PADDING;

      const availableWidth = refWidth - PADDING * 2;
      const availableHeight = refHeight - PADDING * 2;

      const newScale = Math.min(
        availableWidth / originWidth,
        availableHeight / originHeight
      );

      setScale(newScale);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [ref, originWidth, originHeight]);

  return { width: originWidth, height: originHeight, scale, aspectRatio };
};
