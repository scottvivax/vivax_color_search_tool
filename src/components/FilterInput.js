import autocomplete from "../helpers/search_autocomplete";
import { useEffect, useState } from "react";

function FilterInput({ applyFilters }) {
  let substrates = [
    "All Substrates",
    "Painted Siding",
    "Painted Board and Bat",
    "Painted Stucco",
    "Vinyl",
    "Aluminum",
    "Wood Painted Siding",
  ];

  useEffect(() => {
    let colors = ["blue", "green", "yellow", "black", "Pure White"];
    autocomplete(document.getElementById("colorInput"), colors);
  }, []);

  return (
    <div>
      <h2 className="section_header">Filter</h2>
      <form>
        <div className="autocomplete">
          <input
            id="colorInput"
            type="text"
            placeholder="Enter a Color"
          ></input>
        </div>
        <select id="substrateInput">
          {substrates.map((substrate) => {
            return (
              <option value={substrate} key={substrate}>
                {substrate}
              </option>
            );
          })}
        </select>
        <label>Year Painted</label>
        <select id="compl_year">
          <option>All Years</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
        <button
          onClick={(event) => {
            event.preventDefault();
            applyFilters();
          }}
          className="section_button"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default FilterInput;
