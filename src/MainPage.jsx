import React from "react";
import { useState } from "react";
import UploadForm from "./Components/UploadForm";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import "./MainPage.css";
import Title from "./Components/Title";

function Actual() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </>
  );
}

export default Actual;
