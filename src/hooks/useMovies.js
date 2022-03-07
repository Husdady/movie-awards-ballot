// React
import { useContext } from "react";

// Context
import { MoviesContext } from "@context"

export default function useMovies() {
	const context = useContext(MoviesContext);
	return context;
}
