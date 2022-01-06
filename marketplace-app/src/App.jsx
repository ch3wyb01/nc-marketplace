import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList";
import SingleItem from "./components/SingleItem";
import SingleCategory from "./components/SingleCategory";


function App() {
  const [items, setItems] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />}></Route>
          <Route path="/items" element={<ItemsList items={items} setItems={setItems}/>}></Route>
          <Route path="/items/:item_id" element={<SingleItem />}></Route>
          <Route path="/items/:item_id" element={<SingleItem />}></Route>
          <Route path="/categories/:category_name" element={<SingleCategory items={items} setItems={setItems}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
