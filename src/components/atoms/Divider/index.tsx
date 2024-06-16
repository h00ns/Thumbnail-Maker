import { gray } from "@/styles/Color";
import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export default function Divider({
  color = gray.gray3,
  ...divHtmlAttributes
}: Props) {
  return (
    <Component
      {...divHtmlAttributes}
      style={{ backgroundColor: color, ...divHtmlAttributes.style }}
    />
  );
}

const Component = styled.div`
  height: 1px;
  width: 100%;
`;
