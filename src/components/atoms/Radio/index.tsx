import styled from "@emotion/styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  checked: boolean;
}

export default function Radio({
  value,
  checked,
  ...inputHtmlAttributes
}: Props) {
  return (
    <Component
      type="radio"
      value={value}
      checked={checked}
      {...inputHtmlAttributes}
    />
  );
}

const Component = styled.input`
  margin: 0;
`;
