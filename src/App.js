import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Withjsx from "./components/jsx";
import State from "./components/state";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/classClick";
import EventBind from "./components/EventBind";
import ParentComponents from "./components/ParentComponents";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/NameList";
import KeyIndex from "./components/keyIndex";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/inline";
function App() {
  return (
    <div className="App">
      {/* <Greet name="SpiderWoman" heroName="Khan" Age="30" /> */}
      {/* <Welcome name="SpiderWoman" heroName="Khan" Age="30" /> */}
      {/* <Greet name="Captain Bangladesh" heroName="Rahat" Age="25" />
      
      <Greet name="WonderMan" heroName="Joy" Age="10" /> */}
      {/* <Welcome name="Captain Bangladesh" heroName="Rahat" Age="25" />
      
      <Welcome name="WonderMan" heroName="Joy" Age="10" /> */}
      {/* <Withjsx /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponents /> */}
      {/* <ConditionalRendering /> */}
      {/* <NameList /> */}
      {/* <KeyIndex /> */}
      {/* <Stylesheet primary={true} /> */}
      <Inline />
    </div>
  );
}

export default App;
