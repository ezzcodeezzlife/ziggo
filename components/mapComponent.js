import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";

const myIcon = L.icon({
  iconUrl: "./icon.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const MapComponent = () => {
  const mapRef = useRef(null);
  const clusterGroupRef = useRef(null);
  const markersRef = useRef({});
  const [lastBBox, setLastBBox] = useState("");

  const fetchMarkers = (location = null, zoomLevel = 13) => {
    location = location || [50.11, 8.68]; // Default location

    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map("map", {
        minZoom: 10,
        maxZoom: 18,
      }).setView(location, zoomLevel);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution: "©OpenStreetMap, ©CartoDB",
        }
      ).addTo(mapRef.current);

      clusterGroupRef.current = L.markerClusterGroup();
      mapRef.current.addLayer(clusterGroupRef.current);

      mapRef.current.on("moveend", fetchMarkers);
    }

    const newBounds = mapRef.current.getBounds();
    const bbox =
      newBounds.getSouth() +
      "," +
      newBounds.getWest() +
      "," +
      newBounds.getNorth() +
      "," +
      newBounds.getEast();

    if (bbox !== lastBBox) {
      const oldBounds = lastBBox ? L.latLngBounds(
        ...lastBBox.split(",").map((coord) => parseFloat(coord))
      ) : null;
      const diffBounds = oldBounds ? newBounds.subtract(oldBounds) : newBounds;

      const diffBbox =
        diffBounds.getSouth() +
        "," +
        diffBounds.getWest() +
        "," +
        diffBounds.getNorth() +
        "," +
        diffBounds.getEast();

      fetch(
        "https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=vending_machine][vending=cigarettes](" +
          diffBbox +
          ");out;"
      )
        .then((response) => response.json())
        .then((data) => {
          const newMarkers = {};
          data.elements.forEach((node) => {
            const key = `${node.lat}-${node.lon}`;
            const marker =
              markersRef.current[key] ||
              L.marker([node.lat, node.lon], { icon: myIcon });

            marker.bindPopup(
              '<ul style="list-style-type: none; padding: 0; margin: 0">' +
                Object.keys(node.tags)
                  .map(function (key) {
                    return (
                      '<li style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; color: #333;">' +
                      key +
                      ': <span style="font-weight: bold;">' +
                      node.tags[key] +
                      "</span></li>"
                    );
                  })
                  .join("") +
                "</ul>"
            );

            if (newBounds.contains(marker.getLatLng())) {
              newMarkers[key] = marker;
              if (!markersRef.current[key]) {
                clusterGroupRef.current.addLayer(marker);
              }
            }
          });

          Object.keys(markersRef.current).forEach((key) => {
            if (!newMarkers[key]) {
              clusterGroupRef.current.removeLayer(markersRef.current[key]);
            }
          });

          markersRef.current = newMarkers;
          setLastBBox(bbox);
        });
    }
  };

  useEffect(() => {
    fetchMarkers(); // Call fetchMarkers with the default location and zoom level

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          mapRef.current.setView(location, 13);
        },
        (error) => {
          console.error("Error obtaining geolocation", error);
        }
      );
    } else {
      console.error("Geolocation API not supported in this browser");
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapComponent;