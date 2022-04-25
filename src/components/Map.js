import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "../style.css";
import { useState } from "react";
import { VivaxIcon } from "./Icons";
import Pins from "./Pins";

function Map() {
  const [map, setMap] = useState(null);
  return (
    <>
      <MapContainer
        center={[39.73313, -105.01491]}
        zoom={16}
        minZoom={14}
        scrollWheelZoom={true}
        ref={setMap}
        className="map_container"
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
        {map ? <Pins map={map} /> : null}
      </MapContainer>
    </>
  );
}

export default Map;
