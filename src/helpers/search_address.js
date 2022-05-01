function search_address(map) {
  let address = document.getElementById("address").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${address.replace(
      " ",
      "+"
    )}+${state}+${zip}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.length === 0) {
        window.alert(
          "Address was not located, please check the entered value."
        );
      } else {
        map.setView([data[0].lat, data[0].lon], 16);
      }
    });
}

export default search_address;
