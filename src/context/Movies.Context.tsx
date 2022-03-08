// React
import { createContext } from "react";

type MoviesContextProps = {
	movies: object[],
	moviesVoted: object[],
	groupedMovies: any,
	getMovies: Function,
	addMovieVote: Function,
	setDefaultMoviesVoted: Function,
	setGroupedMovies: Function,
}

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export default MoviesContext;
