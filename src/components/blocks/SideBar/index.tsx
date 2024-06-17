import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import ResolutionCard from "./ResolutionCard";
import BackgroundCard from "./BackgroundCard";
import ContentCard from "./ContentCard";

export default function SideBar() {
  return (
    <Wrap>
      <ResolutionCard />
      <BackgroundCard />
      <ContentCard />
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
