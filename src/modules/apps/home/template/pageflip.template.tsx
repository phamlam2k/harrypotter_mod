import React, { forwardRef, useRef } from "react";
import { Typography, Box, Container, Button, Divider, Avatar } from "@mui/material";
import HTMLFlipBook from "react-pageflip";
import { useParams } from "react-router-dom";
import { books } from "src/@core/models/book.model";
import { Book, Chapter } from "src/types/book.type";

const HTMLFlipBookCustom = HTMLFlipBook as any;

// Mock data for a Harry Potter chapter
const chapterData = {
  id: '1',
  title: "Harry Potter and the Philosopher's Stone",
  author: "Eve Ocotillo",
  chapter: {
    id: '1',
    label: "The Boy Who Lived",
    pages: [
      {
        number: 1,
        content: "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVFenk24_5gCiY_nugev2U-JErtElD19uCkJAqg-ZHd_Wd0s-ukYbVVllZuxfqVHREtk&usqp=CAU"
      },
      {
        number: 2,
        content: "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.They were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just didThey were the last people you'd expect to be involved in anything strange or mysterious, because they just did",
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/16/18/enhanced/b537d5bc0e18/enhanced-158-1592331594-18.jpg?output-format=jpg&output-quality=auto"
      },
      {
        number: 3,
        content: "Harry Potter had been living with the Dursleys for almost ten years, ten miserable years, as long as he could remember.",
        img: "https://via.placeholder.com/600x400?text=Page+3+Image"
      }
    ]
  },
  coverImg: "https://m.media-amazon.com/images/I/811t1pfIZXL._AC_UF894,1000_QL80_.jpg" // Book cover image URL
};

// Define the CoverPage component using React.forwardRef
const CoverPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "50%",
        height: "100%",
        backgroundColor: "#fbf7ef",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 0px",
        margin: "10px",
        border: "1px solid #dcd2c4",
        position: "relative",
      }}
    >
      <img
        src={chapterData.coverImg}
        alt="Book Cover"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
});

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
        margin: "10px",
        border: "1px solid #dcd2c4",
        backgroundImage: "linear-gradient(to bottom, #fff, #fbf7ef)",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#4a3b2f",
            fontFamily: "Merriweather, serif",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            mt: 1,
          }}
        >
          PAGE {props.number}
        </Typography>
        <img
          src={props.img}
          alt={`Page ${props.number} Content`}
          style={{
            width: "70%",
            height: "auto",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          lineHeight: 1.8,
          fontFamily: "Merriweather, serif",
          color: "#4a3b2f",
          paddingLeft: "50px",
          paddingRight: "50px",
          fontSize: '15px',
        }}
      >
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


const { id, chapterId } = useParams<{ id: string; chapterId: string }>();

// Find the selected book based on the book ID from the URL parameters
const selectedBook: Book | null = books.find((b) => b.id === Number(id)) || null;

// Get chapters from the selected book if it exists
const chapters = selectedBook ? selectedBook.chapters : null;

// Find the selected chapter based on the chapter ID from the URL parameters
const selectedChapter: Chapter | null = chapters ? chapters.find((ch) => ch.id === chapterId) || null : null;

console.log(selectedChapter)
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
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4, mb: 4, px: 0 }}>
      {/* Book Title */}
      {selectedBook ? (
        <>
          <Typography variant="h3" gutterBottom sx={{ color: "black", fontWeight: 'bold', fontSize: '34px' }}>
            {selectedBook.title}
          </Typography>

          {/* Chapter Information */}
          <Typography variant="h5" gutterBottom sx={{ color: "#8b5e3c" }}>
            Chapter {selectedChapter?.id}: {selectedChapter?.label}
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
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: "black", letterSpacing: "0.8px" }}>
                {chapterData.author}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "gray" }}>
                9 books · 223 followers
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Typography variant="h6" color="error">
          Book not found.
        </Typography>
      )}

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
        {/* First Page - Book Cover */}
        <CoverPage />

        {/* Subsequent Pages */}
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
          [{bookRef.current?.pageFlip().getCurrentPageIndex() + 1} of {chapterData.chapter.pages.length + 1}]
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
