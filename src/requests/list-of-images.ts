import axios, { AxiosPromise } from "axios";
import { API_KEY } from "../constants";

const headers = {
  'Content-Type': 'application/json',
};

export const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  headers,
});

export const getListOfImages = (
  q: string,
  imageType: string,
  perPage: number,
): AxiosPromise => axiosInstance({
  method: 'GET',
  params: {
    key: API_KEY,
    q,
    image_type: imageType,
    per_page: perPage,
  },
});