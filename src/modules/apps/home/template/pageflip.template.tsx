import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import { books } from "src/@core/models/book.model";
import HTMLFlipBook from "react-pageflip";

const PageFlipComponent = () => {
  const { id, chapterId } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const chapter = book?.chapters.find((ch) => ch.id === chapterId);

  if (!book || !chapter) {
    return <Typography variant="h4">Chapter not found</Typography>;
  }

  if (!chapter.pages || chapter.pages.length === 0) {
    return <Typography variant="h6">No pages available for this chapter</Typography>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Chapter {chapter.id}: {chapter.label}
        </Typography>
        <HTMLFlipBook width={400} height={600}>
          {chapter.pages.map((page, index) => (
            <div key={index} className="page">
              <img src={page.image} alt={`Page ${index + 1}`} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </HTMLFlipBook>
      </Box>
    </Container>
  );
};

export default PageFlipComponent;
