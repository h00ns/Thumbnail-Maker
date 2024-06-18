import { gray, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import Typography from "../Typography";
import { useOutsideClick } from "@/hooks/interaction/useOutsideClick";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  handleChange: (color: string) => void;
}

export default function ColorPicker({
  value,
  handleChange,
  ...divHtmlAttributes
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useOutsideClick(ref.current, () => setIsOpen(false));

  return (
    <Container {...divHtmlAttributes}>
      <Component onClick={handleClick}>
        <Circle style={{ backgroundColor: value }} />
        <Typography>{value}</Typography>
      </Component>

      <PaletteWrap
        ref={ref}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <HexColorPicker color={value} onChange={handleChange} />
      </PaletteWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Component = styled.div`
  width: 105px;
  border: 1px solid ${gray.gray3};
  padding: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: 12px;

  &:hover {
    background: ${gray.gray1};
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${gray.gray3};
  border-radius: ${Radius.MAXIMUM};
`;

const PaletteWrap = styled.div`
  padding: 12px 16px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  z-index: 999;

  position: absolute;
  top: 40px;
  left: 0px;
`;
