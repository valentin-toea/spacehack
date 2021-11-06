import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import axios from "axios";
import { MAIN_URL } from "./config/config";
import { useDispatch } from "react-redux";
import { updatePostStat } from "./redux/postStatSlice";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(MAIN_URL + "counts")
      .then((response) => dispatch(updatePostStat(response.data)));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
