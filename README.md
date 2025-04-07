

# 🎬 Movie Watchlist App

A simple React application that allows users to search for movies using the OMDb API and save them to a personal **"Wished"** (watchlist).

## 🚀 Features

- **Search movies** by title (minimum 3 characters).
- **Add movies to a "Wished" list** (watchlist).
- **Remove movies from the Wished list**.
- **View detailed movie information**.
- **Persist the Wished list** using `localStorage`.

## 🧩 Component Structure

- `App` – Root component that manages all state and app logic.
- `Search` – Input field for typing movie queries.
- `FindedMovieList` – Renders the list of found movies.
- `WatchlistList` – Displays the saved watchlist.
- `MovieDetails` – Shows detailed info about a selected movie.
- `NavBar`, `Logo`, `NamResults`, `Main` – Layout and UI components.
- `Loader`, `ErrorMessage` – Show loading spinner and error messages.
- `useLocalStorageState` – Custom hook to sync state with localStorage.

## 📦 Tech Stack

- React (with hooks: `useState`, `useEffect`)
- OMDb API for fetching movie data
- `localStorage` for persisting the watchlist across sessions

## 📌 Notes

- API key is stored in the `KEY` constant.
- Search requests are cancelled on the fly using `AbortController` to prevent race conditions.
- Error messages are gracefully handled and displayed.
- After adding a movie to the Wished list, the search input is automatically cleared.

---

Let me know if you want this turned into a real `README.md` file or need a version with screenshots or usage examples!
