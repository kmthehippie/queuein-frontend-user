import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./pages/Layout";

import UserLandingPage from "./pages/UserLandingPage";
import OutletLandingPage from "./pages/OutletLandingPage";
import JoinQueueForm from "./pages/JoinQueueForm";
import InQueue from "./pages/InQueue";
import LeftQueue from "./pages/LeftQueue";
import Seated from "./pages/Seated";
import Error from "./pages/Error";

import Login from "./pages/pages-db/Login";
import LayoutDB from "./pages/pages-db/LayoutDB";
import Register from "./pages/pages-db/Register";
import DashboardLayout from "./pages/pages-db/DashboardLayout";
import Settings from "./pages/pages-db/Settings";
import NewOutlet from "./pages/pages-db/NewOutlet";
import OutletLayout from "./pages/pages-db/OutletLayout";
import InactiveQueue from "./pages/pages-db/InactiveQueue";
import ActiveQueue from "./pages/pages-db/ActiveQueue";
import VIPCustomers from "./pages/pages-db/VIPCustomers";
import ErrorDb from "./pages/pages-db/ErrorDb";
import ForgotPw from "./pages/pages-db/ForgotPw";

import Container from "@mui/material/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container maxWidth="md">
        <Layout />
      </Container>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: ":userName",
        element: <UserLandingPage />,
        children: [
          {
            path: ":outletName",
            element: <OutletLandingPage />,
            children: [
              { path: "joinQueue", element: <JoinQueueForm /> },
              { path: ":queueItemId", element: <InQueue /> },
              { path: "leftQueue", element: <LeftQueue /> },
              { path: "seated", element: <Seated /> },
            ],
          },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/db",
    element: (
      // <AuthProvider>
      <LayoutDB />
      // </AuthProvider>
    ),
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgotPassword", element: <ForgotPw /> },
      {
        path: "user/:userId",
        element: <ProtectedRoutes />,
        //! Here need to add auth. User can only access the children of this path if the user has been authenticated and authorised.
        children: [
          { path: "dashboard", element: <DashboardLayout /> },
          { path: "settings", element: <Settings /> },
          //Settings should include the setting for every outlet. To edit info such as default estimated wait time, name, address, location map links, waze links, hours open, etc. (So this should be an editable form)
          { path: "newOutlet", element: <NewOutlet /> },
          //Form to add new outlet.
          {
            path: ":outletId",
            element: <OutletLayout />,
            children: [
              { path: "inactive", element: <InactiveQueue /> },
              //Here we display the last active queue info.
              { path: "active/:queueId", element: <ActiveQueue /> },
            ],
          },
          { path: "vips", element: <VIPCustomers /> },
        ],
      },
      { path: "*", element: <ErrorDb /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
