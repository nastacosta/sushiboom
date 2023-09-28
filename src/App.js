import "./App.css";
import Bestsellers from "./components/Bestsellers";
import Header from "./components/Header";
import InfoSB from "./components/InfoSB";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App flex flex-col items-center bg-background">
      <Header />
      <Landing />
      <InfoSB />
      <Bestsellers />
    </div>
  );
}

export default App;
