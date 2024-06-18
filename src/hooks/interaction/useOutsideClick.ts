import { useEffect } from "react";

/** 외부클릭시 콜백 실행 (esc입력 포함) */
export const useOutsideClick = (
  ref: HTMLElement | null,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref && !ref.contains(e.target as Node)) {
        callback();
      }
    };

    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [ref, callback]);
};
