import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FacebookButton = () => {
  return (
    <Button variant="outlined" sx={{ py: 1, px: 2 }}>
      <FacebookIcon />
      <Typography variant="body2" component="p" sx={{ pl: 1 }}>
        Sign in with Facebook
      </Typography>
    </Button>
  );
};

export default FacebookButton;
