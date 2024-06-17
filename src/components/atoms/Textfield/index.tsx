import styled from "@emotion/styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Textfield({ ...inputHtmlAttributes }: Props) {
  return <Component {...inputHtmlAttributes} />;
}

const Component = styled.input``;
