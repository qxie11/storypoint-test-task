import { IImageItem } from '../../types/imageItem';
import { ImagesActionsType, ImagesActionTypes } from '../actions/images';

interface IImagesState {
  imagesList: null | IImageItem[];
}

const initialState: IImagesState = {
  imagesList: null,
}

const images = (state = initialState, action: ImagesActionsType): IImagesState => {
  switch(action.type) {
    case ImagesActionTypes.SET_IMAGES_LIST:
      return {
        ...state,
        imagesList: action.payload,
      }
    case ImagesActionTypes.FILTER_BY_LIKES:
      const sortedImagesByLikes = [...state.imagesList as IImageItem[]]?.sort((a, b) => b.likes - a.likes);
      return {
        ...state,
        imagesList: sortedImagesByLikes,
      }
    case ImagesActionTypes.FILTER_BY_COMMENTS:
      const sortedImagesByComments = [...state.imagesList as IImageItem[]]?.sort((a, b) => b.comments - a.comments);
      return {
        ...state,
        imagesList: sortedImagesByComments,
      }
    default:
      return state;
  }
};

export default images;