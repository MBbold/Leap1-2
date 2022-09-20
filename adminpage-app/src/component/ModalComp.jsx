import {
  Autocomplete,
  Box,
  Button,
  Divider,
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
import { useOpenModalContext } from "../contexts/OpenModal";

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
export const ModelComp = () => {
  const { openModal, setOpenModal } = useOpenModalContext();
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal
      open={openModal}
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
            <Typography>Орц, найрлага</Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "addFoodBtn.main", color: "dark.main" }}
              startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
            >
              Орц нэмэх
            </Button>
          </Box>
          <Box sx={{ display: "flex" }}>
            {foodIcons.map((text, index) => (
              <>
                <img src={text.img} alt="" />
                <Typography>{text.name}</Typography>
                {/* <InputBase
                  placeholder="Энд бичнэ үү"
                  sx={{
                    border: "1px solid #A0A2A8",
                    borderRadius: "6px",
                    padding: "2px 16px 2px 16px",
                    width:'100%'
                  }}
                ></InputBase> */}
                {/* <MyInput /> */}
              </>
            ))}
            
          </Box>
        </Box>
      </>
    </Modal>
  );
};
