import React from "react";
import { Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';

export const CardItem = ({movie}) => {
  return (
    <Col xs="6" md="5" lg="3" className="my-1">
      <Zoom>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} className="card__image" alt="hu" />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>اسم الفيلم : {movie.original_title}</p>
            <p>تاريخ الاصدار : {movie.release_date}</p>
            <p>عدد المقيمين : {movie.vote_count}</p>
            <p>التقييم : {movie.vote_average}</p>
          </div>
        </div>
      </div>
      </Zoom>
    </Col>
  );
};

export default CardItem;