// Types
import { ADD_MOVIE_VOTE, SET_GROUPED_MOVIES, SET_DEFAULT_MOVIES_VOTED } from "./types"; 

type MoviesState = {
	movies: object[],
	moviesVoted: object[],
	moviesFiltered: object[],
	groupedMovies: any,
	searchValue: String,
}

type Action = {
	type: Symbol,
	payload?: any,
}

export type { MoviesState };
export default (state:MoviesState, action:Action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_GROUPED_MOVIES:
			return {
				...state,
				movies: payload.movies,
				groupedMovies: payload.groupedMovies,
			}

		case ADD_MOVIE_VOTE:
			return {
				...state,
				moviesVoted: [...state.moviesVoted, action.payload]
			}

		case SET_DEFAULT_MOVIES_VOTED:
			return {
				...state,
				moviesVoted: [],
			}

		default:
			return state;
	}
}