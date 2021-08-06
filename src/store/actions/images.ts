import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

// Types
import { IImageItem } from "../../types/imageItem";

// Requests
import { getListOfImages } from '../../requests/list-of-images';

export enum ImagesActionTypes {
  SET_IMAGES_LIST = 'SET_IMAGES_LIST',
  FILTER_BY_LIKES = 'FILTER_BY_LIKES',
  FILTER_BY_COMMENTS = 'FILTER_BY_COMMENTS',
}

interface ISetImageAction {
  type: ImagesActionTypes.SET_IMAGES_LIST,
  payload: IImageItem[],
}

export const setImagesList = (payload: IImageItem[]): ISetImageAction => ({
  type: ImagesActionTypes.SET_IMAGES_LIST,
  payload,
});

interface IFetchImagesArguments {
  q: string;
  image_type: string;
  per_page: number;
}

export const fetchImages = ({ q, image_type, per_page }: IFetchImagesArguments) => {
  return async (dispatch: Dispatch) => {
    const { data: { hits } }: AxiosResponse = await getListOfImages(q, image_type, per_page);
    return dispatch(setImagesList(hits));
  };
}

interface IFilterByLikes {
  type: ImagesActionTypes.FILTER_BY_LIKES,
}

export const filterByLikes = (): IFilterByLikes => ({
  type: ImagesActionTypes.FILTER_BY_LIKES,
});

interface IFilterByComments {
  type: ImagesActionTypes.FILTER_BY_COMMENTS,
}

export const filterByComments = (): IFilterByComments => ({
  type: ImagesActionTypes.FILTER_BY_COMMENTS,
});

export type ImagesActionsType = ISetImageAction | IFilterByLikes | IFilterByComments;