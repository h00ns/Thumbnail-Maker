import { gray } from "@/styles/Color";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useGetPreviewSize } from "./Preview.hooks";
import { BackgroundAtom } from "@/store";
import { useAtom } from "jotai";
import { Shadow } from "@/styles/Shadow";
import { mq } from "@/styles/Breakpoint";

export default function Preview() {
  const ref = useRef<HTMLDivElement>(null);

  const [background] = useAtom(BackgroundAtom);

  const { width, height } = useGetPreviewSize(ref);

  return (
    <Wrap ref={ref}>
      <PreviewContent id="thumbnail" style={{ width, height, background }}>
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
`;
