import { SelectIdxAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import FormSection from "./FormSection";
import ResolutionForm from "../@common/ResolutionForm";
import Button from "@/components/atoms/Button";
import BackgroundForm from "../@common/BackgroundForm";
import ContentForm from "../@common/ContentForm";
import ProgressBar from "@/components/atoms/ProgressBar";

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
        {selectIdx === 1 && (
          <FormSection idx={1} title="해상도">
            <ContentWrap>
              <ResolutionForm />
            </ContentWrap>

            <Button text="다음으로" fullWidth onClick={() => setSelectIdx(2)} />
          </FormSection>
        )}

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
`;

const ContentWrap = styled.div`
  height: 239px;
  overflow-y: auto;
`;

const ButtonWrap = styled.div`
  display: flex;
  column-gap: 8px;
`;
