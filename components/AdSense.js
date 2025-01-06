import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AdSense = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
        try {
          // Ensure the ad is initialized only once
          if (!adRef.current.dataset.adLoaded) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adRef.current.dataset.adLoaded = "true";
          }
        } catch (err) {
          console.error("AdSense error:", err);
        }
      }
    };

    // Use a timeout to ensure DOM is fully rendered
    const timeout = setTimeout(loadAd, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ textAlign: "center", minHeight: "100px", width: '100%', }}>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8251732556629149"
        crossOrigin="anonymous"
      ></script>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          textAlign: "center",
          margin: "0 auto",
        }}
        data-ad-client="ca-pub-8251732556629149"
        data-ad-slot="3290939986"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AdSense), { ssr: false });
