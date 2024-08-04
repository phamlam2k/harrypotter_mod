import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import { books } from "src/@core/models/book.model";
import { StPageFlip } from 'st-pageflip';

const PageFlip = () => {
  const { id, chapterId } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const chapter = book?.chapters.find((ch) => ch.id === chapterId);

  const pageFlipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pageFlipRef.current && chapter) {
      const pageFlip = new StPageFlip.PageFlip(pageFlipRef.current, {
        width: 400,
        height: 600,
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 400,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
      });

      pageFlip.loadFromImages(
        (chapter.pages || []).map((page, index) => ({
          src: page.image, // Assuming each page has an associated image
          alt: `Page ${index + 1}`,
        }))
      );

      return () => {
        pageFlip.destroy();
      };
    }
  }, [chapter]);

  if (!book || !chapter) {
    return <Typography variant="h4">Chapter not found</Typography>;
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
        <Box ref={pageFlipRef} sx={{ width: "100%", height: "auto", marginTop: 4 }}></Box>
      </Box>
    </Container>
  );
};

export default PageFlip;
