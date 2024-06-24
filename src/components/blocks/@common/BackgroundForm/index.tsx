import styled from "@emotion/styled";
import { useAtom } from "jotai";
import Divider from "@/components/atoms/Divider";
import Border from "./Border";
import Image from "./Image";
import Solid from "./Solid";
import Gradation from "./Gradation";
import { SelectBackgroundType, SelectBackgroundTypeAtom } from "@/store";
import { useFormContext } from "react-hook-form";
import { ThumbnailFormType } from "@/forms/types";

export const INITIAL_BACKGROUND = "#ffffff";
const INITIAL_GRADATION = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";

export default function BackgroundForm() {
  const { setValue } = useFormContext<ThumbnailFormType>();

  const [, setSelectBackgroundType] = useAtom(SelectBackgroundTypeAtom);

  /** 배경 타입 변경 */
  const handleBackgroundType = (value: SelectBackgroundType) => {
    setSelectBackgroundType(value);

    if (value === "solid") {
      setValue("background.value", INITIAL_BACKGROUND);
    }
    if (value === "gradation") {
      setValue("background.value", INITIAL_GRADATION);
    }
    if (value === "image") {
      setValue("background.value", INITIAL_BACKGROUND);
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
