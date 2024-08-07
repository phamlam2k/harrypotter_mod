import React, { forwardRef } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import { books } from "src/@core/models/book.model";
import HTMLFlipBook from "react-pageflip"; // Default import for HTMLFlipBook

const HTMLFlipBookCustom = HTMLFlipBook as any;

// Define the Page component using React.forwardRef
const Page = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={{ width: "100%", height: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightblue",
        }}
      >
        <p>Page number: {props.number}</p>
      </Box>
    </div>
  );
});

const PageFlipComponent = () => {
  const { id, chapterId } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const chapter = book?.chapters.find((ch) => ch.id === chapterId);

  if (!book || !chapter) {
    return <Typography variant="h4">Chapter not found</Typography>;
  }

  if (!chapter.pages || chapter.pages.length === 0) {
    return (
      <Typography variant="h6">No pages available for this chapter</Typography>
    );
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
        <HTMLFlipBookCustom width={300} height={500} isClickFlip={true}>
          {[1, 2, 3, 4, 5].map((page, index) => (
            <Page key={index} number={index + 1} />
          ))}
        </HTMLFlipBookCustom>
      </Box>
    </Container>
  );
};

export default PageFlipComponent;
