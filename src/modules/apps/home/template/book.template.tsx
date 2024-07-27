import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
  Container,
  CardMedia,
  ListItemText,
  Avatar,
  List,
  ListItem,
  Icon,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactFlow, { MiniMap, Controls, Node, Edge } from "react-flow-renderer";

import { books } from "src/@core/models/book.model";

import "react-flow-renderer/dist/style.css";
import useBookController from "../controllers/book.controller";
import { useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Chapter } from "src/types/chapter.type";
import { Book } from "src/types/book.type";
import { Edit, Visibility } from "@mui/icons-material";

const BookTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [book, setBook] = useState<Book | null>(null);
  const [otherBooks, setOtherBooks] = useState<Book[]>([]);

  useEffect(() => {
    const selectedBook = books.find((b) => b.id === Number(id)) || null;
    setBook(selectedBook);
    
    const filteredBooks = books.filter((b) => b.id !== Number(id));
    setOtherBooks(filteredBooks.slice(0, 5));
  }, [id]);

  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    if (book) {
      setChapters(book.chapters);
    }
  }, [book]);

  const addChapter = (parentChapter: Chapter, newChapter: Chapter) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      const parentIndex = updatedChapters.findIndex((ch) => ch.id === parentChapter.id);
      if (parentIndex !== -1) {
        const parentPosition = updatedChapters[parentIndex].position || { x: 100, y: 0 };
        const siblingCount = updatedChapters[parentIndex].children?.length || 0;
        const newPosition = {
          x: parentPosition.x + 200,
          y: parentPosition.y + (siblingCount * 100),
        };

        updatedChapters[parentIndex] = {
          ...updatedChapters[parentIndex],
          children: [...(updatedChapters[parentIndex].children || []), { ...newChapter, position: newPosition }],
        };
        updatedChapters.push({ ...newChapter, position: newPosition });
      }
      return updatedChapters;
    });
  };

  const deleteChapter = (chapterId: string) => {
    const removeChapterAndChildren = (chapters: Chapter[], id: string): Chapter[] => {
      return chapters.filter((chapter) => {
        if (chapter.id === id) return false;
        if (chapter.children) {
          chapter.children = removeChapterAndChildren(chapter.children, id);
        }
        return true;
      });
    };
    setChapters((prevChapters) => removeChapterAndChildren(prevChapters, chapterId));
  };

  const {
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
    handleDelete,
  } = useBookController(addChapter, deleteChapter);

  if (!book) {
    return <Typography variant="h4">Book not found</Typography>;
  }

  const nodes: Node[] = chapters.map((chapter) => ({
    id: chapter.id,
    data: {
      label: (
        <>
          <span>{chapter.label}</span>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(event) => handleOpenMenu(event, chapter)}
          >
            <MoreVertIcon />
          </IconButton>
        </>
      ),
    },
    position: chapter.position || { x: 100, y: chapters.findIndex((c) => c.id === chapter.id) * 100 },
  }));

  const edges: Edge[] = chapters
    .flatMap((chapter) => {
      if (!chapter.children) return [];
      return chapter.children.map((child) => ({
        id: `e${chapter.id}-${child.id}`,
        source: chapter.id,
        target: child.id,
        type: "smoothstep",
      }));
    });

  return (
    <Container sx={{ height: "100vh", display: "flex", flexDirection: "row", p: 0 }}>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          mt={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "lightblue",
          }}
        >
          <CardMedia
            component="img"
            alt={book.title}
            image={book.image}
            title={book.title}
            sx={{
              width: 200,
              height: "auto",
              mr: 3,
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              {book.title}
            </Typography>
            <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
              Author: {book.author}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Genre: {book.genre}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Total Chapters: {book.totalChapters}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Age: 8 & Up
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
              {book.description}
            </Typography>
          </Box>
        </Box>
       <Dialog
  open={dialogOpen}
  onClose={handleCloseDialog}
  maxWidth="md"
  fullWidth
  sx={{
    "& .MuiPaper-root": {
      borderRadius: 4, // Adjusted for a more rounded look
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for elegance
    },
  }}
>
  <DialogTitle
    sx={{
      background: "linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)",
      color: "#333",
      textAlign: "center",
      padding: "16px 24px",
      borderRadius: "16px 16px 0 0",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Merriweather', serif", // Book-like font
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Icon component={dialogType === "rewrite" ? Edit : Visibility} />
      {dialogType === "rewrite" ? `Rewrite ${selectedChapter?.label}` : `Read More ${selectedChapter?.label}`}
    </Box>
  </DialogTitle>
  <DialogContent
    sx={{
      p: 4,
      backgroundColor: "#fafafa",
      maxHeight: "70vh",
      overflow: "auto",
      fontFamily: "'Merriweather', serif", // Consistent font
      fontSize: "1rem",
      lineHeight: 1.6,
    }}
  >
    {dialogType === "rewrite" ? (
      <TextField
        autoFocus
        margin="dense"
        label="New Chapter Content"
        type="text"
        fullWidth
        multiline
        rows={10}
        value={newChapterContent}
        onChange={(e) => setNewChapterContent(e.target.value)}
        sx={{
          "& .MuiInputBase-input": { backgroundColor: "white", borderRadius: 1, padding: 2 },
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for input
        }}
      />
    ) : (
      <Box
        sx={{
          whiteSpace: "pre-line",
          color: "#333",
          fontFamily: "'Merriweather', serif",
          fontSize: "1rem",
          lineHeight: 1.6,
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {selectedChapter?.content}
      </Box>
    )}
  </DialogContent>
  <DialogActions sx={{ justifyContent: "center", p: 2, backgroundColor: "#fafafa" }}>
    <Button onClick={handleCloseDialog} color="secondary" variant="contained" sx={{ mr: 2 }}>
      Cancel
    </Button>
    {dialogType === "rewrite" && (
      <Button onClick={handleSave} color="primary" variant="contained">
        Save
      </Button>
    )}
  </DialogActions>
</Dialog>

        <Menu
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleOpenDialog("readmore")}>Read More</MenuItem>
          <MenuItem onClick={() => handleOpenDialog("rewrite")}>Rewrite</MenuItem>
          {selectedChapter && selectedChapter.parent && (
            <MenuItem onClick={() => handleDelete(String(selectedChapter?.id))}>Delete</MenuItem>
          )}
        </Menu>

        <Box sx={{ flexGrow: 2, width: "100%", height: "100%", overflow: "auto" }}>
          <ReactFlow nodes={nodes} edges={edges} fitView style={{ width: "100%", height: "100%" }}>
            <MiniMap />
            <Controls />
          </ReactFlow>
        </Box>
      </Box>

      {/* Right-hand side section for other books in the series */}
      <Box
        sx={{
          width: 300,
          ml: 4,
          mt: 4,
          flexShrink: 0,
          backgroundColor: "white",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
          Other books in Series:
        </Typography>
        <List>
          {otherBooks.map((book) => (
            <ListItem
              key={book.id}
              alignItems="flex-start"
              sx={{ p: 1, cursor: "pointer", "&:hover": { backgroundColor: "#f1f1f1" } }}
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <Avatar
                variant="square"
                src={book.image}
                alt={book.title}
                sx={{ width: 70, height: 100, mr: 2, borderRadius: 1 }}
              />
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
                    {book.title}
                  </Typography>
                }
                secondary={
                  <Box display="flex" alignItems="center">
                    <StarIcon sx={{ color: "gold", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      9.5
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default BookTemplate;
