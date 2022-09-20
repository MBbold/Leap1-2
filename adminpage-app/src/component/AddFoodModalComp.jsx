import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { InputBtn } from "./InputBtn";
import AddIcon from "@mui/icons-material/Add";
import foodIcons from "../data/foodIcon.json";
import { useAddFoodOpenModalContext } from "../contexts/AddFoodOpenModal";
import { useState } from "react";
import { useRef } from "react";
import _ from 'lodash';

const style = {
  position: "absolute",
  top: 50,
  left: 288,
  width: 864,
  height: 1936,
  bgcolor: "background.paper",
  borderRadius: 4,
};
const timeSlots = [
  "Цагаан хоол",
  "Цавуулаггүй",
  "Хөнгөн хоол",
  "Халуун ногоотой",
  "Хүнд хоол",
];




export const AddFoodModalComp = () => {
  const { addFoodOpenModal, setAddFoodOpenModal } = useAddFoodOpenModalContext();
  const [addRecipeOpenModal, setAddRecipeOpenModal] = useState(false);
  const foodAddhandleClose = () => {
    setAddFoodOpenModal(false);
  };
  const recipeAddhandleOpen = () => {
    setAddRecipeOpenModal(true);
  };
  const recipeAddhandleClose = () => {
    setAddRecipeOpenModal(false);
  };
  const recipeName = useRef();
  const recipeValue = useRef();
  const [recipeAddArr, setRecipeAddArr] = useState([]);

  const recipeAdd = ()=>{
    setRecipeAddArr(()=>
    [...recipeAddArr, 
      {name:recipeName.current.value, recipe:recipeValue.current.value}])
      console.log('recipeAddArr', recipeAddArr);
  }
  
  return (
    <Modal
      open={addFoodOpenModal}
      onClose={foodAddhandleClose}
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
              margin: "10px 20px",
            }}
          >
            <ClearOutlinedIcon />
            <Typography
              fontFamily={"Raleway"}
              sx={{ fontSize: "25px", fontWeight: "800" }}
            >
              Хоол нэмэх
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "buttonColor.main",
                color: "white.main",
                fontSize: 14,
              }}
            >
              Хадгалах
            </Button>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px",
            }}
          >
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
            <Box sx={{ width: "400px" }}>
              <Box>
                <Typography>Хоолны нэр</Typography>
                <InputBtn />
              </Box>
              <Box marginTop={2}>
                <Typography>Дэлгэрэнгүй</Typography>
                <InputBtn sx={{
                    border: "1px solid #A0A2A8",
                    borderRadius: "6px",
                    padding: "2px 16px 40px 16px",
                    width: "100%",
                  }}/>
              </Box>
              <Stack
                direction="row"
                spacing={3}
                justifyContent="space-between"
                marginTop={2}
              >
                <Box flex={1}>
                  <Typography>Хоолны үнэ</Typography>
                  <InputBtn />
                </Box>
                <Box flex={1}>
                  <Typography>Төрөл</Typography>
                  {/* <Autocomplete></Autocomplete> */}
                  <Autocomplete
                    id="options-food-type"
                    size="small"
                    options={timeSlots}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Төрөлгүй" />
                    )}
                  />
                </Box>
              </Stack>
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
            <Typography sx={{fontWeight:'600'}}>Орц, найрлага</Typography>
            <Button
              onClick={recipeAddhandleOpen}
              variant="contained"
              sx={{ backgroundColor: "addFoodBtn.main", color: "dark.main", fontWeight:'600' }}
              startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
            >
              Орц нэмэх
            </Button>
          </Box>
          <Box>
            <Grid container spacing={2} columns={8} p={4}>
              {!_.isEmpty([recipeAddArr]) &&
                recipeAddArr.map((element, index)=>(
                  <Grid item xs={4} key={index}>
                    <Typography>
                      {element.name}
                    </Typography>
                    <Divider/>
                  </Grid>
                ))
              }

              {/* {recipeAddArr.map((element, index)=>(
                <Grid xs={4} key={index}>
                  <Box sx={{backgroundColor:'white.main', borderRadius:'8px'}} p={2}></Box>
                </Grid>
              ))} */}
            </Grid>
          </Box>
        </Box>





        <Modal
                open={addRecipeOpenModal}
                onClose={recipeAddhandleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <>
                    <Box sx={{ 
                      display:'flex',
                      flexDirection:'column',
                      position: "absolute",
                      top: 300,
                      left: '35%',
                      width: 500,
                      bgcolor: "background.paper",
                      borderRadius: 4,
                      textAlign:'center',
                      justifyContent:'center',
                      alignItems:'center',
                      gap:3,
                      p:4
                     }}>
                        <Typography
                            fontFamily={"Raleway"}
                            sx={{ fontSize: "25px", fontWeight: "800" }}
                            >
                            Хоолны орц
                        </Typography>
                        <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
                          <TextField
                              label='Нэр'
                              inputRef={recipeName}    
                          >
                          </TextField>
                          <TextField
                              label='Орц' 
                              inputRef={recipeValue}    
                          >
                          </TextField>
                          <Button
                            onClick={recipeAdd}
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: "addFoodBtn.main", color: "dark.main", fontWeight:'600' }}
                            startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
                          >
                            Нэмэх
                          </Button>
                        </Box>
                        
                    </Box>
                </>
               
        </Modal>
      </>
    </Modal>
  );
};
