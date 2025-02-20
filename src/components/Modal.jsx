export function Modal({ onCloseMovie, movie }) {
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  return (
    <>
      <div onClick={onCloseMovie} className="overlay">
        <div className="modal">
          <button className="btn-back" onClick={onCloseMovie}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>

          <div className="img-box">
            <img src={poster} alt={`Poster of ${movie} movie`} />
          </div>
          <div className="data-box">
            <h2>{title}</h2>
            <p className="data-box__data">
              {released} &bull; {runtime}
            </p>
            <p className="data-box__genre">{genre}</p>
            <p>
              <span>⭐️ </span>
              {imdbRating} IMDb rating
            </p>
            <p className="data-box__text">
              <em>{plot}</em>
            </p>
            <p className="data-box__staring">Starring {actors}</p>
            <p>Directed by {director}</p>
          </div>
        </div>
      </div>
    </>
  );
}
