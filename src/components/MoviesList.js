import React from "react";
import { Row } from "react-bootstrap";
import CardItem from "./CardItem";
import PaginationItem from "./Pagination";
const MoviesList = ({ movies,getPage,count }) => {
  return (
    <Row className="mt-3">
      {movies.length > 0 ? (
        movies.map((movie) => {
          return <CardItem movie={movie} />;
        })
      ) : (
        <h3 className="text-center p-5">لا يوجد افلام</h3>
      )}
      <PaginationItem getPage={getPage} count={count} />
    </Row>
  );
};

export default MoviesList;
