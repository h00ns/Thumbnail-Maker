import { BackgroundAtom, BackgroundTypeAtom } from "@/store";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { BackgroundType } from "@/store/types";
import Divider from "@/components/atoms/Divider";
import Border from "./Border";
import Image from "./Image";
import Solid from "./Solid";
import Gradation from "./Gradation";

export const INITIAL_BACKGROUND = "#ffffff";

export default function BackgroundForm() {
  const [, setBackgroundType] = useAtom(BackgroundTypeAtom);
  const [, setBackground] = useAtom(BackgroundAtom);

  /** 배경 타입 변경 */
  const handleBackgroundType = (value: BackgroundType) => {
    setBackgroundType(value);

    if (value === "solid") {
      setBackground(INITIAL_BACKGROUND);
    }
    if (value === "gradation") {
      setBackground("linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)");
    }
    if (value === "image") {
      setBackground(INITIAL_BACKGROUND);
    }
  };

  return (
    <Layout>
      {/* 단일 색상 */}
      <Solid handleBackgroundType={handleBackgroundType} />

      {/* 그라데이션 */}
      <Gradation handleBackgroundType={handleBackgroundType} />

      {/* 이미지 */}
      <Image handleBackgroundType={handleBackgroundType} />

      <Divider />

      {/* 외곽선 */}
      <Border />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
