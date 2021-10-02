import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import CustomDrawer from "./drawer";
import NextLink from "next/link";

const drawerWidth = 150;


export default function Layout() {
  const [Open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };

  return (
    <>
      <div  sx={{ display: 'flex' }}>
        {/* Appbar */}
        <AppBar position="static" style={{ marginBottom: "10px" }}>
          <Toolbar>
            <Grid container>
              <Grid item>
                <Grid container alignItems="center" direction="row">
                  <Grid item>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleDrawerToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <NextLink href="/" passHref>
                      {/* <a> */}
                      <Typography
                        variant="h5"
                        noWrap
                        style={{ cursor: "pointer" }}
                      >
                        Alumni Association
                      </Typography>
                      {/* </a> */}
                    </NextLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <NextLink href="/list" passHref>
                      <Tooltip title="Lists">
                        <IconButton color="inherit">
                          <ListIcon />
                        </IconButton>
                      </Tooltip>
                    </NextLink>
                  </Grid>
                  <Grid item>
                    <NextLink href="/addAlumni" passHref>
                      <Tooltip title="Add Alumni">
                        <IconButton color="inherit">
                          <PersonAddIcon />
                        </IconButton>
                      </Tooltip>
                    </NextLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {/* drawer */}
        <Drawer
          anchor="left"
          open={Open}
          onClose={handleDrawerToggle}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <CustomDrawer toggle={handleDrawerToggle} />
        </Drawer>
      </div>
    </>
  );
}
