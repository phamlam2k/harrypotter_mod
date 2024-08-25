import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Paper,
  Rating,
  Stack,
  Grid,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  IconButton,
  CircularProgress,
  Button,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import ExpandMore icon
import { useNavigate, useParams } from "react-router-dom";
import { books } from "src/@core/models/book.model";
import { Book as BookType, Chapter } from "src/types/book.type";
import { CustomPrevArrow, CustomNextArrow } from "../_styled/home.styled";

const BookTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<BookType | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<BookType[]>([]);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showChapters, setShowChapters] = useState(false);

  useEffect(() => {
    const selectedBook = books.find((b) => b.id === Number(id)) || null;
    setBook(selectedBook);
    if (selectedBook) {
      setChapters(selectedBook.chapters);
      setRecommendedBooks(books.filter((b) => b.id !== Number(id)).slice(0, 5));
    } else {
      setChapters([]);
      setRecommendedBooks([]);
    }
  }, [id]);

  if (!book) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
        }}
      >
        <img
          src="/logo.png"
          alt="Harry Potter Logo"
          style={{
            width: "200px",
          }}
        />
        <CircularProgress size={70} color="inherit" />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  const handleBookClick = (bookId: number) => {
    navigate(`/books/${bookId}`);
    window.scrollTo(0, 0);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Book Details and Chapters */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 0, textAlign: "center", borderRadius: 2, width: "90%" }}
          >
            <CardMedia
              component="img"
              alt={book.title}
              image={book.image}
              title={book.title}
              sx={{ borderRadius: 2, mb: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
          </Paper>
        </Grid>

        {/* Book Details */}
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "bold", mb: 1, color: "black" }}
            >
              {book.title}
            </Typography>
            {/* <Typography variant="h5" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
              {book.author}
            </Typography> */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Rating value={5} precision={0.5} readOnly />
              <Typography variant="body1" color="textSecondary">
                {book.rating} ({book.ratingsCount} ratings · {book.reviewsCount} reviews)
              </Typography>
            </Stack>
            <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.6 }}>
              {book.description}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Genres
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "black" }}>
                M M Romance BDSM
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              295 pages, ebook
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              First published January 1, 2009
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              This edition
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              Format: 295 pages, ebook
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              Published: January 1, 2009 by FictionPress.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Language: English
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* About the Author Toggle Section */}
      <Box sx={{ mt: 6 }}>
        <Button
          variant="text"
          onClick={() => setShowAuthor(!showAuthor)}
          endIcon={
            <ExpandMoreIcon
              sx={{
                transform: showAuthor ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          }
          sx={{
            mb: 2,
            justifyContent: "flex-start",
            color: "black",
            fontWeight: "bold",
            fontSize:'20px',
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent", // to prevent background color change on hover
            },
          }}
        >
          About the author
        </Button>
        <Divider sx={{ my: 2 }} />
        <Collapse in={showAuthor}>
          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                alt="Eve Ocotillo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcKdsVUSjkSAw2MeoRu2Q1iXLvHtTY3d7Xafkz-K5ncH9u4Wjq0Jby1KP5Xpy60f6aEc&usqp=CAU"
                sx={{ width: 80, height: 80, mr: 2, boxShadow: "0 4px 10px rgba(0,0,0,0.15)" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Eve Ocotillo
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  9 books · 223 followers
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              In the mundane world, Eve Ocotillo plays a scientist. She escapes from the grind by conjuring tough and conflicted men and then throwing them at each other in romantic and not-so-romantic situations. Her stories range from alternate history to contemporary to science fiction and are influenced by her interest in diverse social issues, her fascination with the natural environment, and her fundamentalist upbringing. She doesn’t much like TV, but her Xbox and a new RPG can suck her in for weeks at a time.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8 }}>
              That's my book cover blurb. :) I write to feed my id and to learn a little more about myself, my values, and belief systems. I believe that my strengths as a writer are in world-building and in strong, complex characterization. Nearly all of my writing explores social issues, and whereas nobody would argue that I'm anything but left, I also have empathy for more conservative value systems and work hard to keep my stories honest and above all, non-preachy.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8 }}>
              I consider myself something of a naturalist and think that comes through in my writing; I love examining and describing the natural world. I have a particular affinity for the desert.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8 }}>
              Find more of my writing at ocotillo-dawn.livejournal.com. A full description of all available stories is available at http://ocotillo-dawn.livejournal.com/... You will need an account (and for me to 'friend' you) in order to read most of them -- this is about ensuring adulthood, not exclusivity.
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              -Oco
            </Typography>
          </Box>
        </Collapse>
      </Box>

      {/* Chapters Toggle Section */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="text"
          onClick={() => setShowChapters(!showChapters)}
          endIcon={
            <ExpandMoreIcon
              sx={{
                transform: showChapters ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          }
          sx={{
            mb: 0,
            justifyContent: "flex-start",
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            fontSize:'20px',
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent", // to prevent background color change on hover
            },
          }}
        >
          Chapters
        </Button>
        <Collapse in={showChapters}>
          <Box sx={{ mt: 3 }}>
            <Divider sx={{ mb: 3 }} />
            <List>
              {chapters.map((chapter, index) => (
                <ListItem
                  button
                  key={chapter.id}
                  onClick={() => navigate(`/books/${id}/chapters/${chapter.id}`)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                    },
                    mb: 1,
                    p: 2,
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease-in-out, transform 0.2s",
                  }}
                >
                  <ListItemText
                    primary={`Chapter ${index + 1}: ${chapter.label}`}
                    secondary={`${chapter.description}`}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Collapse>
      </Box>

      {/* Readers Also Enjoyed Section as a Slider */}
      <Box sx={{ mt: 3 }}>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "  " }}>
          Readers <em>also</em> enjoyed
        </Typography>
        <Box sx={{ px: 3 }}>
          <Slider {...sliderSettings}>
            {recommendedBooks.map((recommendedBook) => (
              <div key={recommendedBook.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    width: "95%",
                    margin: "0 auto",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                  onClick={() => handleBookClick(recommendedBook.id)}
                >
                  <CardMedia
                    component="img"
                    alt={recommendedBook.title}
                    height="300"
                    image={recommendedBook.image}
                    title={recommendedBook.title}
                    sx={{ borderRadius: 1 }}
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mb: 1, color: "black" }}
                    >
                      {recommendedBook.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                      {recommendedBook.author}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating value={5} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" color="textSecondary">
                        {recommendedBook.rating} · {recommendedBook.reviewsCount}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default BookTemplate;