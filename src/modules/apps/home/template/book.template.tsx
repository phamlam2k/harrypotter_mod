import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  List,
  ListItem,
  Avatar,
  Paper,
  Divider,
  Card,
  CardContent,
  ListItemText,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { books } from "src/@core/models/book.model";
import { useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Chapter } from "src/types/chapter.type";
import { Book } from "src/types/book.type";

const BookTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book | null>(null);
  const [otherBooks, setOtherBooks] = useState<Book[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);


  useEffect(() => {
    const selectedBook = books.find((b) => b.id === Number(id)) || null;
    setBook(selectedBook);

    const filteredBooks = books.filter((b) => b.id !== Number(id));
    setOtherBooks(filteredBooks.slice(0, 5));
  }, [id]);

  useEffect(() => {
    if (book) {
      setChapters(book.chapters);
    }
  }, [book]);

  useEffect(() => {
    console.log("Chapters: ", chapters);
  }, [chapters]);

  if (!book) {
    return <Typography variant="h4">Book not found</Typography>;
  }

  const handleChapterClick = (chapterId: string) => {
    navigate(`/books/${id}/chapters/${chapterId}`);
  };

  return (
    <Container sx={{ minHeight: "100vh", display: "flex", flexDirection: "row", p: 4, gap: 4 }}>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
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
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
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
            </Box>
          </Box>
          <Divider />
          <Box mt={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
              Description:
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              {book.description}
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
            Chapters:
          </Typography>
          <List>
            {chapters.map((chapter, index) => (
              <Card
                key={chapter.id}
                elevation={1}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
                  cursor: "pointer",
                }}
                onClick={() => handleChapterClick(chapter.id)}
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <ImportContactsIcon sx={{ mr: 2, color: "primary.main" }} />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ mr: 2 }}>
                        Chapter {index + 1}: {chapter.label}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {chapter.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </List>
        </Paper>
      </Box>

      <Box
        sx={{
          width: 300,
          flexShrink: 0,
          backgroundColor: "white",
          borderRadius: 2,
          p: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
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
