import styled from "@emotion/styled";
import Header from "./components/blocks/Header";
import Preview from "./components/blocks/Preview";
import SideBar from "./components/blocks/SideBar";
import { mq } from "./styles/Breakpoint";
import Footer from "./components/blocks/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;

function Content() {
  return (
    <ContentWrap>
      <Preview />

      {/* only PC */}
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>

      {/* only Mobile */}
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  height: calc(100vh - 56px);

  display: flex;

  ${mq["md"]} {
    flex-direction: column;
  }
`;

const SideBarWrap = styled.div`
  ${mq["md"]} {
    display: none;
  }
`;

const FooterWrap = styled.div`
  display: none;

  ${mq["md"]} {
    display: block;
  }
`;
