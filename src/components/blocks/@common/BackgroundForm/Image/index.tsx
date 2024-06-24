import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { INITIAL_BACKGROUND } from "..";
import { Title } from "../Solid";
import { SelectBackgroundType, SelectBackgroundTypeAtom } from "@/store";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { ThumbnailFormType } from "@/forms/types";
import FileUploader from "@/components/atoms/FileUploader";

type Props = {
  handleBackgroundType: (value: SelectBackgroundType) => void;
};

export default function Image({ handleBackgroundType }: Props) {
  const { control, setValue } = useFormContext<ThumbnailFormType>();
  const background = useWatch({ control, name: "background.value" });

  const [selectBackgroundType] = useAtom(SelectBackgroundTypeAtom);

  const isChecked = selectBackgroundType === "image";

  const handleImageDelete = () => {
    setValue("background.value", INITIAL_BACKGROUND);
  };

  return (
    <>
      <Title onClick={() => handleBackgroundType("image")}>
        <Radio value={"image"} checked={isChecked} />
        <Typography>이미지</Typography>
      </Title>

      {isChecked && (
        <>
          {background === INITIAL_BACKGROUND ? (
            <Controller
              name="background.value"
              control={control}
              render={({ field: { onChange } }) => (
                <FileUploader handleFile={onChange} />
              )}
            />
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
