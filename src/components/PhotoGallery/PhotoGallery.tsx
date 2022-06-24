import React from 'react';
import "./PhotoGallery.css";
import { useMediaQuery } from 'react-responsive';
import Gallery from "react-photo-gallery";
import { GalleryPhotos, shuffle } from "../../Globals";

type PhotoGalleryProps = {}
export const PhotoGallery = (props: PhotoGalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{height: "100%", width: "100%", position: "relative", margin: "5px"}}>
      <Gallery photos={shuffle(GalleryPhotos)} direction={"column"} margin={5} columns={5}/>
    </div>
  );
};