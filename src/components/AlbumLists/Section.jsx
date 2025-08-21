import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, apiEndpoint, isCarousel = false }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, [apiEndpoint]);

  const displayedAlbums = expanded ? albums : albums.slice(0, 6);

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#000", color: "#fff" }}>
      {/* Section Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {isCarousel && (
          <Typography
            variant="body1"
            sx={{ color: "green", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Collapse" : "Show All"}
          </Typography>
        )}
      </Box>

      {isCarousel && !expanded ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              name={album.title}
              follows={album.likes}
            />
          )}
        />
      ) : (
        <Grid container spacing={2}>
          {displayedAlbums.map((album) => (
            <Grid key={album.id} size={{ xs: 6, sm: 4, md: 2 }}>
              <AlbumCard
                image={album.image}
                name={album.title}
                follows={album.likes}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
