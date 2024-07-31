import "./App.css";
import Features from "./pages/Features/Features";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Newsletter from "./pages/Home/Newsletter";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
