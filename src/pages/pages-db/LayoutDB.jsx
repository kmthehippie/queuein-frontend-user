import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

// Lazy load the background image component
const BackgroundImage = lazy(() => import("../../components/BackgroundImage")); // Adjust path if needed

const DashboardContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  position: "relative",
  maxWidth: "lg",
}));

const ContentWrapper = styled(Box)({
  flexGrow: 1, // Allows the content to take up available vertical space
  display: "flex",
  justifyContent: "center",
  alignItems: "center", // Adjust as needed for content alignment
  padding: (theme) => theme.spacing(4), // Add some padding around the content
  zIndex: 1, // Ensure content is above the background
});

function DashboardLayout() {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <BackgroundImage />
      </Suspense>
      {/* Set my logo here for users to go to "/" */}
      <DashboardContainer>
        <ContentWrapper>
          <Outlet />
          {/* This is where your Login component (or other dashboard pages) will render */}
        </ContentWrapper>
      </DashboardContainer>
    </>
  );
}

export default DashboardLayout;
