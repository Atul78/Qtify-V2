import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

export default function Section({
  title,
  apiEndpoint,
  tabAPIEndpoint,
  isCarousel = false,
}) {
  console.log({ title, apiEndpoint, tabAPIEndpoint, isCarousel });

  const [albums, setAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]); // original data
  const [expanded, setExpanded] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Fetch tabs if endpoint exists
  useEffect(() => {
    if (tabAPIEndpoint) {
      axios
        .get(tabAPIEndpoint)
        .then((res) => setTabs(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [tabAPIEndpoint]);

  // Fetch albums
  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        setAlbums(res.data);
        setAllAlbums(res.data); // save original data for filtering
      })
      .catch((err) => console.error(err));
  }, [apiEndpoint]);

  // Handle tab click
  const handleTabs = (songTab) => {
    if (!songTab || songTab.key === "all") {
      setAlbums(allAlbums);
      setActiveTab("all");
    } else {
      const filteredData = allAlbums.filter(
        (album) => album.genre.key === songTab.key
      );
      setAlbums(filteredData);
      setActiveTab(songTab.key);
    }
  };

  // Albums to display based on show all / collapse
  const displayedAlbums = expanded ? albums : albums.slice(0, 8);

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#000", color: "#fff" }}>
      {/* Section Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: tabAPIEndpoint ? "column" : "row",
          justifyContent: "space-between",
          mb: 2,
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>

        {/* Tabs */}
        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {/* ✅ Add All tab manually */}
          {tabAPIEndpoint && (
            <Typography
              key="all"
              variant="body1"
              sx={{
                color: activeTab === "all" ? "green" : "gray",
                fontWeight: "bold",
                cursor: "pointer",
                borderBottom: activeTab === "all" ? "2px solid green" : "none",
                "&:hover": { color: "green" },
                pb: "2px",
              }}
              onClick={() => handleTabs({ key: "all" })}
            >
              All
            </Typography>
          )}

          {tabs.map((tab) => (
            <Typography
              key={tab.key}
              variant="body1"
              sx={{
                color: activeTab === tab.key ? "green" : "gray",
                fontWeight: "bold",
                cursor: "pointer",
                borderBottom:
                  activeTab === tab.key ? "2px solid green" : "none",
                "&:hover": { color: "green" },
                pb: "2px",
              }}
              onClick={() => handleTabs(tab)}
            >
              {tab.label}
            </Typography>
          ))}
        </Box>

        {/* Show All / Collapse */}
        {isCarousel && !tabAPIEndpoint && (
          <Typography
            variant="body1"
            sx={{ color: "green", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Collapse" : "Show All"}
          </Typography>
        )}
      </Box>

      {/* Albums Display */}
      {isCarousel && !expanded ? (
        <Carousel
          items={albums}
          renderItem={(album) => {
            console.log({ album });
            return (
              <AlbumCard
                key={album.id}
                image={album.image}
                name={album.title}
                follows={album.follows}
                likes={album.likes}
              />
            );
          }}
        />
      ) : (
        <Grid container spacing={2}>
          {displayedAlbums.map((album) => (
            <Grid key={album.id} item xs={6} sm={4} md={2}>
              <AlbumCard
                image={album.image}
                name={album.title}
                title={album.title}
                follows={album.follows}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
