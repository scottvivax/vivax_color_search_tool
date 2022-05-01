function get_current_loc(map) {
  navigator.geolocation.getCurrentPosition(
    (loc) => {
      map.setView([loc.coords.latitude, loc.coords.longitude], 16);
    },
    () => {
      window.alert(
        "You location could not be determined. Please enter your address."
      );
    }
  );
}

export default get_current_loc;
