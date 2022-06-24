import React from 'react';
import "./PhotoGallery.css";
import { useMediaQuery } from 'react-responsive';
import Gallery from "react-photo-gallery";

type PhotoGalleryProps = {

}

export const PhotoGallery = (props: PhotoGalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });



  return (
    <div>
      {/* <Gallery photos={photos} direction={"column"} /> */}
    </div>
  );
};