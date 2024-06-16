import styled from "@emotion/styled";
import Header from "./components/blocks/Header";
import { gray } from "./styles/Color";

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
  return <ContentWrap></ContentWrap>;
}

const ContentWrap = styled.div`
  background: ${gray.gray1};
  flex: 1;
`;
