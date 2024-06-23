import { gray } from "@/styles/Color";
import styled from "@emotion/styled";
import { useRef } from "react";
import {
  BackgroundAtom,
  BorderAtom,
  PositionAtom,
  SubTitleAtom,
  TitleAtom,
  UseBorderAtom,
} from "@/store";
import { useAtom } from "jotai";
import { Shadow } from "@/styles/Shadow";
import { mq } from "@/styles/Breakpoint";
import { useGetSize } from "./hooks";

export default function Preview() {
  const ref = useRef<HTMLDivElement>(null);

  const [background] = useAtom(BackgroundAtom);
  const [useBorder] = useAtom(UseBorderAtom);
  const [border] = useAtom(BorderAtom);
  const [position] = useAtom(PositionAtom);
  const [title] = useAtom(TitleAtom);
  const [subTitle] = useAtom(SubTitleAtom);

  const { width, height, scale, aspectRatio } = useGetSize(ref);
  const [justifyContent, alignItems] = position.split(",");

  // base64 포함시 이미지로 판단
  const backgroundKey = background.includes("base64")
    ? "backgroundImage"
    : "background";

  const textAlign: Record<string, "left" | "center" | "right"> = {
    "flex-start": "left",
    center: "center",
    "flex-end": "right",
  };

  return (
    <Wrap ref={ref}>
      <div id="thumbnail">
        <ThumbnailPreview
          style={{
            width,
            height,
            aspectRatio,
            transform: `scale(${scale})`,
          }}
        >
          <PreviewContent
            style={{
              justifyContent,
              alignItems,
              textAlign: textAlign[justifyContent],
              border: useBorder ? `15px solid ${border}` : undefined,
              [backgroundKey]: background,
            }}
          >
            <TextWrap>
              <Text style={{ fontSize: title.size, color: title.color }}>
                {title.value}
              </Text>
              <Text style={{ fontSize: subTitle.size, color: subTitle.color }}>
                {subTitle.value}
              </Text>
            </TextWrap>
          </PreviewContent>
        </ThumbnailPreview>
      </div>
    </Wrap>
  );
}

const Wrap = styled.main`
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

const ThumbnailPreview = styled.div`
  box-shadow: ${Shadow.MEDIUM};
  background-size: cover;
  background-position: center center;

  display: flex;
`;

const PreviewContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Text = styled.p`
  margin: 0;
  font-weight: bold;
`;
