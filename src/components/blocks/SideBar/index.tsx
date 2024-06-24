import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { SelectIdxAtom } from "@/store";
import Button from "@/components/atoms/Button";
import BackgroundForm from "../@common/BackgroundForm";
import FormCard from "./FormCard";
import ContentForm from "../@common/ContentForm";
import { gray } from "@/styles/Color";
import RatioForm from "../@common/RatioForm";

export default function SideBar() {
  const [, setSelectIdx] = useAtom(SelectIdxAtom);

  return (
    <Wrap>
      {/* 해상도 form */}
      <FormCard idx={1} title="해상도">
        <RatioForm />

        <Button
          style={{ marginTop: 16 }}
          text="다음으로"
          fullWidth
          onClickCapture={() => setSelectIdx(2)}
        />
      </FormCard>

      {/* 배경 form */}
      <FormCard idx={2} title="배경">
        <BackgroundForm />

        <Button
          style={{ marginTop: 16 }}
          text="다음으로"
          fullWidth
          onClickCapture={() => setSelectIdx(3)}
        />
      </FormCard>

      {/* 내용 form */}
      <FormCard idx={3} title="내용">
        <ContentForm />
      </FormCard>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 320px;
  height: 100%;
  padding: 12px 16px;
  box-shadow: ${Shadow.SMALL};
  background: ${gray.gray1};
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;
