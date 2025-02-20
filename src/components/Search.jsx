import { useRef } from "react";
import { useKey } from "./UseKey";

export function Search({ query, setQuery }) {
	const inputEl = useRef(null);
	useKey("Enter", function () {
		if (document.activeElement === inputEl.current) return;
		inputEl.current.focus();
		setQuery("");
	});

	return (
		<input
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			className="search"
			type="text"
			placeholder="Search movies..."
			ref={inputEl}
		></input>
	);
}
