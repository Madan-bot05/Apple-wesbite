import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import "./app.scss"

const App = () => {
  return (
  <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model className="mt-5"/>
  </main>
  )
};

export default App;
