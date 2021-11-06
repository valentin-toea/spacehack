import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomePage from "./pages/HomePage/HomePage";
import RecPage from "./pages/RecPage/RecPage";
import { AppShell } from "@mantine/core";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppShell padding="md" navbar={<NavbarContainer />}>
          <HeaderContainer />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/rec" element={<RecPage />} />
          </Routes>
        </AppShell>

      </Router>
    </Provider>
  );
};

export default App;
