import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import {  Button, Divider, Fab, Grid, Stack,  } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ModelComp } from "../component/ModalComp";
import { useOpenModalContext } from "../contexts/OpenModal";
// import { usePathNameContext } from "../contexts/PathNameContext";
import { Sidebar } from "../component/Sidebar";
import { NavBar } from "../component/NavBar";
import { foodDatas } from "../data/foodData";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "30%",
    paddingLeft: "10px",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "400",
  letterSpacing: "-0.408px",
}));

export const FoodMenu = () => {
  // const { setPathName } = usePathNameContext();
  // setPathName(window.location.href);
  const { setOpenModal } = useOpenModalContext();
  const handleOpen = () => {
    setOpenModal(true);
  };
  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          width: "100vw",
        }}
      >
        <NavBar />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Box flex={1} p={2}>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{ flex: 1, display: { xs: "none", sm: "block" } }}
            >
              Хоолны сав
            </Typography>
          </Box>
          <Box
            flex={1}
            p={2}
            gap={20}
            sx={{ display: "flex", justifyContent: "flex-end" }}
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
        </Stack>
        <Divider />
          <Box sx={{ backgroundColor:"white.light", marginTop:'16px' }}>
            <Grid container spacing={2} columns={20} p={4}>
             {foodDatas.map((element, index)=>(
              <Grid key={index} item xs={4} marginTop={10}>
                <Box sx={{backgroundColor:'white.main', borderRadius:'8px', position:'relative'}} p={2}>
                  <img src={element.image} alt="" style={{position:'absolute', width:'120px', top:'-70px', left:'35%'}}/>
                  <Box textAlign='center' sx={{marginTop:'50px'}}>
                    <Typography>
                      {element.name}
                    </Typography>
                    <Typography sx={{fontSize:'10px'}}>
                      {element.portion}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={3} justifyContent="space-between" paddingTop={5} >
                    <Box flex={1} >
                      {element.price}
                    </Box>
                    <Box flex={1} sx={{color:'addIcon.main', display:'flex', justifyContent:'flex-end'}}>
                      <Fab color="" size="small" >
                        <AddIcon color="success"/>
                      </Fab>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
             ))}
            </Grid>
            <ModelComp />
          </Box>
      </Box>
    </Box>
  );
};
