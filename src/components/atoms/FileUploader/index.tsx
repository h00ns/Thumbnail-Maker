import { gray } from "@/styles/Color";
import { Radius } from "@/styles/Radius";
import styled from "@emotion/styled";
import Typography from "../Typography";
import React, { ChangeEvent, useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  handleFile: (value: string) => void;
}

export default function FileUploader({
  handleFile,
  ...divHtmlAttributes
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const file = files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result;
        handleFile(`url(${result})`);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <Component onClick={handleClick} {...divHtmlAttributes}>
      <Typography color={gray.gray6}>이미지를 업로드해주세요</Typography>

      <input
        style={{ display: "none" }}
        type="file"
        ref={inputRef}
        accept=".jpg, .jpeg, .png"
        multiple={false}
        onChange={handleFileChange}
      />
    </Component>
  );
}

const Component = styled.div`
  padding: 8px 12px;
  border-radius: ${Radius.MEDIUM};
  border: 1px solid ${gray.gray4};
  cursor: pointer;
`;
