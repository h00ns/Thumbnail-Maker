import { SelectIdxAtom } from "@/store";
import { blue, white } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import { Shadow } from "@/styles/Shadow";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import Typography from "../Typography";
import Divider from "../Divider";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  idx: 1 | 2 | 3 | 4;
  title: string;
  children?: React.ReactNode;
}

export default function PartCard({
  idx,
  title,
  children,
  ...divHtmlAttributes
}: Props) {
  const [selectIdx, setSelectIdx] = useAtom(SelectIdxAtom);

  console.log(selectIdx);

  const isSelect = selectIdx === idx;
  return (
    <Component {...divHtmlAttributes} onClick={() => setSelectIdx(idx)}>
      <Header>
        <NumberBox>{idx}</NumberBox>
        <Title variant="sh3">{title}</Title>
      </Header>

      {isSelect && (
        <>
          <Divider />

          <div>{children}</div>
        </>
      )}
    </Component>
  );
}

const Component = styled.div`
  padding: 8px 12px;
  background: ${white};
  box-shadow: ${Shadow.MEDIUM};
  border-radius: ${Radius.MEDIUM};
  cursor: pointer;

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

const Title = styled(Typography)`
  flex: 1;
`;
