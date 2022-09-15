import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ModelComp } from "../component/ModalComp";
import { useOpenModalContext } from "../contexts/OpenModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    paddingLeft: "5px",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "400",
  letterSpacing: "-0.408px",
}));

export const FoodMenu = () => {
  const { setOpenModal } = useOpenModalContext();
  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFF", color: "#000723" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ flex: 1, display: { xs: "none", sm: "block" } }}
          >
            Хоолны сав
          </Typography>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "space-around" }}
          >
            <Search
              sx={{
                backgroundColor: "white.light",
                borderRadius: "8px",
              }}
            >
              <StyledInputBase
                placeholder="Хайлт"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button
              onClick={handleOpen}
              variant="contained"
              startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
            >
              Хоол нэмэх
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <ModelComp />
    </Box>
  );
};
