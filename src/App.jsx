import FunctionComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import FunctionalComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import ClassComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  return (
    <div>
      <FunctionComponent greetName="Function" />
      <FunctionalComponent greetName="Functional" />
      <ClassComponent greetName="Class" />
    </div>
  );
}

export default App;
