import { PositionType, ThumbnailFormType } from "@/forms/types";
import { gray, primary } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";

type Props = {
  type: "left" | "center" | "right";
  value: PositionType;
};

export default function PositionItem({ type, value }: Props) {
  const { control, setValue } = useFormContext<ThumbnailFormType>();
  const position = useWatch({ control, name: "content.position" });

  const alignItems = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[type];

  const handleClick = (value: PositionType) => {
    setValue("content.position", value);
  };

  const isSelect = position === value;

  return (
    <Layout onClick={() => handleClick(value)}>
      {isSelect ? (
        <StickWrap style={{ alignItems }}>
          <SmallStick />
          <LargeStick />
          <MediumStick />
        </StickWrap>
      ) : (
        <Circle />
      )}
    </Layout>
  );
}

const Layout = styled.div`
  width: 42px;
  height: 42px;

  border-radius: ${Radius.MEDIUM};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${gray.gray1};
  }
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: ${Radius.MAXIMUM};
  background: ${gray.gray6};
`;

const StickWrap = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SmallStick = styled.div`
  width: 10px;
  height: 4px;
  background: ${primary.blue};
`;

const LargeStick = styled.div`
  width: 20px;
  height: 4px;
  background: ${primary.blue};
`;

const MediumStick = styled.div`
  width: 14px;
  height: 4px;
  background: ${primary.blue};
`;
