import React from "react";
import {
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  TextField,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { books } from "src/@core/models/book.model";
import useHomeController from "../controllers/home.controller";
import {
  HeaderImage,
  InfoHeader,
  InfoSection,
  SearchBar,
} from "../_styled/home.styled";

interface IBookProps {
  id: number;
  title: string;
  author: string;
  image: string;
}

const BookCard: React.FC<{ book: IBookProps }> = ({ book }) => (
  <Link href={`/books/${book.id}`} style={{ textDecoration: "none" }}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={book.title}
          height="600"
          image={book.image}
          title={book.title}
        />
        <CardContent>
          <Typography variant="body1">{book.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

const Home = () => {
  const { tabValue, handleTabChange } = useHomeController();

  return (
    <div>
      <HeaderImage>
        <Typography variant="h2">The Hogwarts Library</Typography>
      </HeaderImage>
      <Container>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Textbooks" />
          <Tab label="Most Popular" />
          <Tab label="Recently Updated" />
        </Tabs>
        <SearchBar>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search the Hogwarts Library Story..."
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "8px" }}
          >
            Search
          </Button>
        </SearchBar>
        <InfoSection elevation={3}>
          <InfoHeader>
            <Typography variant="h6">What are the Hogwarts Books?</Typography>
          </InfoHeader>
          <Box p={2}>
            <Typography variant="body1">
              These incredible pieces of literature were handwritten by HiH
              Professors, assistants and honorable students respective of each
              class. These books are actually used for our{" "}
              <a href="#" style={{ color: "#7b1fa2" }}>
                Hogwarts Classes
              </a>
              . We hope you enjoy!
            </Typography>
          </Box>
        </InfoSection>
        <Grid container spacing={3} style={{ marginTop: "16px" }}>
          {books.map(
            (book: IBookProps, index: React.Key | null | undefined) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BookCard book={book} />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
