import AddressInput from "./AddressInput";
import FilterInput from "./FilterInput";

function SideBar({ applyFilters }) {
  return (
    <div className="sidebar_container">
      <AddressInput />
      <FilterInput applyFilters={applyFilters} />
    </div>
  );
}

export default SideBar;
