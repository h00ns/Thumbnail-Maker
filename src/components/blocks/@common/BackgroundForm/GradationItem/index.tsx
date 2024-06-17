import styled from "@emotion/styled";
import { BackgroundAtom } from "@/store";
import { useAtom } from "jotai";
import { Radius } from "@/styles/Radius";

type Props = {
  value: string;
};

export default function GradationItem({ value }: Props) {
  const [, setBackground] = useAtom(BackgroundAtom);

  return (
    <Component
      style={{ background: value }}
      onClick={() => setBackground(value)}
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
