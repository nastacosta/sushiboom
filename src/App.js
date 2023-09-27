import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <div className="text-2xl bg-slate-200 z-40">hola</div>
    </div>
  );
}

export default App;
