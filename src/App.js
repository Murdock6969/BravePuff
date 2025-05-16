import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import { Whishlist } from "./Whishlist";
import { Addcart } from "./Addcart";
import { Logo } from "./Logo"; 
import './overallcss.css';
import { useState } from "react";

function App() {
  const [carting, setcarting] = useState([]);
  const [whishing, setwhishing] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              carting={carting}
              setcarting={setcarting}
              whishing={whishing}
              setwhishing={setwhishing}
            />
          }
        >
          {/* 👇 Render Home by default when path is "/" */}
          <Route
            index
            element={
              <Home
                carting={carting}
                setcarting={setcarting}
                whishing={whishing}
                setwhishing={setwhishing}
              />
            }
          />
          <Route path="/logo" element={<Logo />} />
          <Route path="/home" element={
            <Home
              carting={carting}
              setcarting={setcarting}
              whishing={whishing}
              setwhishing={setwhishing}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route
            path="/product"
            element={
              <Product
                carting={carting}
                setcarting={setcarting}
                whishing={whishing}
                setwhishing={setwhishing}
              />
            }
          />
          <Route
            path="/addcart"
            element={<Addcart carting={carting} setcarting={setcarting} />}
          />
          {/* Uncomment if needed */}
          {/* <Route path="/whishlist" element={<Whishlist whishing={whishing} setwhishing={setwhishing} />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

