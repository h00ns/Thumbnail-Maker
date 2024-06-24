import { gray, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import Typography from "../Typography";
import { useOutsideClick } from "@/hooks/interaction/useOutsideClick";
import Button from "../Button";
import { useResponsive } from "@/hooks/utils/useResponsive";

type PaletteAlignType = "left" | "right";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  paletteAlign?: PaletteAlignType;
  handleChange: (color: string) => void;
}

export default function ColorPicker({
  value,
  paletteAlign = "left",
  handleChange,
  ...divHtmlAttributes
}: Props) {
  const { isPc } = useResponsive();

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useOutsideClick(ref.current, () => setIsOpen(false));

  return (
    <Container ref={ref} {...divHtmlAttributes}>
      <Component onClickCapture={handleClick}>
        <Circle style={{ backgroundColor: value }} />
        <Typography>{value}</Typography>
      </Component>

      {isOpen && (
        <>
          {isPc ? (
            <PcPaletteWrap paletteAlign={paletteAlign}>
              <HexColorPicker color={value} onChange={handleChange} />
            </PcPaletteWrap>
          ) : (
            <MobilePaletteWrap>
              <HexColorPicker color={value} onChange={handleChange} />

              <Button
                style={{ width: 200 }}
                text="선택"
                onClick={handleClick}
              />
            </MobilePaletteWrap>
          )}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;

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

const PcPaletteWrap = styled.div<{ paletteAlign: PaletteAlignType }>`
  padding: 12px 16px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  z-index: 999;

  position: absolute;
  top: 40px;

  ${({ paletteAlign }) => {
    switch (paletteAlign) {
      case "left": {
        return `
          left: 0;
        `;
      }
      case "right": {
        return `
          right: 0;
        `;
      }
    }
  }}
`;

const MobilePaletteWrap = styled.div`
  width: 100%;
  padding: 12px 16px;
  background: ${white};
  box-shadow: ${Shadow.MEDIUM};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  position: fixed;
  bottom: 0;
  left: 0;
`;
