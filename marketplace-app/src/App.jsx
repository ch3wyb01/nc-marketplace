import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
