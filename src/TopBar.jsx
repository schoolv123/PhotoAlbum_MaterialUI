import React from "react";
import {
  Typography as Text,
  AppBar,
  CssBaseline,
  Toolbar
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
const TopBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Text variant="h6" align="center" style={{ marginLeft: 10 }}>
            Photo Album
          </Text>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
