import logo from "./logo.svg";
import "./App.css";
import ApiTesting from "./component/ApiTesting";
import Navbar from "./component/Navbar";
import MemoizationEx from "./component/MemoizationEx";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* 
      <ApiTesting /> */}
      <MemoizationEx />
    </div>
  );
}

export default App;
