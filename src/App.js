import { Container, useAccordionButton } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=24607300c5356cef0258d85495d4fbf2"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  //get carrent page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=ar&api_key=24607300c5356cef0258d85495d4fbf2&${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=24607300c5356cef0258d85495d4fbf2&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
