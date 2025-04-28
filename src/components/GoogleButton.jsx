import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GoogleButton = () => {
  return (
    <Button variant="outlined" sx={{ py: 1, px: 2 }}>
      <GoogleIcon />
      <Typography variant="body2" component="p" sx={{ pl: 1 }}>
        Sign in with Google
      </Typography>
    </Button>
  );
};

export default GoogleButton;
