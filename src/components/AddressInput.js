import search_address from "../helpers/search_address";
import get_current_loc from "../helpers/get_current_loc";

function AddressInput({ map }) {
  return (
    <div>
      <h2>Search your Location</h2>
      <form>
        <input id="address" placeholder="Address"></input>
        <select id="state">
          <option>CO</option>
        </select>
        <input id="zip" placeholder="Zip"></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            search_address(map);
          }}
        >
          Submit
        </button>
      </form>
      <p
        onClick={(event) => {
          event.preventDefault();
          get_current_loc(map);
        }}
      >
        Use your device's location!
      </p>
    </div>
  );
}

export default AddressInput;
