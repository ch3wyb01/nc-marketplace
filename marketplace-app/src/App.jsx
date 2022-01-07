import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList";
import SingleItem from "./components/SingleItem";
import SingleCategory from "./components/SingleCategory";
import SellItem from "./components/SellItem";
import Basket from "./components/Basket";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([{item_name : 'bogies'}]);


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />}></Route>
          <Route
            path="/items"
            element={<ItemsList items={items} setItems={setItems} />}
          ></Route>
          <Route path="/items/:item_id" element={<SingleItem />}></Route>
          <Route
            path="/categories/:category_name"
            element={<SingleCategory />}
          ></Route>
          <Route
            path="/items/sell"
            element={<SellItem items={items} setItems={setItems} />}
          ></Route>
          <Route path="/basket" element={<Basket basketItems={basketItems} setBasketItems={setBasketItems}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
