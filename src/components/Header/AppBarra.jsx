import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./AppBarra.css";

export default function Buscador() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="buscador">
        <Toolbar>
          <div className="circuloGrande">
            <div className="circuloGrandeInterior parpadea"></div>
          </div>
          <div className="divFlexHorizontal circulosDeColores">
            <div className="circuloChico marginCirculos colorRojo"></div>
            <div className="circuloChico marginCirculos colorAmarillo"></div>
            <div className="circuloChico marginCirculos colorVerde"></div>
          </div>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            POKEDEX ULTIMATE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
