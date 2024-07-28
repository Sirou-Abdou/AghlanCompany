import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-pink w-full h-screen"></div>
    </>
  );
}

export default App;
