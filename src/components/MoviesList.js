import React from "react";
import { Row } from "react-bootstrap";
import CardItem from "./CardItem";
import PaginationItem from "./Pagination";
import { useState,useEffect } from "react";
import { getAllMovie } from "../redux/actions/movieActions";
import { useSelector,useDispatch } from "react-redux";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);
  useEffect(() => {
    setMovies(data.movies);
  }, [data.movies]);
  return (
    <Row className="mt-3">
      {movies.length > 0 ? (
        movies.map((movie) => {
          return <CardItem movie={movie} />;
        })
      ) : (
        <h3 className="text-center p-5">لا يوجد افلام</h3>
      )}
      {movies.length > 0 ? (
        <PaginationItem  />
      ) : null}
    </Row>
  );
};

export default MoviesList;
