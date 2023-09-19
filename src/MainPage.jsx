import React from "react";
import { useState } from "react";
import PhotoGallery from "./Components/PhotoGallery";

function Actual() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <PhotoGallery/>
    </>
  );
}

export default Actual;
