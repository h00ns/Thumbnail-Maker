import ColorPicker from "@/components/atoms/ColorPicker";
import Toggle from "@/components/atoms/Toggle";
import Typography from "@/components/atoms/Typography";
import { BorderAtom, UseBorderAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

export default function Border() {
  const [border, setBorder] = useAtom(BorderAtom);
  const [useBorder, setUseBorder] = useAtom(UseBorderAtom);

  const handleToggleClick = () => {
    setUseBorder((prev) => !prev);
  };

  return (
    <Layout>
      <Header>
        <Typography variant="sh4">외곽선</Typography>
        <Toggle checkStatus={useBorder} onClick={handleToggleClick} />
      </Header>

      {useBorder && (
        <ColorPicker
          style={{ marginTop: 8 }}
          value={border}
          handleChange={(value) => setBorder(value)}
        />
      )}
    </Layout>
  );
}

const Layout = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
