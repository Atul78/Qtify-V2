import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";

export default function AlbumCard({ image, name, follows }) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        backgroundColor: "#121212",
        color: "#fff",
        fontFamily: "Poppins, sans-serif", // 👈 consistent font
      }}
    >
      {/* Album Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
        {/* Chip for follows */}
        <Chip
          label={`${follows} Follows`}
          size="small"
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            backgroundColor: "#34C94B", // 👈 green theme
            color: "#fff",
            fontWeight: 500,
            fontSize: "0.7rem",
            borderRadius: "6px",
            height: "24px",
          }}
        />
      </Box>

      {/* Bottom Section */}
      <CardContent sx={{ textAlign: "center", p: "0.5rem" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis", // 👈 text overflow handle
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
