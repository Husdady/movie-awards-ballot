// React
import { createContext } from "react";

type MoviesContextProps = {
	movies: object[],
	moviesVoted: object[],
	moviesFiltered: object[],
	groupedMovies: any,
	searchValue: String,
	getMovies: Function,
	addMovieVote: Function,
	setDefaultMoviesVoted: Function,
}

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export default MoviesContext;
