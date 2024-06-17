import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import { SelectIdxType } from "@/store/types";
import { blue, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";

interface Props {
  idx: SelectIdxType;
  title: string;
  children?: React.ReactNode;
}

export default function FormSection({ idx, title, children }: Props) {
  return (
    <Component>
      <Header>
        <NumberBox>{idx}</NumberBox>
        <Typography variant="sh3">{title}</Typography>
      </Header>

      <Divider />

      {children}
    </Component>
  );
}

const Component = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const NumberBox = styled.div`
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  border-radius: ${Radius.MEDIUM};
  background: ${blue.blue3};
  color: ${white};

  display: flex;
  justify-content: center;
  align-items: center;
`;