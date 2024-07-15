import React from 'react';
import { Typography, Button, Tabs, Tab, Box, TextField, Container, Grid, Paper, Card, CardMedia, CardContent, CardActionArea, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import books from './data.book';

const HeaderImage = styled('div')({
  height: '450px',
  backgroundImage: 'url(https://wallpapers.com/images/hd/the-hogwarts-library-1561-x-900-wallpaper-vpmj6nzqdwb8jm5p.jpg)', // Replace with your actual image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
});

const SearchBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginTop: theme.spacing(4),
}));

const InfoSection = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
}));

const InfoHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#7b1fa2',
  padding: theme.spacing(1),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
}));

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <Link href={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
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

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

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
          <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>
            Search
          </Button>
        </SearchBar>
        <InfoSection elevation={3}>
          <InfoHeader>
            <Typography variant="h6">What are the Hogwarts Books?</Typography>
          </InfoHeader>
          <Box p={2}>
            <Typography variant="body1">
              These incredible pieces of literature were handwritten by HiH Professors, assistants and honorable students respective of each class. These books are actually used for our <a href="#" style={{ color: '#7b1fa2' }}>Hogwarts Classes</a>. We hope you enjoy!
            </Typography>
          </Box>
        </InfoSection>
        <Grid container spacing={3} style={{ marginTop: '16px' }}>
          {books.map((book: Book, index: React.Key | null | undefined) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
