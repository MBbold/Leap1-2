import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { NavBar } from "./Navbar";

const style = {
  width: "30%",
  height: "auto",
  margin: "auto",
  padding: 5,
  backgroundColor: "#E5E5E5",
  borderRadius: "10px",
  textAlign: "center",
};
const margin = {
  margin: "10px",
};
const styleInput = {
  borderRadius: "6px",
  width: "100%",
};
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const phoneNumberRef = useRef();
  const userNameRef = useRef();

  return (
    <Box sx={{ ...style }}>
      <Typography variant="h2" sx={{ textAlign: "center", ...margin }}>
        Нэвтрэх
      </Typography>
      <Box>
        <Typography sx={{ ...margin }}>Email</Typography>
        <TextField
          sx={{ ...styleInput }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Typography sx={{ ...margin }}>Name</Typography>
        <TextField
          sx={{ ...styleInput }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </Box>
      <Button sx={{ ...margin }} variant="contained">
        Нэвтрэх
      </Button>
      <Button sx={{ ...margin }} variant="contained">
        Бүртгүүлэх
      </Button>
    </Box>
  );
};
