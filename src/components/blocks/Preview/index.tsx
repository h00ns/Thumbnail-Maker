import { gray } from "@/styles/Color";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useGetPreviewSize } from "./Preview.hooks";

export default function Preview() {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useGetPreviewSize(ref);

  return (
    <Wrap ref={ref}>
      <PreviewContent id="thumbnail" style={{ width, height }}>
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
`;

const PreviewContent = styled.div`
  border: 1px solid red;
  width: 100%;
`;
