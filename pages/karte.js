import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Skip SSR for Leaflet, which has a dependency on `window`
const DynamicMap = dynamic(() => import("../components/mapComponent.js"), {
  ssr: false,
});

function HomePage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DynamicMap />
    </div>
  );
}

export default HomePage;
