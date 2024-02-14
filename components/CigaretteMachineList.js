import React, { useEffect, useState } from "react";

const CigaretteMachineList = ({ map, markers }) => {
  const [sortedMachines, setSortedMachines] = useState([]);

  useEffect(() => {
    const updateSortedMachines = () => {
      if (map && map.getCenter) {
        const userLocation = map.getCenter();
        const sortedMarkers = Object.values(markers).sort((a, b) => {
          const distanceToA = a.getLatLng().distanceTo(userLocation);
          const distanceToB = b.getLatLng().distanceTo(userLocation);
          return distanceToA - distanceToB;
        });

        setSortedMachines(sortedMarkers);
      }
    };

    if (map) {
      updateSortedMachines();

      const handleMoveEnd = () => {
        updateSortedMachines();
      };

      map.on("moveend", handleMoveEnd);

      return () => {
        map.off("moveend", handleMoveEnd);
      };
    }
  }, [map, markers]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>Zigarettenautomaten in der Nähe</h2>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {sortedMachines.map((marker, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            <strong>{marker.getPopup().getContent()}</strong> - Entfernung:{" "}
            {marker.getLatLng().distanceTo(map.getCenter()).toFixed(2)} Meter
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CigaretteMachineList;
