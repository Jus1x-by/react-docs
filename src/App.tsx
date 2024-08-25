import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { AppStateContext, useAppState } from "./states/AppState";

function App() {
  const userState = useAppState();

  return (
    <AppStateContext.Provider value={userState}>
      <div className="app" data-testid="app">
        <Navigation />
        <div className="app__container">
          <Header />
          <main className="app__main">
            <Outlet />
          </main>
        </div>
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
