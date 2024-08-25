// routes.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";
import { ManagedPage } from "./pages/ManagedPage/ManagedPage";
import { HomePage } from "./pages/HomePage/HomePage";
import App from "./App";

describe("Routes Configuration", () => {
  it("has the correct structure", () => {
    expect(routes).toHaveLength(3);

    const rootRoute = routes[0];
    expect(rootRoute.path).toBe("/");
    expect(rootRoute.Component).toBe(App);
    expect(rootRoute.children).toHaveLength(1);
    expect(rootRoute.children && rootRoute.children[0].path).toBe("/");
    expect(rootRoute.children && rootRoute.children[0].Component).toBe(
      HomePage
    );

    const personalRoute = routes[1];
    expect(personalRoute.path).toBe("/personal");
    expect(personalRoute.Component).toBe(App);
    expect(personalRoute.children).toHaveLength(1);
    expect(personalRoute.children && personalRoute.children[0].path).toBe("/personal");
    expect(personalRoute.children && personalRoute.children[0].Component).toBe(
      PersonalPage
    );

    const managedRoute = routes[2];
    expect(managedRoute.path).toBe("/managed");
    expect(managedRoute.Component).toBe(App);
    expect(managedRoute.children).toHaveLength(1);
    expect(managedRoute.children && managedRoute.children[0].path).toBe(
      "/managed"
    );
    expect(managedRoute.children && managedRoute.children[0].Component).toBe(
      ManagedPage
    );
  });

  it("renders the correct components for each route", () => {
    render(
      <MemoryRouter initialEntries={["/personal"]}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.Component}>
              {route.children?.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  Component={childRoute.Component}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByTestId("personal-page")).toBeInTheDocument();
  });
});
