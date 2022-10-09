import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/cinema.png";
import { useDispatch } from "react-redux";
import { getAllMovie, getSearchMovies } from "../redux/actions/movieActions";
import axios from "axios";
const NavBar = () => {
  const onSearch = (text) => {
    search(text);
  };
  const dispatch = useDispatch();
  //To Search on Api
  const search = async (text) => {
    if (text === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getSearchMovies(text));
    }
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={image} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lang="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i class="fa fa-search"></i>

              <input
                type="text"
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
                className="form-control"
                placeholder="ابحث من هنا"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
