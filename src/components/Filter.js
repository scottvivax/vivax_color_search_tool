import autocomplete from "../helpers/search_autocomplete";
import { useEffect } from "react";

function Filter() {
  let substrates = [
    "Painted Siding",
    "Painted Board and Bat",
    "Painted Stucco",
    "Vinyl",
    "Aluminum",
    "Wood Painted Siding",
  ];

  let colors = ["blue", "green", "yellow", "black"];

  useEffect(() => {
    autocomplete(document.getElementById("colorInput"), colors);
  }, []);

  return (
    <form>
      <div className="autocomplete">
        <input id="colorInput" type="text" placeholder="Enter a Color"></input>
      </div>
      <select>
        {substrates.map((substrate) => {
          return (
            <option value={substrate} key={substrate}>
              {substrate}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default Filter;
