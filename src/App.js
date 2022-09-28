import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { useEffect, useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const increaseCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartCount}></Navbar>
      <Header></Header>
      <Products increaseCartCount={increaseCartCount}></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
