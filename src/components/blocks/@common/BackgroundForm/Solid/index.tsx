import ColorPicker from "@/components/atoms/ColorPicker";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { ThumbnailFormType } from "@/forms/types";
import { SelectBackgroundType, SelectBackgroundTypeAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  handleBackgroundType: (value: SelectBackgroundType) => void;
};

export default function Solid({ handleBackgroundType }: Props) {
  const { control } = useFormContext<ThumbnailFormType>();
  const [SelectBackgroundType] = useAtom(SelectBackgroundTypeAtom);

  const isChecked = SelectBackgroundType === "solid";

  return (
    <>
      <Title onClick={() => handleBackgroundType("solid")}>
        <Radio value={"solid"} checked={isChecked} />
        <Typography>단일 색상</Typography>
      </Title>
      {isChecked && (
        <Controller
          name="background.value"
          control={control}
          render={({ field: { value, onChange } }) => (
            <ColorPicker value={value} handleChange={onChange} />
          )}
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
