import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/products" element={<Product />} />
        <Route to="/about" element={<About />} />
        <Route to="/contact" element={<Contact />} />
        {/* <Redirect /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
