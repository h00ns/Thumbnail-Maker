import { primary, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

export default function Button({
  text,
  fullWidth = false,
  ...buttonHtmlAttributes
}: Props) {
  return (
    <Component fullWidth={fullWidth} {...buttonHtmlAttributes}>
      {text}
    </Component>
  );
}

const Component = styled.button<{ fullWidth: boolean }>`
  padding: 10px 12px;
  border: none;
  border-radius: ${Radius.MEDIUM};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  background: ${primary.blue};
  color: ${white};

  ${(props) => props.fullWidth && "width: 100%;"}

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
`;
