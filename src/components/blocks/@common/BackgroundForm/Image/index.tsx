import FileUploader from "@/components/atoms/FileUploader";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { BackgroundAtom, BackgroundTypeAtom } from "@/store";
import { BackgroundType } from "@/store/types";
import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { INITIAL_BACKGROUND } from "..";
import { Title } from "../Solid";

type Props = {
  handleBackgroundType: (value: BackgroundType) => void;
};

export default function Image({ handleBackgroundType }: Props) {
  const [backgroundType] = useAtom(BackgroundTypeAtom);
  const [background, setBackground] = useAtom(BackgroundAtom);

  const handleImageDelete = () => {
    setBackground(INITIAL_BACKGROUND);
  };

  return (
    <>
      <Title onClick={() => handleBackgroundType("image")}>
        <Radio value={"image"} checked={backgroundType === "image"} />
        <Typography>이미지</Typography>
      </Title>
      {backgroundType === "image" && (
        <>
          {background === INITIAL_BACKGROUND ? (
            <FileUploader />
          ) : (
            <ImgWrap>
              <Img style={{ backgroundImage: background }} />
              <ImgDeleteButton onClick={handleImageDelete} />
            </ImgWrap>
          )}
        </>
      )}
    </>
  );
}

const ImgWrap = styled.div`
  width: fit-content;
  position: relative;
`;

const Img = styled.div`
  width: 64px;
  height: 64px;
  box-shadow: ${Shadow.MEDIUM};
  border-radius: ${Radius.MEDIUM};
  background-size: cover;
  background-position: center center;
`;

const ImgDeleteButton = styled.div`
  width: 18px;
  height: 18px;
  border-radius: ${Radius.MEDIUM};
  background: ${gray.gray2};
  cursor: pointer;

  position: absolute;
  top: -9px;
  right: -9px;

  &:hover {
    opacity: 0.8;
  }
`;
