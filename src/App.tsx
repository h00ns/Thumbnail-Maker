import styled from "@emotion/styled";
import Header from "./components/blocks/Header";
import Preview from "./components/blocks/Preview";
import SideBar from "./components/blocks/SideBar";

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
      <SideBar />
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  height: calc(100vh - 56px);

  display: flex;
`;
