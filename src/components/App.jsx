import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { NamResults } from "./NamResults";
import { Main } from "./Main";
import { FindedMovieList } from "./FindedMovieList";
import { WatchlistList } from "./WatchlistList";
import { MovieDetails } from "./MovieDetails";
import { useLocalStorageState } from "./UseLocalStorageState";

export const KEY = "a4169e6f";

export default function App() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	const [wished, setWished] = useLocalStorageState(
		[
			{
				imdbID: "tt1375666",
				Title: "Inception",
				Year: "2010",
				Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
			},
			{
				imdbID: "tt0133093",
				Title: "The Matrix",
				Year: "1999",
				Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			},
			{
				imdbID: "tt6751668",
				Title: "Parasite",
				Year: "2019",
				Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
			},
		],
		"watched"
	);

	function handleAddToWishedList(movie) {
		setWished(function (wished) {
			console.dir(wished);
			return [...wished, movie];
		});
		setQuery("");
	}

	function handleSelectedMovie(id) {
		setSelectedId((selectedId) => (id === selectedId ? null : id));
	}

	function handleCloseMovie() {
		setSelectedId(null);
	}

	function handleDeleteWatched(id) {
		setWished((wished) => wished.filter((movie) => movie.imdbID !== id));
	}

	useEffect(
		function () {
			const controller = new AbortController();
			async function fetshMovies() {
				try {
					setIsLoading(true);
					setError("");
					const res = await fetch(
						`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
						{
							signal: controller.signal,
						}
					);
					if (!res.ok)
						throw new Error(
							"Something went wrong with fetching movies!!!!!"
						);

					const data = await res.json();
					if (data.Response === "False") {
						throw new Error("Movie not found");
					}

					setMovies(data.Search);
					setError("");
				} catch (err) {
					if (err.name !== "AbortError") {
						console.log(err.message);
						setError(err.message);
					}
				} finally {
					setIsLoading(false);
				}
			}
			if (query.length < 3) {
				setMovies([]);
				setError("");
				return;
			}
			fetshMovies();
			return function () {
				controller.abort();
			};
		},
		[query]
	);

	return (
		<>
			<NavBar>
				<Logo />
				<div className="search-box">
					<Search query={query} setQuery={setQuery} />
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<FindedMovieList
							wished={wished}
							onAddToWishedList={handleAddToWishedList}
							movies={movies}
						/>
					)}
					{error && <ErrorMessage message={error} />}
				</div>
				<NamResults movies={movies} />
			</NavBar>

			<Main>
				<WatchlistList
					onDeleteWatched={handleDeleteWatched}
					onSelectMovie={handleSelectedMovie}
					wished={wished}
				/>
				{selectedId && (
					<MovieDetails
						isLoading={isLoading}
						selectedId={selectedId}
						onCloseMovie={handleCloseMovie}
					/>
				)}
			</Main>
		</>
	);
}
