import AddressInput from "./AddressInput";
import FilterInput from "./FilterInput";

function SideBar({ applyFilters, map }) {
  return (
    <div className="sidebar_container">
      <AddressInput map={map} />
      <FilterInput applyFilters={applyFilters} />
    </div>
  );
}

export default SideBar;
