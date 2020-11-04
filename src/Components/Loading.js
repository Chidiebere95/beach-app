import React from "react";
import img from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={img}></img>
    </div>
  );
}
