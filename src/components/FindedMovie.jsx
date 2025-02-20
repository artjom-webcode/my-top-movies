export function FindedMovie({ movie, onAddToWishedList, wished }) {
  const isWished = wished.map((movie) => movie.imdbID).includes(movie.imdbID);

  return (
    <li className="finded-movie">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="finded-movie-flex">{/* <p>⭐️ 8.8</p> */}</div>
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>

      {!isWished ? (
        <button onClick={() => onAddToWishedList(movie)}>+add to watchlist</button>
      ) : (
        <button>added</button>
      )}
    </li>
  );
}
