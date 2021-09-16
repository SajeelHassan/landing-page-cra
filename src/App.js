import React from "react";
import "./App.css";
import CarouselDiv from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Header />
      <CarouselDiv />
      <Products />
      <Footer />
    </>
  );
}

export default App;
