import { Marker, useMap } from "react-leaflet";
import bounded_pins from "../helpers/bounded_pins";
import pins from "../data/watson_color_data_2022.json";

function Pins() {
  let map = useMap();
  let bounded_arr;
  let bounds = map.getBounds().toBBoxString().split(",");
  bounded_arr = bounded_pins(bounds, pins);

  return (
    <>
      {bounded_arr.map((pin) => {
        return (
          <Marker position={[pin.Lat, pin.Lon]} key={pin.KF_Job_ID}></Marker>
        );
      })}
    </>
  );
}

export default Pins;
