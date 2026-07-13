import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/api";

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then(setUser).catch(() => setUser(null));
  }, []);

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Make MangaFire Clone clickable */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          MangaFire Clone
        </Typography>

        <Button color="inherit" onClick={() => navigate("/books")}>
          Book Reader
        </Button>

        {user?.role === "ADMIN" && (
          <Button color="inherit" onClick={() => navigate("/admin")}>
            Manage Books
          </Button>
        )}

        <div>
          <IconButton size="large" edge="end" color="inherit" onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {user ? (
              <>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    localStorage.removeItem("token");
                    setUser(null);          // clear user state
                    navigate("/");          // go back to home (public books list)
                  }}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/login");
                }}
              >
                Login
              </MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
