import { UnsplashImage } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  openModal: (imageUrl: string) => void;
  image: UnsplashImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const handleClick = (): void => {
    openModal(image.urls.regular);
  };

  return (
    <li>
      {
        <img
          className={css.img}
          src={image.urls.small}
          alt={image.alt_description}
          width={"300px"}
          onClick={handleClick}
        />
      }
    </li>
  );
};

export default ImageCard;
