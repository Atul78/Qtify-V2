import React from "react";
import { Box, Typography } from "@mui/material";
import headphone from "../../../assets/headphone.png"
export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem 8rem",
      }}
    >
      {/* Left Side Text */}
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
        >
          100 Thousand Songs, ad-free
        </Typography>
        <Typography variant="h6">
          Over thousands podcast episodes
        </Typography>
      </Box>

      {/* Right Side Image */}
      <Box>
        <img
          src={headphone}
          alt="Headphones"
          style={{ width: "200px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
