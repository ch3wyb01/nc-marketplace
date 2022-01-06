import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />}></Route>
          <Route path="/items" element={<ItemsList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
