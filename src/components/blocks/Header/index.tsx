import styled from "@emotion/styled";
import { gray, white } from "@/styles/Color";
import Button from "@/components/atoms/Button";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import LogoImg from "@/assets/Logo.png";

const CLONED_THUMBNAIL_STYLE = {
  transform: "scale(1)",
  position: "absolute",
  zIndex: "-999",
  top: "0",
  left: "0",
};

export default function Header() {
  /** 썸네일 다운로드 */
  const handleDownloadThumbnail = () => {
    const thumbnail = document.querySelector("#thumbnail");

    if (!thumbnail) {
      return;
    }

    // preview는 scale을 조절하여 보여줌으로, 클론하여 scale을 1로 맞춰준뒤 다운로드
    const clonedThumbnail = thumbnail?.cloneNode(true) as HTMLElement;
    Object.assign(clonedThumbnail.style, CLONED_THUMBNAIL_STYLE);

    document.body.appendChild(clonedThumbnail);

    domtoimage
      .toBlob(clonedThumbnail)
      .then((blob) => {
        saveAs(blob, "Thumbnail.png");
      })
      .finally(() => {
        document.body.removeChild(clonedThumbnail);
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
