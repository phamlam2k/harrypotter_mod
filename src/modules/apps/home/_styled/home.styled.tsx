import { styled, Box, Paper } from "@mui/material";

export const HeaderImage = styled("div")({
  height: "450px",
  backgroundImage:
    "url(https://wallpapers.com/images/hd/the-hogwarts-library-1561-x-900-wallpaper-vpmj6nzqdwb8jm5p.jpg)", // Replace with your actual image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
});

export const SearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginTop: theme.spacing(4),
}));

export const InfoSection = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));

export const InfoHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#7b1fa2",
  padding: theme.spacing(1),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
}));
