import { Routes, Route, useLocation, useHistory } from "react-router-dom";
// Components
import Nav from "./Components/Nav";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Introduction from "./Pages/Introduction";
import Notice from "./Pages/Notice";
import Report from "./Pages/Report";

import "./App.css";

function App() {
  const site = useLocation();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
