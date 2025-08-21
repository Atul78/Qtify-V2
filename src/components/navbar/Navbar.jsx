import { AppBar, Toolbar, InputBase, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Qtify from "../../assets/Qtify.png";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#34C94B",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box display="flex" alignItems="center" gap={1}>
          <img
            src={Qtify}
            alt="logo"
            style={{ width: "67px", height: "34px" }}
          />
        </Box>

        {/* Middle: Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            overflow: "hidden",
            width: "50%",
          }}
        >
          <InputBase
            placeholder="Search a album of your choice"
            sx={{ ml: 2, flex: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              borderLeft: "1px solid #ccc",
            }}
          >
            <SearchIcon sx={{ color: "black" }} />
          </Box>
        </Box>

        {/* Right: Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#121212",
            color: "#34C94B",
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            px: 3,
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
        >
          Give Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
