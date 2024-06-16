import { primary, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...buttonHtmlAttributes }: Props) {
  return <Component {...buttonHtmlAttributes}>{text}</Component>;
}

const Component = styled.button`
  padding: 10px 12px;
  border: none;
  border-radius: ${Radius.MEDIUM};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  background: ${primary.blue};
  color: ${white};

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
