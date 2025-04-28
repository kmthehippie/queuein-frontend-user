import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const BackgroundImageComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <img
        src="/BackgroundImage.jpg"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          height: "100%",
          objectFit: "cover",
          width: isSmallScreen ? "100vw" : "56vw",
        }}
      />
    </Box>
  );
};

export default BackgroundImageComponent;
