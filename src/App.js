import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=74207837693808ec992c37ac2edfd112&language=ar-US&page=1"
    );

    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=74207837693808ec992c37ac2edfd112&language=ar-US&page=${page}`
    );

    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  //To Search on Api
  const search = async (text) => {
    if (text === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=74207837693808ec992c37ac2edfd112&language=ar&query=${text}&page=1&include_adult=false`
      );

      setMovies(res.data.results);
      setTotalPages(res.data.total_pages)
    }
  };
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <MoviesList movies={movies} getPage={getPage} count={totalPages} />
      </Container>
    </div>
  );
}

export default App;
