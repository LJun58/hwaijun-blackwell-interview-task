"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RegisterButton from "../Buttons/RegisterButton";
import useUserStore from "@/app/store/user";
import CloseIcon from "@mui/icons-material/Close";
import { LoginModal } from "../Modal/loginModal";
import CountdownTimer from "./CountdownTimer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenProfileMenu = (event) => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleCloseProfileMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogoutClick = () => {
    logout();
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModal(true);
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isMobile, drawerOpen]);

  useEffect(() => {
    if (user) {
      setShowWelcomeMessage(true);
    }
  }, [user]);

  const drawerContent = (
    <Box
      sx={{
        width: "auto",
        minWidth: "200px",
        maxWidth: "90vw",
        padding: "8px 0",
      }}
      role="presentation"
    >
      <List
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={user ? handleLogoutClick : handleLoginClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={user ? "Logout" : "Login"} />
          </ListItemButton>
        </ListItem>

        {!user && (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
                <Box sx={{ px: 2, width: "100%" }}>
                  <RegisterButton fullWidth />
                </Box>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Divider />
      {/*countdown section */}
      <Box sx={{ p: 2, bgcolor: "#f5f5f5" }}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          PROMOTION ENDS IN:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccessTimeIcon sx={{ mr: 1 }} />
          <CountdownTimer targetDate="2025-12-31T23:59:59" />
        </Box>
      </Box>
    </Box>
  );

  return (
    <nav className="sticky top-0 left-0 z-50">
      <header className={styles.header}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexWrap: "nowrap", width: "100%", maxWidth: "1520px" }}
        >
          <Grid item>
            <Image
              src={logo}
              alt="Blackwell Global Logo"
              style={{ maxWidth: isMobile ? "120px" : "auto", height: "auto" }}
            />
          </Grid>

          {!isMobile && (
            <Grid>
              <Stack
                direction="row"
                flexWrap="nowrap"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography
                  direction="row"
                  variant="h6"
                  align="center"
                  sx={{
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    width: "7em",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                  }}
                >
                  PROMOTION ENDS IN
                </Typography>

                <CountdownTimer targetDate="2025-12-31T23:59:59" />
              </Stack>
            </Grid>
          )}

          <Grid>
            {isMobile ? (
              <IconButton
                onClick={toggleDrawer(true)}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
              >
                {!user && <RegisterButton />}

                <Box sx={{ flexGrow: 0 }}>
                  <IconButton
                    onClick={handleOpenProfileMenu}
                    color="inherit"
                    aria-label="user account"
                  >
                    <PersonIcon sx={{ p: 1, fontSize: "3rem" }} />
                  </IconButton>
                </Box>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseProfileMenu}
                >
                  {user ? (
                    <Button
                      onClick={handleLogoutClick}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLoginModal(true);
                        handleCloseProfileMenu();
                      }}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Login
                    </Button>
                  )}
                </Menu>
              </Stack>
            )}
          </Grid>
        </Grid>
      </header>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        TransitionProps={{
          onExited: () => {
            if (pendingOpenRegisterModal) {
              setIsLoginModal(true);
            }
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {user && showWelcomeMessage && (
        <div className={styles.welcomeMessageBackground}>
          <div className={styles.welcomeMessageContainer}>
            <Typography
              variant="h6"
              className={styles.welcomeMessage}
            >
              Hi {user.firstName}, welcome to Blackwell! Please verify your
              email immediately.
            </Typography>
            <IconButton onClick={() => setShowWelcomeMessage(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}
      {isLoginModal && (
        <LoginModal
          open={isLoginModal}
          onClose={() => setIsLoginModal(false)}
        />
      )}
    </nav>
  );
}
