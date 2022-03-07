// React
import React, { useReducer } from "react";

// Context
import MoviesReducer from "./Movies.Reducer";
import MoviesContext from "./Movies.Context";
import { ADD_MOVIE_VOTE, SET_GROUPED_MOVIES, SET_DEFAULT_MOVIES_VOTED } from "./types";

// Utils
import { getMovies } from "@utils/requests";

const MoviesState = ({ children }:{ children: React.ReactNode }) => {
	const initialState = {
		movies: [],
		moviesVoted: [],
		moviesFiltered: [],
		groupedMovies: {},
		searchValue: "",
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	const setGroupedMovies = ({ movies, groupedMovies }: {movies: object[], groupedMovies: any}) => {
		return dispatch({
			type: SET_GROUPED_MOVIES,
			payload: {
				movies: movies,
				groupedMovies: groupedMovies,
			}
		})
	}

	const contextValue = {
		...state,
		getMovies: function() {
			return getMovies({ setGroupedMovies })
		},
		setDefaultMoviesVoted: function() {
			return dispatch({ type: SET_DEFAULT_MOVIES_VOTED })
		},
		addMovieVote: function(movie:any) {
			return dispatch({
				type: ADD_MOVIE_VOTE,
				payload: movie,
			})
		},
	}

	return (
		<MoviesContext.Provider value={contextValue}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesState;
