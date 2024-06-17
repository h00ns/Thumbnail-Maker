import { ResolutionAtom } from "@/store";
import { Resolution } from "@/store/types";
import { useAtom } from "jotai";
import { RefObject, useEffect, useState } from "react";

export const useGetPreviewSize = (
  ref: RefObject<HTMLDivElement>
): { width: number; height: number } => {
  const [resolution] = useAtom(ResolutionAtom);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    addEventListener("resize", handleResize);
    handleResize();

    /** 리사이즈 이벤트 */
    function handleResize() {
      if (!ref.current) return;

      const { width: refWidth, height: refHeight } =
        ref.current.getBoundingClientRect();

      const PC_PADDING = 112;
      const MOBILE_PADDING = 24;
      const PADDING = refWidth > 480 ? PC_PADDING : MOBILE_PADDING;

      const width = refWidth - PADDING;
      const height = refHeight - PADDING;

      /** 1 : 1 */
      if (resolution === Resolution.RATIO_1_1) {
        const value = Math.min(width, height);

        setWidth(value);
        setHeight(value);
        return;
      }

      /** 그 외의 비율 */
      switch (resolution) {
        case Resolution.RATIO_16_9:
          _calculteResolution(16, 9);
          break;
        case Resolution.RATIO_9_16:
          _calculteResolution(9, 16);
          break;
        case Resolution.RATIO_4_3:
          _calculteResolution(4, 3);
          break;
      }

      function _calculteResolution(widthRatio: number, heightRatio: number) {
        const parsedHeight = (width / widthRatio) * heightRatio;

        if (parsedHeight > height) {
          setWidth((height / heightRatio) * widthRatio);
          setHeight(height);
          return;
        }

        setWidth(width);
        setHeight(parsedHeight);
      }
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [ref, resolution]);

  return { width, height };
};
