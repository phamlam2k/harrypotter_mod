import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { imageDetails } from "../constants/const";

const AuthLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageDetails.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Left side - Auth form */}
      <Box
        sx={{
          width: { xs: "100%", lg: "22%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          backgroundColor: "white",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            padding: 4,
            boxShadow: 0,
            borderRadius: 5,
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <img
                src="https://burrow.hogwartsishere.com/static//fawkes/logo_flat_black.png"
                alt="Hogwarts is Here"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  marginBottom: "16px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Button
                component={Link}
                href="/auth/login"
                variant="text"
                sx={{
                  fontFamily: "sans-serif",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderBottom: "2px solid purple",
                  marginRight: 2,
                }}
              >
                Log In
              </Button>
              <Button
                component={Link}
                href="/auth/signup"
                variant="text"
                sx={{ fontFamily: "sans-serif", textTransform: "none" }}
              >
                Sign Up
              </Button>
            </Box>
            <Divider sx={{ mb: 2 }} />

            {/*  Auth form Content */}
            <Outlet />

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: "center", fontFamily: "sans-serif" }}
            >
              This website was made for fans, by fans, and is not endorsed or
              supported directly or indirectly with Warner Bros. Entertainment,
              JK Rowling, Pottermore, or any of the official Harry Potter
              trademark/right holders.
            </Typography>
          </CardContent>
          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", fontFamily: "sans-serif" }}
          >
            © {new Date().getFullYear()} Hogwarts. All rights reserved.
          </Typography>
        </Card>
      </Box>

      {!isMobile && (
        /* Right side - Background image slider */
        <Box
          sx={{
            width: { xs: "100%", lg: "78%" },
            backgroundImage: `url(${imageDetails[currentImageIndex].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            padding: 4,
            transition: "2s",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 2, fontFamily: "sans-serif", transition: "2s" }}
          >
            {imageDetails[currentImageIndex].title}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 2,
              fontFamily: "sans-serif",
              fontSize: 20,
              maxWidth: 900,
              transition: "2s",
            }}
          >
            {imageDetails[currentImageIndex].description}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 1,
              fontFamily: "sans-serif",
              fontSize: 20,
              transition: "2s",
            }}
          >
            - Illustrated by{" "}
            <Box component="span" sx={{ color: "red" }}>
              {imageDetails[currentImageIndex].artist}
            </Box>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AuthLayout;