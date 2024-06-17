import { SelectIdxAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import FormSection from "./FormSection";
import ResolutionForm from "../@common/ResolutionForm";
import Button from "@/components/atoms/Button";
import BackgroundForm from "../@common/BackgroundForm";

export default function Footer() {
  const [selectIdx, setSelectIdx] = useAtom(SelectIdxAtom);

  return (
    <Wrap>
      {selectIdx === 1 && (
        <FormSection idx={1} title="해상도">
          <ContentWrap>
            <ResolutionForm />
            <Button text="다음으로" fullWidth onClick={() => setSelectIdx(2)} />
          </ContentWrap>
        </FormSection>
      )}

      {selectIdx === 2 && (
        <FormSection idx={2} title="배경">
          <ContentWrap>
            <BackgroundForm />

            <ButtonWrap>
              <Button
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
          </ContentWrap>
        </FormSection>
      )}

      {selectIdx === 3 && (
        <FormSection idx={3} title="내용">
          <ContentWrap>
            <Button text="이전으로" fullWidth onClick={() => setSelectIdx(2)} />
          </ContentWrap>
        </FormSection>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 360px;
  padding: 12px 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContentWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  display: flex;
  column-gap: 8px;
`;
