import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  //get movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?language=ar&api_key=24607300c5356cef0258d85495d4fbf2`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img className="img-movie w-30" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="ascad" />

            <div className="card-details border-bottom">
              <p className="card-text-details border-bottom">
                اسم الفيلم:{movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد التقيمات :{movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-colum align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">وصف الفيلم :</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              {" "}
              الرئيسية
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              {" "}
              مشاهدة
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
