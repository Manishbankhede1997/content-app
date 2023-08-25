import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LineGraph = () => {
  //   const [worldData, setWorldData] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  //   const [graphData, setGraphData] = useState({});

  useEffect(() => {
    // fetch("https://disease.sh/v3/covid-19/all")
    //   .then((response) => response.json())
    //   .then((data) => setWorldData(data));

    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => setCountriesData(data));

    // fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    //   .then((response) => response.json())
    //   .then((data) => setGraphData(data));
  }, []);

  const countryMarkers = countriesData.map((country) => (
    <Marker
      key={country.country}
      position={[country.countryInfo.lat, country.countryInfo.long]}
    >
      <Popup>
        <div>
          <p>{country.country}</p>
          <p>Active Cases: {country.active}</p>
          <p>Recovered Cases: {country.recovered}</p>
          <p>Deaths: {country.deaths}</p>
        </div>
      </Popup>
    </Marker>
  ));

  //   const graphOptions = {
  //     scales: {
  //       x: {
  //         type: "time",
  //         time: {
  //           unit: "day",
  //         },
  //       },
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };

  //   const graphDataset = {
  //     labels: Object.keys(graphData.cases || {}),
  //     datasets: [
  //       {
  //         label: "Cases",
  //         data: Object.values(graphData.cases || {}),
  //         fill: false,
  //         borderColor: "blue",
  //       },
  //     ],
  //   };

  return (
    <div>
      <h1>COVID-19 LineGraph</h1>
      {/* <Line data={graphDataset} /> */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
        />
        {countryMarkers}
      </MapContainer>
    </div>
  );
};

export default LineGraph;
