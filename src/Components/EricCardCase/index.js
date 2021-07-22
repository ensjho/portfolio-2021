import React from "react";
import eric from "./eric.png";

function EricCardCase() {
  return (
    <div
      style={{
        width: "370px",
        height: "600px",
        backgroundColor: "#CBCED3",
        margin: 50,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "12%",
          marginTop: "2%",
          borderRadius: "2px",
          backgroundColor: "white",
          border: "#DA1A09 solid 6px",
          textAlign: "left",
          padding: 6,
        }}
      >
        <span>Eric Jho</span>
        <span style={{ float: "right" }}> #1 </span>
        <br />
        <span>Frontend Developer & Designer</span>
        <span style={{ float: "right" }}>GEM - MT</span>
        <br />
        <span>1/1 Superfractor</span>
        <span style={{ float: "right" }}>10</span>
        <br />
        <link
          href="https://fonts.googleapis.com/css?family=Libre+Barcode+39+Extended+Text"
          rel="stylesheet"
        />
        <span style={{ float: "right" }}>23471456</span>
      </div>

      <div>
        <img
          alt={"portrait"}
          src={eric}
          style={{  width: "80%", height: "100%" , border: "solid 10px white" }}
        />
      </div>
    </div>
  );
}

export default EricCardCase;
