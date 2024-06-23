import { gray } from "@/styles/Color";
import styled from "@emotion/styled";
import { useRef } from "react";
import { Shadow } from "@/styles/Shadow";
import { mq } from "@/styles/Breakpoint";
import { useGetSize } from "./Preview.hooks";
import { useFormContext, useWatch } from "react-hook-form";
import { ThumbnailFormType } from "@/forms/types";

export default function Preview() {
  const ref = useRef<HTMLDivElement>(null);

  const { control } = useFormContext<ThumbnailFormType>();

  const [background, content] = useWatch({
    control,
    name: ["background", "content"],
  });

  const { value: backgroundValue, border } = background;
  const { position, title, subTitle } = content;

  const { width, height, scale, aspectRatio } = useGetSize(ref);
  const [justifyContent, alignItems] = position.split(",");

  // base64 포함시 이미지로 판단
  const backgroundKey = backgroundValue.includes("base64")
    ? "backgroundImage"
    : "background";

  const textAlign: Record<string, "left" | "center" | "right"> = {
    "flex-start": "left",
    center: "center",
    "flex-end": "right",
  };

  return (
    <Wrap ref={ref}>
      <div>
        <ThumbnailPreview
          id="thumbnail"
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
              border: border ? `15px solid ${border}` : undefined,
              [backgroundKey]: backgroundValue,
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

  display: flex;
`;

const PreviewContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-size: cover;
  background-position: center center;

  display: flex;
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
