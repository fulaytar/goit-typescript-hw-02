import axios from "axios";
import { FetchImagesResponse } from "./types";

const API_KEY: string = "_5GkMmgOY3uWBKwoENAS_StEo0bzggOwTmwgOmyP1Ww";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (
  searchQuery: string,
  currentPage: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>("search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 10,
      client_id: API_KEY,
    },
  });
  return response.data;
};
