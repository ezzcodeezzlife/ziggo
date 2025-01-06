import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Ensure the script is loaded only once */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8251732556629149"
        crossorigin="anonymous"
      ></script>

      {/* Ad container */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", margin: "0 auto" }} // Center the ad block
        data-ad-client="ca-pub-8251732556629149"
        data-ad-slot="3290939986"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;
