import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import RecPage from "./pages/RecPage/RecPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/rec" element={<RecPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
