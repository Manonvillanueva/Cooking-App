import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import "./styles/home.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
