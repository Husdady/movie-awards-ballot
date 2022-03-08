// Types
import { GET_MOVIES, ADD_MOVIE_VOTE, SET_GROUPED_MOVIES, SET_DEFAULT_MOVIES_VOTED } from "./types"; 

type MoviesState = {
	movies: object[],
	moviesVoted: object[],
	groupedMovies: any,
}

type Action = {
	type: Symbol,
	payload?: any,
}

const MoviesReducer = (state:MoviesState, action:Action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_MOVIES:
			return {
				...state,
				movies: payload.movies,
				groupedMovies: payload.groupedMovies,
			}

		case SET_GROUPED_MOVIES:
			return {
				...state,
				groupedMovies: payload,
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

export type { MoviesState };
export default MoviesReducer;
