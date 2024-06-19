import React from "react";

function More() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="MoreDetails"
        style={{
          height: "80vh",
          width: "30vw",
          background: "#00006A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginLeft: "3vw" }}>RC Group Collection </h1>
        <h4>Client Information:</h4>
        <div
          style={{
            display: "flex",
            height: "30vh",
            width: "30vw",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "3vw",
            marginLeft: "3vw",
          }}
        >
          <p>Reatailer Name: Saha Automobiles </p>
          <p>Retailer Id:</p>
          <p>Payment mode:</p>
          <p>Invoice No. : 1234</p>
          <p>Date Issued: 12</p>
        </div>
      </div>
    </div>
  );
}

export default More;
