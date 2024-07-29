import "./App.css";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <div className="bg-pink w-full h-screen"></div>
    </>
  );
}

export default App;
