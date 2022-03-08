// Librarys
import axios from "axios";
import { message } from "antd";

// Utils
import Helper from "./Helper";
import { API_URL } from "./credentials";

// Get movies from API
async function getMovies({ setGroupedMovies }) {
	try {
		const url = `${API_URL}/api/movies`
		const res = await axios.get(url);

		const { movies } = res.data;

		const groupedMovies = Helper.groupMovies(movies);

		// Set grouped movies for show it
		setGroupedMovies({
			movies: movies,
			groupedMovies: groupedMovies,
		});
	} catch(e) {
		return message.error("An error ocurred for get the movies")
	}
}

// Search movies from API
async function searchMovies({ query }) {
	try {
		const url = `${API_URL}/api/search?q=${query}`
		const res = await axios.post(url);
		return res.data.movies;
	} catch(err) {
		return message.error("An error ocurred to search movies")
	}
}

export {
	getMovies,
	searchMovies,
}