import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { fetchImages } from "../../store/actions/images";

// Components
import ImageCard from "../Card/Card";

// Types
import { IImageItem } from "../../types/imageItem";
import { RootState } from "../../store/reducers";

// Styles
import styles from "./styles.module.scss";

const CardsGrid: React.FC = () => {
  const dispatch = useDispatch();
  const imagesList = useSelector(({ images }: RootState) => images.imagesList);

  useEffect(() => {
    dispatch(fetchImages({q: 'cats', per_page: 100, image_type: 'all'}));
  }, [dispatch]);

  return (
    <div className={styles.cardsGrid}>
      {
        imagesList?.map((image: IImageItem) => (
          <ImageCard
            key={image.id}
            id={image.id}
            imageUrl={image.largeImageURL}
            tags={image.tags}
            comments={image.comments}
            likes={image.likes}
          />
        ))
      }
    </div>
  );
}

export default CardsGrid;