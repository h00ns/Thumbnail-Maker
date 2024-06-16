import styled from "@emotion/styled";
import { white } from "@/styles/Color";
import { Shadow } from "@/styles/Shadow";
import Button from "@/components/atoms/Button";

export default function Header() {
  return (
    <Wrap>
      <Title>Thumnail-Maker</Title>

      <Button text="다운로드" />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 8px 12px;
  background: ${white};
  box-shadow: ${Shadow.SMALL};
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin: 0;
`;
