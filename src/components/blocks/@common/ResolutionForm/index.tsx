import styled from "@emotion/styled";
import ResolutionButton from "./ResolutionButton";
import { Resolution } from "@/store/types";

export default function ResolutionForm() {
  return (
    <Layout>
      <ResolutionButton text="16:9" value={Resolution.RATIO_16_9} />
      <ResolutionButton text="9:16" value={Resolution.RATIO_9_16} />
      <ResolutionButton text="4:3" value={Resolution.RATIO_4_3} />
      <ResolutionButton text="1:1" value={Resolution.RATIO_1_1} />
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
