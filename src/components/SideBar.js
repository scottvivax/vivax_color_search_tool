import AddressInput from "./AddressInput";
import FilterInput from "./FilterInput";
import menu_icon from "../data/list.svg";
import { useState } from "react";

function SideBar({ applyFilters, map }) {
  let [collapseState, updateCollapseState] = useState("none");

  function collapse_section() {
    collapseState === "none"
      ? updateCollapseState("initial")
      : updateCollapseState("none");

    document
      .getElementById("address_section")
      .setAttribute("style", `display: ${collapseState}`);

    document
      .getElementById("filter_section")
      .setAttribute("style", `display: ${collapseState}`);
  }

  return (
    <div className="sidebar_container">
      <img
        className="menu_icon"
        src={menu_icon}
        onClick={collapse_section}
      ></img>
      <AddressInput map={map} />
      <FilterInput applyFilters={applyFilters} />
    </div>
  );
}

export default SideBar;
