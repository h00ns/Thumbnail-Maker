import { primary, white } from "@/styles/Color";
import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export default function ProgressBar({ value, ...divHtmlAttributes }: Props) {
  return (
    <Component {...divHtmlAttributes}>
      <Value style={{ width: `${value}%` }} />
    </Component>
  );
}

const Component = styled.div`
  width: 100%;
  height: 6px;
  background: ${white};

  position: relative;
`;

const Value = styled.div`
  height: 100%;
  background: ${primary.blue};
  transition: width 0.4s ease-in-out;

  position: absolute;
  top: 0;
  left: 0;
`;
