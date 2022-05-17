import AddressInput from "./AddressInput";
import FilterInput from "./FilterInput";
import menu_icon from "../data/list.svg";
import { useState } from "react";

function SideBar({ applyFilters, map }) {
  return (
    <div className="sidebar_container">
      <img className="menu_icon" src={menu_icon}></img>
      <AddressInput map={map} />
      <FilterInput applyFilters={applyFilters} />
    </div>
  );
}

export default SideBar;
