import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Header from "./components/Header/Header";
import Catalog from "./page/Catalog";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
