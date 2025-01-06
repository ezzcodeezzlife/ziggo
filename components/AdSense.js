import React from "react";
import dynamic from "next/dynamic";

const AdSense = () => {
  return (
    <div style={{ textAlign: "center", minHeight: "100px", width: '100%',  }}>
      <ins
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
