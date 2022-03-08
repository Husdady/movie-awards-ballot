// React
import React, { useReducer } from "react";

// Context
import MoviesReducer from "./Movies.Reducer";
import MoviesContext from "./Movies.Context";
import { GET_MOVIES, ADD_MOVIE_VOTE, SET_GROUPED_MOVIES, SET_DEFAULT_MOVIES_VOTED } from "./types";

// Utils
import { getMovies } from "@utils/requests";

const MoviesState = ({ children }:{ children: React.ReactNode }) => {
	const initialState = {
		movies: [],
		moviesVoted: [],
		groupedMovies: {},
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	// Group movies
	const setGroupedMovies = (groupedMovies:any) => {
		return dispatch({
			type: GET_MOVIES,
			payload: groupedMovies,
		})
	}

	const contextValue = {
		...state,
		// Get all movies from API
		getMovies: function() {
			return getMovies({ setGroupedMovies })
		},

		// Set default votes for all movies
		setDefaultMoviesVoted: function() {
			return dispatch({ type: SET_DEFAULT_MOVIES_VOTED })
		},

		// Add movie vote
		addMovieVote: function(movie:any) {
			return dispatch({
				type: ADD_MOVIE_VOTE,
				payload: movie,
			})
		},

		// Update grouped movies
		setGroupedMovies: function(moviesFiltered:object[]) {
			return dispatch({
				type: SET_GROUPED_MOVIES,
				payload: moviesFiltered,
			})
		}
	}

	return (
		<MoviesContext.Provider value={contextValue}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesState;
