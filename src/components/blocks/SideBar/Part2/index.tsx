import Button from "@/components/atoms/Button";
import ColorPicker from "@/components/atoms/ColorPicker";
import FormCard from "@/components/atoms/FormCard";
import Radio from "@/components/atoms/Radio";
import Typography from "@/components/atoms/Typography";
import { SelectIdxAtom } from "@/store";
import { red } from "@/styles/Color";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useState } from "react";

type BackgroundType = "solid" | "gradation" | "image";

export default function Part2() {
  const [, setSelectIdx] = useAtom(SelectIdxAtom);

  const [type, setType] = useState<BackgroundType>("solid");

  /** 다음으로 클릭 */
  const handleNextIdx = () => {
    setSelectIdx(3);
  };

  const [color, setColor] = useState<string>("#ffffff");

  return (
    <FormCard idx={2} title="배경">
      <Form>
        <Title onClick={() => setType("solid")}>
          <Radio value={"solid"} checked={type === "solid"} />
          <Typography>단일 색상</Typography>
        </Title>
        <ColorPicker value={color} handleChange={(v) => setColor(v)} />

        <Title onClick={() => setType("gradation")}>
          <Radio value={"gradation"} checked={type === "gradation"} />
          <Typography>그라데이션</Typography>
        </Title>

        <Title onClick={() => setType("image")}>
          <Radio value={"image"} checked={type === "image"} />
          <Typography>이미지</Typography>
        </Title>
      </Form>

      <Button
        style={{ marginTop: "8px" }}
        text="다음으로"
        fullWidth
        onClickCapture={handleNextIdx}
      />
    </FormCard>
  );
}

const Form = styled.form`
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
