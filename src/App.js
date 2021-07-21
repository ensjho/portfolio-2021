import "./App.css";
import EricCardCase from "./EricCardCase";

function App() {
  return (
    <div className="App">
      <EricCardCase />
      <input type="checkbox" id="toggle" class="toggle--checkbox" />
      <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
      </label>
      <div class="background"></div>
    </div>
  );
}

export default App;
