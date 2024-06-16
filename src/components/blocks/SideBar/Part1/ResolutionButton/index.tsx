import { ResolutionAtom } from "@/store";
import { ResolutionType } from "@/store/types";
import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

type Props = {
  text: string;
  value: ResolutionType;
};

export default function ResolutionButton({ text, value }: Props) {
  const [resolution, setResolution] = useAtom(ResolutionAtom);

  const isSelect = resolution === value;

  const handleClick = () => {
    setResolution(value);
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

  ${({ isSelect }) =>
    isSelect &&
    `
    background: ${gray.gray1};
  `}
`;
