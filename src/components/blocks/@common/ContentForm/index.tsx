import styled from "@emotion/styled";
import Position from "./Position";
import Divider from "@/components/atoms/Divider";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function ContentForm() {
  return (
    <Layout>
      {/* 위치 */}
      <Position />

      <Divider />

      {/* 제목 */}
      <Title />

      <Divider />

      {/* 부제목 */}
      <SubTitle />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
