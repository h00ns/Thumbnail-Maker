import ColorPicker from "@/components/atoms/ColorPicker";
import Textfield from "@/components/atoms/Textfield";
import Typography from "@/components/atoms/Typography";
import { ThumbnailFormType } from "@/forms/types";
import styled from "@emotion/styled";
import { Controller, useFormContext } from "react-hook-form";

const NUMBER_REGEX = "/[^0-9]/g";

export default function Title() {
  const { control } = useFormContext<ThumbnailFormType>();

  return (
    <>
      <Typography variant="sh4">부제목</Typography>
      <Block>
        <Controller
          control={control}
          name="content.subTitle.value"
          render={({ field: { value, onChange } }) => (
            <Textfield style={{ flex: 1 }} value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="content.subTitle.size"
          render={({ field: { value, onChange } }) => (
            <Textfield
              type="number"
              style={{ width: 32 }}
              value={value}
              onChange={(e) => {
                const parseValue = e.target.value.replace(NUMBER_REGEX, "");
                onChange(Number(parseValue));
              }}
            />
          )}
        />
      </Block>

      <Block>
        <Controller
          control={control}
          name="content.subTitle.color"
          render={({ field: { value, onChange } }) => (
            <ColorPicker value={value} handleChange={onChange} />
          )}
        />

        <Controller
          control={control}
          name="content.subTitle.stroke"
          render={({ field: { value, onChange } }) => (
            <ColorPicker
              value={value}
              handleChange={onChange}
              paletteAlign="right"
            />
          )}
        />
      </Block>
    </>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
