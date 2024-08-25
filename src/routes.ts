import { RouteObject } from "react-router-dom";
import * as paths from "./util/paths";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";
import { ManagedPage } from "./pages/ManagedPage/ManagedPage";
import App from "./App";
import { HomePage } from "./pages/HomePage/HomePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: paths.homePage,
        Component: HomePage,
      },
    ],
  },
  {
    path: "/personal",
    Component: App,
    children: [
      {
        path: paths.personalUser,
        Component: PersonalPage,
      },
    ],
  },
  {
    path: "/managed",
    Component: App,
    children: [
      {
        path: paths.managedUser,
        Component: ManagedPage,
      },
    ],
  },
];
