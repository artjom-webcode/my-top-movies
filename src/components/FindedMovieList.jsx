import { FindedMovie } from "./FindedMovie";

export function FindedMovieList({ movies, onAddToWishedList, wished }) {
  return (
    <div className="finded-movie-list">
      <ul>
        {movies?.map((movie) => (
          <FindedMovie
            wished={wished}
            onAddToWishedList={onAddToWishedList}
            movie={movie}
            key={movie.imdbID}
          />
        ))}
      </ul>
    </div>
  );
}
