import Map from "./components/Map";
import SideBar from "./components/SideBar";
import pins from "./data/watson_color_data_2022.json";
import filter_pins from "./helpers/filter_pins";
import { useState } from "react";
import "./style.css";

function App() {
  const [displayPins, updateDisplayPins] = useState(pins);

  function applyFilters() {
    let color = document.getElementById("colorInput").value;
    let substrate = document.getElementById("substrateInput").value;
    updateDisplayPins(filter_pins(pins, color, substrate));
  }
  return (
    <div className="page_outline">
      <SideBar applyFilters={applyFilters} />
      <Map displayPins={displayPins} />
    </div>
  );
}

export default App;
