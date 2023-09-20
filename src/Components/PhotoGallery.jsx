import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend"; // Import TouchBackend for mobile
import "./PhotoGallery.css";

// Define a draggable photo component
const DraggablePhoto = ({ photo, index, movePhoto, isMobile }) => {
  const [, ref] = useDrag({
    type: "PHOTO",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "PHOTO",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        movePhoto(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const containerClass = `photo-container ${isMobile ? "mobile" : ""}`; // Apply a "mobile" class for mobile devices

  return (
    <div
      className={containerClass}
      ref={(node) => ref(drop(node))}
      style={{ cursor: isMobile ? "grab" : "move" }} // Use "grab" cursor for mobile
    >
      <img className="photo-image" src={photo} alt={`Photo ${index}`} />
    </div>
  );
};

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    // Add more image paths here
  ]);

  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px (you can adjust this value)

  const movePhoto = (fromIndex, toIndex) => {
    const updatedPhotos = [...photos];
    const [movedPhoto] = updatedPhotos.splice(fromIndex, 1);
    updatedPhotos.splice(toIndex, 0, movedPhoto);
    setPhotos(updatedPhotos);
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Photo Gallery</h2>
        <hr />
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {photos.map((photo, index) => (
              <DraggablePhoto
                key={index}
                photo={photo}
                index={index}
                movePhoto={movePhoto}
                isMobile={isMobile}
              />
            ))}
          </div>
        </DndProvider>
      </div>
    </>
  );
};

export default PhotoGallery;
