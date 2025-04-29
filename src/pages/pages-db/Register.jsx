import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GoogleButton from "../../components/GoogleButton";

import api from "../../api/axios";

function Register() {
  const [companyEmail, setCompanyEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [ownerEmail, setOwnerEmail] = React.useState("");
  const [isEmailVisible, setEmailIsVisible] = React.useState(true);
  const [normalRegVisible, setNormalRegVisible] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accountInfo = {
      companyName: companyName, //required
      companyEmail: companyEmail, //required unique
      password: password,
      //Add a logo
      //Add a staff into staffs connected to this accountInfo
    };
    if (isEmailVisible) {
      setOwnerEmail(ownerEmail);
    } else {
      setOwnerEmail(companyEmail);
    }

    const ownerAccount = {
      name: ownerName,
      email: ownerEmail,
      role: "OWNER",
      //pfp
    };

    console.log(accountInfo, ownerAccount);

    try {
      const res = await api.post("/register", {
        accountInfo,
        ownerAccount,
      });
      console.log(res);
    } catch (err) {
      console.log("Axios error: ", err);
    }
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
        maxWidth: {
          xs: "100vw",
          mobile: "100vw",
          tablet: "80vw",
          lg: "70vw",
          xl: "70vw",
        },
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
              Great Choice!
            </Typography>
            <Typography variant="body2" component="p">
              Take this step to make your business flow a little simpler!
            </Typography>
            <Typography variant="small" component="small">
              How would you like to create your account?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!normalRegVisible}
                  onChange={() => {
                    setNormalRegVisible(!normalRegVisible);
                  }}
                />
              }
              label={
                <Typography variant="body2" component="p">
                  I would like to register via Google!
                </Typography>
              }
              sx={{ mb: -1 }}
            />
            {!normalRegVisible && (
              <Box fullWidth sx={{ textAlign: "center", mt: 1 }}>
                <GoogleButton />
              </Box>
            )}

            {normalRegVisible && (
              <Box component="form" autoComplete="on">
                <TextField
                  fullWidth
                  variant="standard"
                  label="Company Name"
                  id="company_name"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  required
                />
                <TextField
                  fullWidth
                  variant="standard"
                  label="Company Email"
                  id="company_email"
                  onChange={(e) => {
                    setCompanyEmail(e.target.value);
                    setOwnerEmail(e.target.value);
                  }}
                  required
                />
                <TextField
                  fullWidth
                  variant="standard"
                  id="password"
                  type="password"
                  label="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  autoComplete="password"
                />
                <TextField
                  fullWidth
                  variant="standard"
                  id="confirm_password"
                  type="password"
                  label="Confirm Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  autoComplete="password"
                />
                <TextField
                  fullWidth
                  variant="standard"
                  label="Owner Name"
                  id="owner_name"
                  onChange={(e) => {
                    setOwnerName(e.target.value);
                  }}
                  required
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!isEmailVisible}
                      onChange={() => {
                        setEmailIsVisible(!isEmailVisible);
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" component="p">
                      Owner Email is the same as Company Email
                    </Typography>
                  }
                  sx={{ mb: -1 }}
                />

                {isEmailVisible && (
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Owner Email"
                    id="owner_email"
                    onChange={(e) => {
                      setOwnerEmail(e.target.value);
                    }}
                    required
                    sx={{ width: "100%" }}
                  />
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
                    Register
                  </Button>
                </Box>

                <Typography
                  variant="body2"
                  component="p"
                  sx={{ pt: 2, textAlign: "center" }}
                >
                  Already have an account? <Link to="/db/login">Sign In</Link>
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
}

export default Register;
