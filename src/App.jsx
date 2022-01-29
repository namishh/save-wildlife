import React from "react";
import Hero from "./components/hero/Hero";
import Conserve from "./components/conserve/Conserve";
import Tweets from "./components/tweets/Tweets";
import Grid from "./components/grid/Grid";
import Archive from "./components/archive/Archive";
import Navbar from "./components/navbar/Navbar";
import OpenNav from "./components/navbar/OpenNav";
import Footer from "./components/footer/Footer";
import { useGlobal } from "./context/context";

function App() {
  const {setNavOpen} = useGlobal()
  return (
    <div className="App">
      <OpenNav/>
      <Navbar/>
      <div onClick={() => setNavOpen(false)} className="components">
        <Hero />
        <Conserve />
        <Tweets />
        <Grid />
        <Archive/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
