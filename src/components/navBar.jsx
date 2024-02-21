import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const pages = [
    t("Flight"),
    t("Hotel"),
    t("Transfers"),
    t("car"),
    t("Active"),
    t("holiday"),
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background:'#000' , fontWeight:'bold'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className='logo_lg' src={require('../assets/IMG-20240219-WA0031.jpg')} alt="logo" style={{height:'50px'}} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } ,justifyContent:'end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
              className='navBar_Link'
              to={'https://expedia.com/affiliate/rvx7Mp8'}
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  margin:' 0 15px',
                  display: "block",
                  textDecoration:'none',
                }}
                target="blank"
              >
                {page}
              </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              padding: "2px 15px",
            }}
          >
            {pages.map((page) => (
              <NavLink
              className='navBar_Link'
              to={'https://expedia.com/affiliate/rvx7Mp8'}
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  margin:' 0 15px',
                  color: "white",
                  display: "block",
                  textDecoration:'none'
                }}
                target="blank"
              >
                {page}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
