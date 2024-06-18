import styled from "@emotion/styled";
import Position from "./Position";
import Divider from "@/components/atoms/Divider";

export default function ContentForm() {
  return (
    <Layout>
      {/* 위치 */}
      <Position />

      <Divider />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
