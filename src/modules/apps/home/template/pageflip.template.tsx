import React, { forwardRef, useRef } from "react";
import { Typography, Box, Container, Button, Divider, Avatar } from "@mui/material";
import HTMLFlipBook from "react-pageflip";

// Import the logo image (use the correct path or URL)
const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg";  // Adjust this path if needed

const HTMLFlipBookCustom = HTMLFlipBook as any;

// Mock data for a Harry Potter chapter
const chapterData = {
  id: '1',
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  chapter: {
    id: '1',
    label: "The Boy Who Lived",
    pages: [
      {
        number: 1,
        content: "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        img: "https://via.placeholder.com/600x400?text=Page+1+Image"
      },
      {
        number: 2,
        content: "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.",
        img: "https://via.placeholder.com/600x400?text=Page+2+Image"
      },
      {
        number: 3,
        content: "Harry Potter had been living with the Dursleys for almost ten years, ten miserable years, as long as he could remember.",
        img: "https://via.placeholder.com/600x400?text=Page+3+Image"
      }
    ]
  }
};

// Define the Page component using React.forwardRef
const Page = forwardRef<HTMLDivElement, { number: number; content: string; img: string }>((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fbf7ef",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "30px 20px",
        margin: "10px",
        border: "1px solid #dcd2c4",
        backgroundImage: "linear-gradient(to bottom, #fff, #fbf7ef)",
        position: "relative",  // Position relative to position the logo absolutely
      }}
    >
      {/* Logo Image */}
      <img
        src={logoUrl}
        alt="Harry Potter Logo"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "120px",  // Adjust the size as needed
          height: "auto",
          opacity: 0.5  // Optional: Adjust opacity if you want the logo to be semi-transparent
        }}
      />

      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#4a3b2f",
          fontFamily: "Merriweather, serif",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
        }}
      >
        PAGE {props.number}
      </Typography>
      <img
        src={props.img}
        alt={`Page ${props.number} Content`}
        style={{
          width: "90%",
          height: "auto",
          marginBottom: "15px",
          borderRadius: "6px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.8, fontFamily: "Merriweather, serif", color: "#4a3b2f" }}>
        {props.content}
      </Typography>
      <Box
        sx={{
          marginTop: "auto",
          width: "100%",
          textAlign: "right",
          paddingRight: "10px",
          paddingTop: "20px",
          borderTop: "1px solid #dcd2c4",
        }}
      >
        <Typography variant="caption" sx={{ color: "#8c7a64" }}>
          Page {props.number}
        </Typography>
      </Box>
    </div>
  );
});

const PageFlipComponent = () => {
  const bookRef = useRef<typeof HTMLFlipBookCustom | null>(null);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const rewriteChapter = () => {
    alert("Rewrite chapter functionality triggered!");
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4, mb: 4 }}>
      {/* Book Title */}
      <Typography variant="h3" gutterBottom sx={{ fontFamily: "Merriweather, serif", color: "black", letterSpacing: "1px", fontWeight: 'bold', fontSize: '3rem' }}>
        {chapterData.title}
      </Typography>

      {/* Chapter Information */}
      <Typography variant="h5" gutterBottom sx={{ fontFamily: "Merriweather, serif", color: "#8b5e3c", letterSpacing: "0.5px" }}>
        Chapter {chapterData.chapter.id}: {chapterData.chapter.label}
      </Typography>

      {/* Author Avatar and Book Info */}
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'flex-start' }}>
        <Avatar
          alt={chapterData.author}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcKdsVUSjkSAw2MeoRu2Q1iXLvHtTY3d7Xafkz-K5ncH9u4Wjq0Jby1KP5Xpy60f6aEc&usqp=CAU'
          sx={{
            width: 80,
            height: 80,
            mr: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid #f2e9e1",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "Merriweather, serif", color: "black", letterSpacing: "0.8px" }}>
            {chapterData.author}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            9 books · 223 followers
          </Typography>
        </Box>
      </Box>

      {/* Rewrite Chapter Button */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="contained"
          onClick={rewriteChapter}
          sx={{
            mt: "10px",
            backgroundColor: "#6a4f4b",
            color: "#fff",
            height: "45px",
            fontWeight: "bold",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            padding: "8px 25px",
            marginBottom: "30px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#5a3e36",
            },
          }}
        >
          Rewrite Chapter
        </Button>
      </Box>

      {/* Flipbook Component */}
      <HTMLFlipBookCustom
        ref={bookRef}
        width={1200}
        height={2000}
        size="stretch"
        minWidth={500}
        maxWidth={1400}
        minHeight={800}
        maxHeight={2000}
        drawShadow={true}
        flippingTime={1500}
        useMouseEvents={true}
        swipeDistance={50}
        mobileScrollSupport={true}
        showCover={true}
        autoSize={true}
        maxShadowOpacity={0.4}
        style={{
          border: "1px solid #b3a398",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
          marginBottom: "40px",
          backgroundColor: "#f2e9e1",
        }}
      >
        {chapterData.chapter.pages.map((page) => (
          <Page key={page.number} number={page.number} content={page.content} img={page.img} />
        ))}
      </HTMLFlipBookCustom>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          onClick={prevPage}
          sx={{
            mr: 2,
            backgroundColor: "#5a3e36",
            "&:hover": { backgroundColor: "#4b2e27" },
            fontWeight: "bold",
            padding: "10px 20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          Previous page
        </Button>
        <Typography variant="subtitle1" sx={{ alignSelf: "center", mx: 2, fontFamily: "Merriweather, serif", letterSpacing: "0.5px" }}>
          [{bookRef.current?.pageFlip().getCurrentPageIndex() + 1} of {chapterData.chapter.pages.length}]
        </Typography>
        <Button
          variant="contained"
          onClick={nextPage}
          sx={{
            backgroundColor: "#5a3e36",
            "&:hover": { backgroundColor: "#4b2e27" },
            fontWeight: "bold",
            padding: "10px 20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          Next page
        </Button>
      </Box>
      <Divider sx={{ width: "100%", mt: 4 }} />
    </Container>
  );
};

export default PageFlipComponent;
