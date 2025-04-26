import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/:userName",
        element: <UserLandingPage />,
        children: [
          {
            path: "/:outletName",
            element: <OutletLandingPage />,
            children: [
              { path: "/joinQueue", element: <JoinQueueForm /> },
              { path: "/:queueItemId", element: <InQueue /> },
              { path: "/leftQueue", element: <LeftQueue /> },
              { path: "/seated", element: <Seated /> },
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
      <AuthProvider>
        <LayoutDB />
      </AuthProvider>
    ),
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/:userId",
        element: <ProtectedRoutes />,
        //! Here need to add auth. User can only access the children of this path if the user has been authenticated and authorised.
        children: [
          { path: "/dashboard", element: <DashboardLayout /> },
          { path: "/settings", element: <Settings /> },
          //Settings should include the setting for every outlet. To edit info such as default estimated wait time, name, address, location map links, waze links, hours open, etc. (So this should be an editable form)
          { path: "/newOutlet", element: <NewOutlet /> },
          //Form to add new outlet.
          {
            path: "/:outletId",
            element: <OutletLayout />,
            children: [
              { path: "/inactive", element: <InactiveQueue /> },
              //Here we display the last active queue info.
              { path: "/active/:queueId", element: <ActiveQueue /> },
            ],
          },
          { path: "/vips", element: <VIPCustomers /> },
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
