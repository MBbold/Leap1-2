import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getSignUp } from "../firebase/firebaseConfig";
import { NavBar } from "./Navbar";

const style = {
  width: "30%",
  height: "auto",
  margin: "auto",
  padding: 3,
  backgroundColor: "#E5E5E5",
  borderRadius: "10px",
};
const margintop = {
  margin: "10px 0",
};
const styleInput = {
  borderRadius: "6px",
  width: "100%",
};
export const SingUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, currentUser } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    setError("");
    // setLoading(true)
    getSignUp(emailRef.current.value, passwordRef.current.value);
    // catch{
    //   setError("Failed to create an account")
    //   console.log("aldaa")

    // }
    // setLoading(false)
  };

  return (
    <Box sx={{ ...style }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Sign Up
      </Typography>
      <Box>
        {/* {currentUser.email} */}
        {error && <Alert variant="danger">{error}</Alert>}
        <Typography sx={{ ...margintop }}>Email</Typography>
        <TextField
          sx={{ ...styleInput }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          inputRef={emailRef}
        />
        <Typography sx={{ ...margintop }}>Password</Typography>
        <TextField
          sx={{ ...styleInput }}
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          inputRef={passwordRef}
        />
        <Typography sx={{ ...margintop }}>Password Confirmation</Typography>

        <TextField
          sx={{ ...styleInput }}
          type="password"
          id="outlined-basic"
          label="Password Confirmation"
          variant="outlined"
          inputRef={passwordConfirmRef}
        />
      </Box>
      <Button
        sx={{ width: "100%", marginTop: "20px" }}
        color="secondary"
        variant="contained"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
      <Typography sx={{ textAlign: "center", marginTop: 2 }}>
        Already have an account? <Link to="/">LogIn</Link>
      </Typography>
    </Box>
  );
};
