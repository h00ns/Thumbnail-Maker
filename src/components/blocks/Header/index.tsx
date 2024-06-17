import styled from "@emotion/styled";
import { gray, white } from "@/styles/Color";
import Button from "@/components/atoms/Button";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import LogoImg from "@/assets/Logo.png";

export default function Header() {
  /** 썸네일 다운로드 */
  const handleDownloadThumbnail = () => {
    const thumbnail = document.querySelector("#thumbnail");

    if (!thumbnail) {
      return;
    }

    domtoimage.toBlob(thumbnail).then((blob) => {
      saveAs(blob, "Thumbnail.png");
    });
  };

  return (
    <Wrap>
      <Logo src={LogoImg} alt="logo" />

      <Button text="다운로드" onClick={handleDownloadThumbnail} />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 8px 12px;
  background: ${white};
  border-bottom: 1px solid ${gray.gray3};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;
