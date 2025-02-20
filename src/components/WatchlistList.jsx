import { WatchMovie } from "./WatchMovie";

export function WatchlistList({ wished, onSelectMovie, onDeleteWatched }) {
	return (
		<div className="watchlist-list">
			<h2>My watchlist</h2>
			<ul>
				{wished?.map((movie) => (
					<WatchMovie
						onDeleteWatched={onDeleteWatched}
						onSelectMovie={onSelectMovie}
						movie={movie}
						key={movie.imdbID}
					/>
				))}
			</ul>
		</div>
	);
}
