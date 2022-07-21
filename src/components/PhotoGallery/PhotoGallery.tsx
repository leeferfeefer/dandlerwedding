import React from 'react';
import "./PhotoGallery.css";
import { useMediaQuery } from 'react-responsive';
import Gallery from "react-photo-gallery";
import { GalleryPhotos, shuffle } from "../../Globals";
import Carousel, { Modal, ModalGateway } from "react-images";

type PhotoGalleryProps = {}
export const PhotoGallery = (props: PhotoGalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [ currentImageIndex, setCurrentImageIndex ] = React.useState(0);
  const [ isViewerOpen, setIsViewerOpen ] = React.useState(false);
  const [ photos, setPhotos ] = React.useState([]);

  const openLightbox = React.useCallback((event, { photo, index }) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImageIndex(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    setPhotos(shuffle(GalleryPhotos));
  }, []);

  return (
    <div style={{height: "100%", width: "100%", position: "relative", margin: "5px"}}>
      <Gallery photos={photos} direction={"column"} margin={5} columns={5} onClick={openLightbox}/>
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImageIndex}
              views={photos.map((x: any) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};