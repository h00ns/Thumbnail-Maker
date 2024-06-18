import styled from "@emotion/styled";
import GradationItem from "./GradationItem";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { BackgroundType } from "@/store/types";
import { useAtom } from "jotai";
import { BackgroundTypeAtom } from "@/store";
import { Title } from "../Solid";

type Props = {
  handleBackgroundType: (value: BackgroundType) => void;
};

export default function Gradation({ handleBackgroundType }: Props) {
  const [backgroundType] = useAtom(BackgroundTypeAtom);

  return (
    <>
      <Title onClick={() => handleBackgroundType("gradation")}>
        <Radio value={"gradation"} checked={backgroundType === "gradation"} />
        <Typography>그라데이션</Typography>
      </Title>
      {backgroundType === "gradation" && (
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
    </>
  );
}

const GradationItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`;
