import ColorPicker from "@/components/atoms/ColorPicker";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { BackgroundAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useState } from "react";
import GradationItem from "./GradationItem";
import FileUploader from "@/components/atoms/FileUploader";

type BackgroundType = "solid" | "gradation" | "image";

export default function BackgroundForm() {
  const [background, setBackground] = useAtom(BackgroundAtom);

  const [type, setType] = useState<BackgroundType>("solid");

  /** 배경 타입 변경 */
  const handleBackgroundType = (value: BackgroundType) => {
    setType(value);

    if (value === "solid") {
      setBackground("#ffffff");
    }
    if (value === "gradation") {
      setBackground("linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)");
    }
  };

  return (
    <Layout>
      <Title onClick={() => handleBackgroundType("solid")}>
        <Radio value={"solid"} checked={type === "solid"} />
        <Typography>단일 색상</Typography>
      </Title>
      {type === "solid" && (
        <ColorPicker
          value={background}
          handleChange={(v) => setBackground(v)}
        />
      )}

      <Title onClick={() => handleBackgroundType("gradation")}>
        <Radio value={"gradation"} checked={type === "gradation"} />
        <Typography>그라데이션</Typography>
      </Title>
      {type === "gradation" && (
        <GradationItemWrap>
          <GradationItem value="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)" />
          <GradationItem value="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" />
          <GradationItem value="linear-gradient(120deg, #f6d365 0%, #fda085 100%)" />
          <GradationItem value="linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)" />
          <GradationItem value="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" />
          <GradationItem value="linear-gradient(to top, #fddb92 0%, #d1fdff 100%)" />
          <GradationItem value="linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)" />
          <GradationItem value="linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)" />
          <GradationItem value="linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)" />
          <GradationItem value="linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)" />
        </GradationItemWrap>
      )}

      <Title onClick={() => handleBackgroundType("image")}>
        <Radio value={"image"} checked={type === "image"} />
        <Typography>이미지</Typography>
      </Title>
      {type === "image" && <FileUploader />}
    </Layout>
  );
}

const Layout = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.div`
  width: fit-content;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

const GradationItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`;
