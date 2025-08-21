import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";

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
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            fontSize: "0.75rem",
          }}
        />
      </Box>

      {/* Bottom Section */}
      <CardContent sx={{ textAlign: "center", padding: "0.5rem" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
