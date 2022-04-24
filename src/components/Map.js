import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import pins from "../data/watson_color_data_2022.json";

function Map() {
  let map = useMap();
  let bounds = map.getBounds().toBBoxString().split(",");
  console.log(bounds);

  return (
    <>
      <MapContainer
        id="map"
        center={[39.73313, -105.01491]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "50vh", width: "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[39.73313, -105.01491]}>
          <Popup>
            Vivax Pros <br /> 1050 Yuma St, Denver, CO 80204
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
