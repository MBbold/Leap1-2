import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Autocomplete, Button, CardMedia, Divider, Input, Modal, Stack, TextField } from "@mui/material";
import { AddButton } from "./AddButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { height, spacing, width } from "@mui/system";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const timeSlots = ['Цагаан хоол', 'Цавуулаггүй', 'Хөнгөн хоол', 'Халуун ногоотой', 'Хүнд хоол']
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    paddingLeft: "5px",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: '#A0A2A8',
  fontSize: "15px",
  fontWeight: "400",
  letterSpacing: "-0.408px",
}));

const style = {
  position: "absolute",
  top: 50,
  left: 288,
  // transform: 'translate(-50%, -50%)',
  width: 864,
  height: 1936,
  bgcolor: "background.paper",
  borderRadius: 4,
  // border: '2px solid #000',
  // boxShadow: 24,
  // pt: 2,
  // px: 4,
  // pb: 3,
};
export const FoodMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Order page Top line - APP BAR */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFF", color: "#000723" }}
      >
        <Toolbar>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Хоолны сав
          </Typography>
          <Search
            sx={{
              border: "1px solid rgba(0, 7, 35, 0.08)",
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
            variant="outlined"
            sx={{
              padding: "3px 0px 3px 0px",
              width: "150px",
              marginLeft: "10px",
              height: "32px",
              border: "1px solid rgba(0, 7, 35, 0.08)",
              borderRadius: "8px",
              color: "#000",
              fontSize: "12px",
            }}
          >
            {" "}
            <AddButton /> &nbsp; &nbsp;&nbsp; Хоол нэмэх
          </Button>
        </Toolbar>
      </AppBar>

      {/* MODAL window - Food add */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={{ ...style }}>
            <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 10px",
                }}
              >
                <ClearOutlinedIcon />
                <Typography
                  fontFamily={"Raleway"}
                  sx={{ fontSize: "15px", fontWeight: "600" }}
                >
                  Хоол нэмэх
                </Typography>
                <Button variant="contained">Хадгалах</Button>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-around", margin:'20px'}}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <input hidden accept="image/*" multiple type="file" />
                  <PhotoCamera sx={{ borderRadius: "50%", height: "15px" }} />
                </Button>
              </Stack>
              <Box sx={{ width: "400px"}}>
                <Typography>Хоолны нэр</Typography>
                <InputBase
                  placeholder="Энд бичнэ үү"
                  sx={{
                    border: "1px solid #A0A2A8",
                    borderRadius: "6px",
                    padding: "2px 16px 2px 16px",
                  }}
                ></InputBase>
                <Typography>Дэлгэрэнгүй</Typography>
                <InputBase
                  placeholder="Энд бичнэ үү"
                  sx={{
                    border: "1px solid #A0A2A8",
                    borderRadius: "6px",
                    padding: "2px 16px 2px 16px",
                  }}
                ></InputBase>
                <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                  <Box>
                    <Typography>Хоолны үнэ</Typography>
                      <InputBase
                        placeholder="₮ Энд бичнэ үү"
                        type="number"
                        
                        sx={{
                          border: "1px solid #A0A2A8",
                          borderRadius: "6px",
                          padding: "2px 16px 2px 16px",
                        }}
                    ><Typography>$</Typography></InputBase>
                  </Box>
                  <Box>
                    <Typography>Төрөл</Typography>
                    {/* <Autocomplete></Autocomplete> */}
                    <Autocomplete
                      id="options-food-type"
                      size="small"
                      options={timeSlots}
                      sx={{ width: 150 }}
                      renderInput={(params) => <TextField {...params} label="Төрөлгүй" />}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 30px",
                }}
              >
                <Typography>Орц, найрлага</Typography>
                <Button variant="contained" color='secondary'>Орц нэмэх</Button>
            </Box>
          </Box>
        </>
      </Modal>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
