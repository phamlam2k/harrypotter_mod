import { useState, MouseEvent } from "react";
import { Chapter } from "src/types/chapter.type";

const useBookController = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<"rewrite" | "readmore" | "">("");
  const [newChapterContent, setNewChapterContent] = useState<string>("");

  const handleOpenMenu = (event: MouseEvent<HTMLElement>, chapter: Chapter) => {
    setSelectedChapter(chapter);
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleOpenDialog = (type: "rewrite" | "readmore") => {
    setDialogType(type);
    setDialogOpen(true);
    setMenuAnchorEl(null);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedChapter(null);
    setNewChapterContent("");
  };

  const handleSave = () => {
    if (selectedChapter) {
      console.log(
        `New content for ${selectedChapter.label}:`,
        newChapterContent
      );
    }
    handleCloseDialog();
  };

  return {
    menuAnchorEl,
    selectedChapter,
    dialogOpen,
    dialogType,
    newChapterContent,

    setNewChapterContent,

    handleSave,
    handleOpenMenu,
    handleCloseMenu,
    handleOpenDialog,
    handleCloseDialog,
  };
};

export default useBookController;
