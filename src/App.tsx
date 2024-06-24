import styled from "@emotion/styled";
import Header from "./components/blocks/Header";
import Preview from "./components/blocks/Preview";
import SideBar from "./components/blocks/SideBar";
import { mq } from "./styles/Breakpoint";
import Footer from "./components/blocks/Footer";
import {
  FormProvider as ThumbnailFormProvider,
  useForm,
} from "react-hook-form";
import { ThumbnailFormType } from "./forms/types";
import { thumbnailFormDefaultValues } from "./forms/states";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThumbnailFormSchema } from "./forms/schema";
import { useResponsive } from "./hooks/utils/useResponsive";

function App() {
  const method = useForm<ThumbnailFormType>({
    defaultValues: thumbnailFormDefaultValues,
    resolver: zodResolver(ThumbnailFormSchema),
  });

  return (
    <ThumbnailFormProvider {...method}>
      <Header />
      <Content />
    </ThumbnailFormProvider>
  );
}

export default App;

function Content() {
  const { isPc } = useResponsive();

  return (
    <ContentWrap>
      <Preview />

      {isPc ? <SideBar /> : <Footer />}
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
