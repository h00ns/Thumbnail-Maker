import { gray, primary, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  checkStatus: boolean;
  onClick: () => void;
}

export default function Toggle({
  checkStatus,
  onClick,
  ...divHtmlAttributes
}: Props) {
  return (
    <Component
      checkStatus={checkStatus}
      onClick={onClick}
      {...divHtmlAttributes}
    >
      <Circle />
    </Component>
  );
}

const Component = styled.div<{ checkStatus: boolean }>`
  box-sizing: border-box;
  width: 44px;
  height: 24px;
  padding: 2px;
  border-radius: ${Radius.MAXIMUM};
  background: ${({ checkStatus }) => (checkStatus ? primary.blue : gray.gray3)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  display: flex;
  justify-content: ${({ checkStatus }) =>
    checkStatus ? "flex-end" : "flex-start"};
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: ${white};
  border-radius: ${Radius.MAXIMUM};
`;
