import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
