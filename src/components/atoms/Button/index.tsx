import { gray, primary, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

type ButtonVariant = "primary" | "outline";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  text: string;
  fullWidth?: boolean;
}

const variants: Record<
  ButtonVariant,
  { background: string; color: string; border: string }
> = {
  primary: {
    background: primary.blue,
    color: white,
    border: `1px solid transparent`,
  },
  outline: {
    background: "transparent",
    color: gray.gray7,
    border: `1px solid ${gray.gray5}`,
  },
};

export default function Button({
  text,
  variant = "primary",
  fullWidth = false,
  ...buttonHtmlAttributes
}: Props) {
  return (
    <Component
      fullWidth={fullWidth}
      {...buttonHtmlAttributes}
      style={{ ...variants[variant], ...buttonHtmlAttributes.style }}
    >
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
