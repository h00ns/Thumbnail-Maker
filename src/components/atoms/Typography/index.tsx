import { black } from "@/styles/Color";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "sh1"
  | "sh2"
  | "sh3"
  | "sh4"
  | "sh5"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "b6";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  variant?: TypographyVariant;
}

const variants: Record<
  TypographyVariant,
  { fontWeight: number; fontSize: string; lineHeight: string }
> = {
  h1: { fontWeight: 700, fontSize: "90px", lineHeight: "108px" },
  h2: { fontWeight: 700, fontSize: "66px", lineHeight: "80px" },
  h3: { fontWeight: 700, fontSize: "52px", lineHeight: "62px" },
  h4: { fontWeight: 700, fontSize: "40px", lineHeight: "48px" },
  h5: { fontWeight: 700, fontSize: "32px", lineHeight: "38px" },
  sh1: { fontWeight: 700, fontSize: "24px", lineHeight: "30px" },
  sh2: { fontWeight: 700, fontSize: "20px", lineHeight: "24px" },
  sh3: { fontWeight: 700, fontSize: "16px", lineHeight: "20px" },
  sh4: { fontWeight: 700, fontSize: "14px", lineHeight: "16px" },
  sh5: { fontWeight: 700, fontSize: "12px", lineHeight: "14px" },
  b1: { fontWeight: 400, fontSize: "20px", lineHeight: "24px" },
  b2: { fontWeight: 400, fontSize: "18px", lineHeight: "22px" },
  b3: { fontWeight: 400, fontSize: "16px", lineHeight: "18px" },
  b4: { fontWeight: 400, fontSize: "14px", lineHeight: "16px" },
  b5: { fontWeight: 400, fontSize: "12px", lineHeight: "14px" },
  b6: { fontWeight: 400, fontSize: "10px", lineHeight: "12px" },
} as const;

export default function Typography({
  children,
  color = black,
  variant = "b4",
  ...divHtmlAttributes
}: Props) {
  return (
    <Component
      {...divHtmlAttributes}
      style={{ color, ...variants[variant], ...divHtmlAttributes.style }}
    >
      {children}
    </Component>
  );
}

const Component = styled.p`
  margin: 0;
  word-break: keep-all;
  white-space: pre-line;
  letter-spacing: -2%;
`;
