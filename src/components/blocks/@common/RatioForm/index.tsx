import styled from "@emotion/styled";
import { Ratio } from "@/forms/types";
import RatioButton from "./RatioButton";

export default function RatioForm() {
  return (
    <Layout>
      <RatioButton text="16:9" value={Ratio.RATIO_16_9} />
      <RatioButton text="9:16" value={Ratio.RATIO_9_16} />
      <RatioButton text="4:3" value={Ratio.RATIO_4_3} />
      <RatioButton text="1:1" value={Ratio.RATIO_1_1} />
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
