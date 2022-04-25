import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { VivaxIcon } from "./Icons";
import Pins from "./Pins";

function Map() {
  return (
    <>
      <MapContainer
        center={[39.73313, -105.01491]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "50vh", width: "90vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[39.73313, -105.01491]} icon={VivaxIcon}>
          <Popup>
            Vivax Pros <br /> 1050 Yuma St, Denver, CO 80204
          </Popup>
        </Marker>
        <Pins />
      </MapContainer>
    </>
  );
}

export default Map;
