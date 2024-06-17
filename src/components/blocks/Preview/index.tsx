import { gray } from "@/styles/Color";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useGetPreviewSize } from "./Preview.hooks";
import { BackgroundAtom, BorderAtom, UseBorderAtom } from "@/store";
import { useAtom } from "jotai";
import { Shadow } from "@/styles/Shadow";
import { mq } from "@/styles/Breakpoint";

export default function Preview() {
  const ref = useRef<HTMLDivElement>(null);

  const [background] = useAtom(BackgroundAtom);
  const [useBorder] = useAtom(UseBorderAtom);
  const [border] = useAtom(BorderAtom);

  const { width, height } = useGetPreviewSize(ref);

  // base64 포함시 이미지로 판단
  const backgroundKey = background.includes("base64")
    ? "backgroundImage"
    : "background";

  return (
    <Wrap ref={ref}>
      <PreviewContent
        id="thumbnail"
        style={{
          width,
          height,
          border: useBorder ? `15px solid ${border}` : undefined,
          [backgroundKey]: background,
        }}
      >
        Thumbnail~
      </PreviewContent>
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1;
  padding: 56px;
  background: ${gray.gray2};

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${mq["md"]} {
    padding: 12px;
  }
`;

const PreviewContent = styled.div`
  width: 100%;
  box-shadow: ${Shadow.MEDIUM};
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
`;
