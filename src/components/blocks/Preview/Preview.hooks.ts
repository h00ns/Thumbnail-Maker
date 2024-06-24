import { Ratio, ThumbnailFormType } from "@/forms/types";
import { useResponsive } from "@/hooks/utils/useResponsive";
import { RefObject, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export const useGetSize = (ref: RefObject<HTMLDivElement>) => {
  const { control } = useFormContext<ThumbnailFormType>();
  const ratio = useWatch({ control, name: "ratio" });

  const { isPc } = useResponsive();

  const [scale, setScale] = useState(1);

  const [originWidth, originHeight, aspectRatio] = {
    [Ratio.RATIO_16_9]: [1280, 720, "16 / 9"],
    [Ratio.RATIO_9_16]: [720, 1280, "9 / 16"],
    [Ratio.RATIO_4_3]: [800, 600, "4 / 3"],
    [Ratio.RATIO_1_1]: [720, 720, "1 / 1"],
  }[ratio] as [number, number, string];

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
      const PADDING = isPc ? PC_PADDING : MOBILE_PADDING;

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
  }, [ref, originWidth, originHeight, isPc]);

  return { width: originWidth, height: originHeight, scale, aspectRatio };
};
