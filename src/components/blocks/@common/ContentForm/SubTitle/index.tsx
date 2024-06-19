import ColorPicker from "@/components/atoms/ColorPicker";
import Textfield from "@/components/atoms/Textfield";
import Typography from "@/components/atoms/Typography";
import { SubTitleAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

export default function SubTitle() {
  const [title, setTitle] = useAtom(SubTitleAtom);
  const { value, size, color } = title;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle((prev) => ({
      ...prev,
      value,
    }));
  };

  const handleFontSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle((prev) => ({
      ...prev,
      size: parseInt(value),
    }));
  };

  const handleColorChange = (value: string) => {
    setTitle((prev) => ({
      ...prev,
      color: value,
    }));
  };

  return (
    <>
      <Typography variant="sh4">제목</Typography>
      <Block>
        <Textfield
          style={{ flex: 1 }}
          value={value}
          onChange={handleTitleChange}
        />
        <Textfield
          style={{ width: 32 }}
          type="number"
          value={size}
          onChange={handleFontSizeChange}
        />
      </Block>
      <ColorPicker value={color} handleChange={handleColorChange} />
    </>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
