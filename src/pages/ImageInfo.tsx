import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import querystring from "querystring";
import Typography from '@material-ui/core/Typography';

// Actions
import { fetchImages } from "../store/actions/images";

// Types
import { RootState } from "../store/reducers";
import { IImageItem } from "../types/imageItem";

const ImageInfo: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const imagesList = useSelector(({ images }: RootState) => images.imagesList);

  const [currentImage, setCurrentImage] = useState<undefined | IImageItem>();

  useEffect(() => {
    if (!imagesList) {
      dispatch(fetchImages({q: 'cats', per_page: 100, image_type: 'all'}));
    }
  }, [dispatch, imagesList]);

  useEffect(() => {
    if (imagesList) {
      const paramsId = +querystring.parse(location.search.replace('?', ''))?.id;
      const curImage = imagesList.find((image: IImageItem) => image.id === paramsId);
      setCurrentImage(curImage);
    }
  }, [imagesList, location.search]);

  return (
    <div>
      {
        currentImage && Object.entries(currentImage).map(([key, field]) => (
          <div>
            <Typography variant="h2" component="h2">
              {key}:
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              {field}
            </Typography>
          </div>)
        )
      }
    </div>
  );
}

export default ImageInfo;