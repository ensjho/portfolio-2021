import "./MainPage.css";
import EricCardCase from "../EricCardCase";

/**@return {jsx} The top level in the application */
function MainPage() {
  return (
    <div className="MainPage">
      <EricCardCase />
<input type="checkbox" id="toggle" class="toggle--checkbox" />
<label for="toggle" class="toggle--label">
  <span class="toggle--label-background"></span>
</label>
<div class="background"></div>
    </div>
  );
}

export default MainPage;
