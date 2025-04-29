"use client";

import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        bgcolor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        "&:hover": {
          bgcolor: "#f0f0f0",
        },
        zIndex: 1000,
      }}
      size="large"
    >
      <ArrowCircleUpIcon sx={{ fontSize: 50 }} />
    </IconButton>
  );
}
