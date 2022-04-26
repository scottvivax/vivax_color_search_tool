function AddressInput() {
  return (
    <div>
      <h2>Search your Location</h2>
      <form>
        <input id="address" placeholder="Address"></input>
        <select id="state">
          <option>CO</option>
        </select>
        <input id="zip" placeholder="Zip"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddressInput;
