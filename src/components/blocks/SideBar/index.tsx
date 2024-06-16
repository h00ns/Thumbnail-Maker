import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export default function SideBar() {
  return (
    <Wrap>
      <Part1 />
      <Part2 />
      <Part3 />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 320px;
  padding: 12px 16px;
  box-sizing: border-box;
  box-shadow: ${Shadow.SMALL};
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;
