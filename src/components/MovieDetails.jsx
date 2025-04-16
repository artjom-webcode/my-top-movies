import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { Modal } from "./Modal";
import { KEY } from "./App";

export function MovieDetails({ onCloseMovie, selectedId }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
        const data = await res.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  return (
    // <Modal movie={movie} onCloseMovie={onCloseMovie} />
    <div className="details">
      <div className="overlay">
        {isLoading ? <Loader /> : <Modal movie={movie} onCloseMovie={onCloseMovie} />}
      </div>
    </div>
  );
}
