import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Textfield({ ...inputHtmlAttributes }: Props) {
  return <Component {...inputHtmlAttributes} />;
}

const Component = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border-radius: ${Radius.MEDIUM};
  border: 1px solid ${gray.gray6};

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
