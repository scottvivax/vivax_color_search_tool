import search_address from "../helpers/search_address";
import get_current_loc from "../helpers/get_current_loc";
import arrow_down from "../data/arrow-down-circle.svg";
import { useEffect, useState } from "react";

function AddressInput({ map }) {
  return (
    <div id="address_section">
      <h2 className="section_header">Search your Location </h2>
      <form className="section_flex">
        <input
          id="address"
          className="section_full_field"
          placeholder="Address"
        ></input>
        <select id="state" className="section_half_field">
          <option>CO</option>
        </select>
        <input
          id="zip"
          className="section_half_field"
          placeholder="Zip"
        ></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            search_address(map);
          }}
          className="section_button"
        >
          Submit
        </button>
        <p
          className="txt_wht custom_link"
          onClick={(event) => {
            event.preventDefault();
            get_current_loc(map);
          }}
        >
          Click here to use
          <br />
          your device's location!
        </p>
      </form>
    </div>
  );
}

export default AddressInput;
