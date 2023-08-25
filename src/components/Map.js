import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      setMapData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">COVID-19 Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mapData.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
