import autocomplete from "../helpers/search_autocomplete";
import arrow_down from "../data/arrow-down-circle.svg";
import { useEffect, useState } from "react";
import colors from "../data/color_list_full";

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
    autocomplete(document.getElementById("colorInput"), colors);
  }, []);

  return (
    <div id="filter_section">
      <h2 className="section_header">Filter the Pins</h2>
      <form className="section_flex ">
        <div className="autocomplete section_full_field">
          <input
            id="colorInput"
            type="text"
            placeholder="Enter a Color"
            className="width_100"
          ></input>
        </div>
        <select id="substrateInput" className="section_full_field">
          {substrates.map((substrate) => {
            return (
              <option value={substrate} key={substrate}>
                {substrate}
              </option>
            );
          })}
        </select>
        <label className="section_half_field txt_wht">Year Painted</label>
        <select id="compl_year" className="section_half_field">
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
          className="section_button filter_button"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default FilterInput;
