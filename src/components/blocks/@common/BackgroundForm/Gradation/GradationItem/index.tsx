import styled from "@emotion/styled";
import { Radius } from "@/styles/Radius";
import { ThumbnailFormType } from "@/forms/types";
import { useFormContext } from "react-hook-form";

type Props = {
  value: string;
};

export default function GradationItem({ value }: Props) {
  const { setValue } = useFormContext<ThumbnailFormType>();

  const handleClick = (value: string) => {
    setValue("background.value", value);
  };

  return (
    <Component
      style={{ background: value }}
      onClick={() => handleClick(value)}
    />
  );
}

const Component = styled.div`
  height: 32px;
  border-radius: ${Radius.MEDIUM};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
