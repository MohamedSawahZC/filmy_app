import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPageMovies } from "../redux/actions/movieActions";
const PaginationItem = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  useEffect(() => {
    setCount(pages);
  }, []);

  const handlePageClick = async(data) => {
   await dispatch(getPageMovies(data.selected + 1));

  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={count}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};
export default PaginationItem;
