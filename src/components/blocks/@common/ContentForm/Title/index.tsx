import ColorPicker from "@/components/atoms/ColorPicker";
import Textfield from "@/components/atoms/Textfield";
import Typography from "@/components/atoms/Typography";
import { ThumbnailFormType } from "@/forms/types";
import styled from "@emotion/styled";
import { Controller, useFormContext } from "react-hook-form";

export default function Title() {
  const { register, control } = useFormContext<ThumbnailFormType>();

  return (
    <>
      <Typography variant="sh4">제목</Typography>
      <Block>
        <Textfield style={{ flex: 1 }} {...register("content.title.value")} />
        <Textfield
          style={{ width: 32 }}
          type="number"
          {...register("content.title.size")}
        />
      </Block>
      <Controller
        control={control}
        name="content.title.color"
        render={({ field: { value, onChange } }) => (
          <ColorPicker value={value} handleChange={onChange} />
        )}
      />
    </>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
