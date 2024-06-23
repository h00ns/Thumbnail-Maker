import { RatioType, ThumbnailFormType } from "@/forms/types";
import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";

type Props = {
  text: string;
  value: RatioType;
};

export default function RatioButton({ text, value }: Props) {
  const { control, setValue } = useFormContext<ThumbnailFormType>();
  const ratio = useWatch({ control, name: "ratio" });

  const isSelect = ratio === value;

  const handleClick = () => {
    setValue("ratio", value);
  };

  return (
    <Component isSelect={isSelect} onClick={handleClick}>
      {text}
    </Component>
  );
}

const Component = styled.div<{ isSelect: boolean }>`
  padding: 10px 12px;
  border: 1px solid ${gray.gray3};
  border-radius: ${Radius.SMALL};
  text-align: center;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? `
    background: ${gray.gray2};
    `
      : `
    &:hover {
      background: ${gray.gray1};
    }
  `}
`;
