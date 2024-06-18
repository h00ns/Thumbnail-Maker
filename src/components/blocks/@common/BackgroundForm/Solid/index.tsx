import ColorPicker from "@/components/atoms/ColorPicker";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { BackgroundAtom, BackgroundTypeAtom } from "@/store";
import { BackgroundType } from "@/store/types";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

type Props = {
  handleBackgroundType: (value: BackgroundType) => void;
};

export default function Solid({ handleBackgroundType }: Props) {
  const [backgroundType] = useAtom(BackgroundTypeAtom);
  const [background, setBackground] = useAtom(BackgroundAtom);

  return (
    <>
      <Title onClick={() => handleBackgroundType("solid")}>
        <Radio value={"solid"} checked={backgroundType === "solid"} />
        <Typography>단일 색상</Typography>
      </Title>
      {backgroundType === "solid" && (
        <ColorPicker
          value={background}
          handleChange={(value) => setBackground(value)}
        />
      )}
    </>
  );
}

export const Title = styled.div`
  width: fit-content;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
