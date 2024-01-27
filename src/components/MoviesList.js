import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";

function MoviesList({ movies, getPage, pageCount }) {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام</h2>
      )}
      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
}

export default MoviesList;
