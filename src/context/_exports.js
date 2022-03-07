import MoviesState from "./Movies.State";
import MoviesContext from "./Movies.Context";
import MoviesReducer from "./Movies.Reducer";
import { SET_GROUPED_MOVIES } from "./types";

const types = {
	SET_GROUPED_MOVIES
}

export {
	types,
	MoviesState,
	MoviesContext,
	MoviesReducer,
}