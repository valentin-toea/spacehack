import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import axios from "axios";
import { MAIN_URL } from "./config/config";
import { useDispatch } from "react-redux";
import { updatePostStat } from "./redux/postStatSlice";
import RecPage from "./pages/RecPage/RecPage";
import { AppShell } from "@mantine/core";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import { colors } from "./config/config";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(MAIN_URL + "counts")
      .then((response) => dispatch(updatePostStat(response.data)));
  }, []);

  return (
    <Router>
      <AppShell
        padding="md"
        navbar={<NavbarContainer />}
        styles={(theme) => ({
          main: {
            backgroundColor: colors.whiteblue,
          },
        })}
      >
        <HeaderContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/post-analyze" element={<RecPage />} />
        </Routes>
      </AppShell>
    </Router>
  );
};

export default App;
