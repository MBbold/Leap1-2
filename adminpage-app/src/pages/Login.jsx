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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getLogIn } from "../firebase/firebaseConfig";
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
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSignIn(e) {
    // e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await getLogIn(emailRef.current.value, passwordRef.current.value);
      navigate("/navbar");
      alert("Log in successful");
    } catch {
      alert("Failed to sign in");
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <Box sx={{ ...style }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Log In
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
      </Box>
      <Button
        sx={{ width: "100%", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={() => handleSignIn()}
      >
        Log in
      </Button>
      <Typography sx={{ textAlign: "center", marginTop: 2 }}>
        Need an account? <Link to="/signup">SignUp</Link>
      </Typography>
    </Box>
  );
};
