import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

/**@return {jsx} The top level in the application */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
