import {
  MenuIcon,
  PersonAddIcon,
  ListIcon,
  AppBar,
  Drawer,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
} from "utils/exports";
import { useState } from "react";
import CustomDrawer from "./drawer";
import NextLink from "next/link";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [Open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };

  return (
    <>
      <div className={classes.root}>
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
          className={classes.drawer}
          anchor="left"
          open={Open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <CustomDrawer toggle={handleDrawerToggle} />
        </Drawer>
      </div>
    </>
  );
}
