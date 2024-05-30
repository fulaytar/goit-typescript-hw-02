import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { UnsplashImage } from "../../types";



interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <ImageCard key={image.id} openModal={openModal} image={image} />
      ))}
    </ul>
  );
};
export default ImageGallery;
