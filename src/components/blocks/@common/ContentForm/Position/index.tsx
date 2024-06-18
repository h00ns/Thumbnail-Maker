import Typography from "@/components/atoms/Typography";
import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";
import PositionItem from "./PositionItem";
import { Position } from "@/store/types";

export default function PositionComponent() {
  return (
    <Layout>
      <Typography variant="sh4">위치</Typography>

      <PositionBox>
        <PositionItem type="left" value={Position.TOP_LEFT} />
        <PositionItem type="center" value={Position.TOP_CENTER} />
        <PositionItem type="right" value={Position.TOP_RIGHT} />

        <PositionItem type="left" value={Position.CENTER_LEFT} />
        <PositionItem type="center" value={Position.CENTER_CENTER} />
        <PositionItem type="right" value={Position.CENTER_RIGHT} />

        <PositionItem type="left" value={Position.BOTTOM_LEFT} />
        <PositionItem type="center" value={Position.BOTTOM_CENTER} />
        <PositionItem type="right" value={Position.BOTTOM_RIGHT} />
      </PositionBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PositionBox = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid ${gray.gray3};
  border-radius: ${Radius.SMALL};
  padding: 12px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
