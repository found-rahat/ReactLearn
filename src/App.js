import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Withjsx from "./components/jsx";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Captain Bangladesh" heroName="Rahat" Age="25" />
      <Greet name="SpiderWoman" heroName="Khan" Age="30" />
      <Greet name="WonderMan" heroName="Joy" Age="10" /> */}
      <Welcome name="Captain Bangladesh" heroName="Rahat" Age="25" />
      <Welcome name="SpiderWoman" heroName="Khan" Age="30" />
      <Welcome name="WonderMan" heroName="Joy" Age="10" />
      {/* <Withjsx /> */}
    </div>
  );
}

export default App;
