import {Backdrop, CircularProgress} from "@mui/material";
import React from "react";

export default function () {
  const params = {color: '#fff', zIndex: 5};

  return (
    <Backdrop sx={params} open={true}>
      <CircularProgress color="inherit"/>
    </Backdrop>
  );
}
