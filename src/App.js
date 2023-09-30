import "./App.css";
import Bestsellers from "./components/Bestsellers";
import Contact from "./components/Contact";
import Header from "./components/Header";
import InfoSB from "./components/InfoSB";
import Landing from "./components/Landing";
import Posts from "./components/Posts";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App flex flex-col items-center bg-background">
      <Header />
      <Landing />
      <InfoSB />
      <Bestsellers />
      <Reviews />
      <Posts />
      <Contact />
    </div>
  );
}

export default App;
