import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";
import useEmailValidation from "../../hooks/EmailValidation";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState(false);
  const [rememberDevice, setRememberDevice] = React.useState(false);
  const { emailError, emailHelperText, validateEmail } = useEmailValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
      rememberDevice: rememberDevice,
    };

    console.log(credentials);
    if (password.length === 0 || email.length === 0 || email.type) {
      setLoginError(true);
    }
    //fetch api login POST. if response is error: setLoginError to "Invalid credentials"
  };
  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 8,
        height: "auto",
        mb: 4,
        mx: 2,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0,
          borderRadius: 1,
          paddingY: (theme) => theme.spacing(6),
          paddingX: (theme) => theme.spacing(6.5),
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: {
              xs: "none",
              mobile: "none",
              tablet: "flex",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
            marginRight: (theme) => theme.spacing(2),
          }}
        >
          <img
            src="/Q-logo.svg"
            alt="Queue In Logo"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1.5,
            minWidth: 0,
            width: "auto",
          }}
        >
          <Paper
            elevation={24}
            sx={{
              paddingY: (theme) => theme.spacing(3),
              paddingX: (theme) => theme.spacing(6.5),
              borderRadius: 4,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.65)",
            }}
          >
            <Typography variant="poppinsH" component="h3">
              Welcome Back!
            </Typography>
            <Typography variant="body2" component="p">
              Enter your credentials to access your account!
            </Typography>

            <TextField
              variant="standard"
              label="Email Address"
              id="email"
              error={emailError}
              helperText={emailHelperText}
              slotProps={{ input: { type: "email" } }}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              required
              autoComplete="email"
              sx={{ width: "100%", mt: 1.5 }}
            />
            <TextField
              variant="standard"
              id="password"
              type="password"
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              autoComplete="password"
              sx={{ width: "100%", mt: 1.5, mb: 1.5 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberDevice}
                  onChange={() => {
                    setRememberDevice(!rememberDevice);
                  }}
                />
              }
              label={
                <Typography variant="body2" component="p">
                  Remember this device
                </Typography>
              }
            />
            {loginError && (
              <Typography color="error" sx={{ mt: 3 }}>
                Invalid Credentials
              </Typography>
            )}
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "100%", borderRadius: 2 }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Login
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                mt: 2,
              }}
            >
              <GoogleButton />
              <FacebookButton />
            </Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ pt: 2, textAlign: "center" }}
            >
              Don't have an account? <Link to="/db/register">Sign Up</Link>
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
}

export default Login;
