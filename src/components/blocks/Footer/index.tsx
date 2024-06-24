import { SelectIdxAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import FormSection from "./FormSection";
import Button from "@/components/atoms/Button";
import BackgroundForm from "../@common/BackgroundForm";
import ContentForm from "../@common/ContentForm";
import ProgressBar from "@/components/atoms/ProgressBar";
import RatioForm from "../@common/RatioForm";
import { gray } from "@/styles/Color";

export default function Footer() {
  const [selectIdx, setSelectIdx] = useAtom(SelectIdxAtom);

  const percent = {
    1: 33.3,
    2: 66.6,
    3: 100,
  }[selectIdx];

  return (
    <>
      <ProgressBar value={percent} />
      <Wrap>
        {/* 해상도 form */}
        {selectIdx === 1 && (
          <FormSection idx={1} title="해상도">
            <ContentWrap>
              <RatioForm />
            </ContentWrap>

            <Button text="다음으로" fullWidth onClick={() => setSelectIdx(2)} />
          </FormSection>
        )}

        {/* 배경 form */}
        {selectIdx === 2 && (
          <FormSection idx={2} title="배경">
            <ContentWrap>
              <BackgroundForm />
            </ContentWrap>

            <ButtonWrap>
              <Button
                variant="outline"
                text="이전으로"
                fullWidth
                onClick={() => setSelectIdx(1)}
              />
              <Button
                text="다음으로"
                fullWidth
                onClick={() => setSelectIdx(3)}
              />
            </ButtonWrap>
          </FormSection>
        )}

        {/* 배경 form */}
        {selectIdx === 3 && (
          <FormSection idx={3} title="내용">
            <ContentWrap>
              <ContentForm />
            </ContentWrap>

            <Button text="이전으로" fullWidth onClick={() => setSelectIdx(2)} />
          </FormSection>
        )}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  padding: 12px 16px;
  background: ${gray.gray1};
`;

const ContentWrap = styled.div`
  height: 239px;
  overflow-y: auto;
`;

const ButtonWrap = styled.div`
  display: flex;
  column-gap: 8px;
`;
