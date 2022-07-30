import React from 'react';
import '../../App.css';
import './Gallery.css';
import { PhotoGallery } from "../../components/PhotoGallery/PhotoGallery";
import { useMediaQuery } from 'react-responsive';
import { Card } from "../../components/Card/Card";

type GalleryProps = {

};

export const Gallery = (props: GalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container">
      <div className='gallery-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <div className='gallery-header' style={ isMobile ? { fontSize: "75px", marginTop: "40px", marginBottom: "40px"} : undefined}>
          Gallery
        </div>
        <Card 
          withInnerMargin={false}
          style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "#CB683F", width: "90%"}}
        >
          <PhotoGallery/>
        </Card>
      </div>
    </div>
  );
}