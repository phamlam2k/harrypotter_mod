import React, { forwardRef } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import { books } from "src/@core/models/book.model";
import HTMLFlipBook from "react-pageflip"; // Default import for HTMLFlipBook

// Define the Page component using React.forwardRef
const Page = forwardRef<HTMLDivElement, { number: number; image: string }>((props, ref) => {
  return (
    <div className="demoPage" ref={ref} style={{ width: '100%', height: '100%' }}>
      <img src={props.image} alt={`Page ${props.number}`} style={{ width: '100%', height: '100%' }} />
      <p>Page number: {props.number}</p>
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
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1350}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          className=""
          style={{}}
        >
          {chapter.pages.map((page, index) => (
            <Page key={index} number={index + 1} image={page.image} />
          ))}
        </HTMLFlipBook>
      </Box>
    </Container>
  );
};

export default PageFlipComponent;
