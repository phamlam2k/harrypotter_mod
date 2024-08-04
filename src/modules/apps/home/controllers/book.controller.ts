import { useState, MouseEvent } from "react";
import { Chapter } from "src/types/chapter.type";

const useBookController = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>, chapter: Chapter) => {
    setSelectedChapter(chapter);
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return {
    menuAnchorEl,
    selectedChapter,
    handleOpenMenu,
    handleCloseMenu,
  };
};

export default useBookController;
