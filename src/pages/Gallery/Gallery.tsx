import React from 'react';
import '../../App.css';
import './Gallery.css';
import { PhotoGallery } from "../../components/PhotoGallery/PhotoGallery";
import { useMediaQuery } from 'react-responsive';

type GalleryProps = {

};

export const Gallery = (props: GalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <div className="container">
      <div className='gallery-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <PhotoGallery/>
      </div>
    </div>
  );
}