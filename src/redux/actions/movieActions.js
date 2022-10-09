import { ALLMOVIES } from "../types/moviesType";
import axios from "axios";
import { GETALLMOVIES } from "../types/moviesType";
export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(GETALLMOVIES);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getSearchMovies = (text) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=74207837693808ec992c37ac2edfd112&language=ar&query=${text}&page=1&include_adult=false`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPageMovies = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=74207837693808ec992c37ac2edfd112&language=ar-US&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
