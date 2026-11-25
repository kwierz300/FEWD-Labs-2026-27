import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { cafeData } from "../data/locations";

const icon = new Icon({
    iconUrl: import.meta.env.BASE_URL + "markerIcon.svg",
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
});

const Map = () => {
    const position = [55.86639, -4.24919];
    const [activeCafe, setActiveCafe] = useState(null);

    return (
        <>
            <MapContainer center={position} zoom={9} scrollWheelZoom={true} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cafeData.map(cafe => (
                    <Marker
                        key={cafe.properties.cafe_id}
                        position={cafe.geometry.coordinates}
                        icon={icon}
                        eventHandlers={{ click: () => setActiveCafe(cafe) }}
                    >
                        <Popup className="popup">{cafe.properties.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <div className="info border rounded p-3 mt-3" aria-live="polite">
                {activeCafe ? (
                    <>
                        <h3 className="h5">{activeCafe.properties.name}</h3>
                        <p className="mb-0">{activeCafe.properties.desc}</p>
                    </>
                ) : <p className="mb-0">Select a café on the map to see its details.</p>}
            </div>
        </>
    );
};

export default Map;
