import {
  AppBar,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import CustomDrawer from "./drawer";
import NextLink from "next/link";

const drawerWidth = 200;

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
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <NextLink href="/" passHref>
              {/* <a> */}
              <Typography variant="h5" noWrap style={{ cursor: "pointer" }}>
                Alumni Association
              </Typography>
              {/* </a> */}
            </NextLink>
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
