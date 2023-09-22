import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./PhotoGallery.css";

// Define a draggable photo component
const DraggablePhoto = ({ photo, index, movePhoto }) => {
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

  return (
    <div
      className="photo-container"
      ref={(node) => ref(drop(node))}
      style={{ cursor: "move" }}
    >
      <h3 style={{textAlign:"center"}}>{`Photo ${index}`}</h3>
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

  const movePhoto = (fromIndex, toIndex) => {
    const updatedPhotos = [...photos];
    const [movedPhoto] = updatedPhotos.splice(fromIndex, 1);
    updatedPhotos.splice(toIndex, 0, movedPhoto);
    setPhotos(updatedPhotos);
  };


  return (
    <>
      <div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <h2>Photo Gallery</h2>
          <input placeholder="Search Image" className="searchI"></input>
        </div>
        <hr />
        <DndProvider backend={HTML5Backend}>
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
              />
            ))}
          </div>
        </DndProvider>
      </div>
    </>
  );
};

export default PhotoGallery;