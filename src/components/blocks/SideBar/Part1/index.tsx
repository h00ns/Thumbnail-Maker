import PartCard from "@/components/atoms/PartCard";
import styled from "@emotion/styled";
import ResolutionButton from "./ResolutionButton";
import { Resolution } from "@/store/types";
import Button from "@/components/atoms/Button";
import { useAtom } from "jotai";
import { SelectIdxAtom } from "@/store";

export default function Part1() {
  const [, setSelectIdx] = useAtom(SelectIdxAtom);

  /** 다음으로 클릭 */
  const handleNextIdx = () => {
    setSelectIdx(2);
  };

  return (
    <PartCard idx={1} title="해상도">
      <Form>
        <ResolutionButton text="16:9" value={Resolution.RATIO_16_9} />
        <ResolutionButton text="9:16" value={Resolution.RATIO_9_16} />
        <ResolutionButton text="4:3" value={Resolution.RATIO_4_3} />
        <ResolutionButton text="1:1" value={Resolution.RATIO_1_1} />
      </Form>

      <Button
        style={{ marginTop: "8px" }}
        text="다음으로"
        fullWidth
        onClickCapture={handleNextIdx}
      />
    </PartCard>
  );
}

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
