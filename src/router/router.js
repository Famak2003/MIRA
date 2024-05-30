import Error from "../components/ui/Error";
import * as Pages from "./../pages";
import { action as chatAction } from "../pages/chat/Chat";
import { createBrowserRouter } from "react-router-dom";
import { Applayout, AuthLayout, HomeLayout } from "../layouts";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Pages.LandingPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Pages.Login />,
          },
          {
            path: "auth/signup",
            element: <Pages.CreateAccount />,
          },
        ],
      },
      {
        element: <HomeLayout />,
        children: [
          {
            path: "/home/chat",
            element: <Pages.Chat />,
            action: chatAction,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

export default router;
