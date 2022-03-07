// Utils
import { isArray, isString, isUndefined } from "./Validations";

class Helper {
	static randomIntFromInterval(min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min)
	}

	static generateArray(total) {
  	return Array.from(Array(total).map((_, i) => i));
	}

	static convertEmptySpacesInHyphens(value) {
  	if (!value || !isString(value)) return;

  	return value.replace(/\s+/gim, "-").toLowerCase();
	}

	static groupMovies(movies) {
		return movies.reduce((acc, movie) => {
			const groupMovies = [];
			const { category } = movie;

			const existMoviesInAcc = !isUndefined(acc[category]) && isArray(acc[category].movies);

			if (existMoviesInAcc) {
				groupMovies.push(...acc[category].movies)
			}

			groupMovies.push(movie);

			return {
				...acc,
				[category]: {
					movies: groupMovies
				}
			}
		}, {});
	}
}

export default Helper;
