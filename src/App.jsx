import "./App.css";
import Features from "./components/Features";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <div className="bg-pink w-full h-screen"></div>
    </>
  );
}

export default App;
