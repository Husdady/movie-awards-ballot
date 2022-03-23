// React
import React, { Fragment, useEffect } from 'react';

// Components
import Movie from "./Movie";
import SubmitVotes from "./SubmitVotes";
import { Carousel, Skeletons } from "@common";

// Librarys
import { Typography } from "antd";
import { SwiperSlide } from "swiper/react";

// Hooks
import { useMovies } from "@hooks";

// Utils
import Helper from "@utils/Helper";
import { isEmptyArray, isEmptyObject } from "@utils/Validations";

const { Title } = Typography;

const Movies = () => {
	const { getMovies, movies, groupedMovies, setGroupedMovies } = useMovies();

	useEffect(() => {
		return getMovies();
	}, []);

	useEffect(() => {
		const isEmptySearchValue = !isEmptyArray(movies) && isEmptyObject(groupedMovies);

		if (isEmptySearchValue) {
			const allMovies = Helper.groupMovies(movies);
			setGroupedMovies(allMovies);
		}
	}, [groupedMovies, movies]);

	return (
		<Fragment>
			{/* Grouped Movies */}
			<section className="mt-30 mb-20">
				{renderGroupedMovies(groupedMovies)}
			</section>
			
			{/* Submit Votes Button */}
			<SubmitVotes />
		</Fragment>
	)
}

function renderGroupedMovies(groupedMovies:any) {
	if (isEmptyObject(groupedMovies)) {
		return <Skeletons />
	}

	const keys = Object.keys(groupedMovies);

	keys.sort();

	return keys.map(key => (
		<section key={key} className="mt-20">
			<Title level={2} className="movie-category">{key}</Title>
			{renderMovies({ 
				category: key,
				movies: groupedMovies[key].movies,
			})}
		</section>
	))
	// 
}

type MovieType = {
	id: string,
	photoUrL: string,
	category: string,
	title: string,
}

type TypeRenderMovie = {
	category: string,
	movies: Array<MovieType>,
}

function renderMovies({ movies, category }:TypeRenderMovie) {
	return (
		<Carousel spaceBetween={10} className="movies">
			{movies.map((movie, i) => (
				<SwiperSlide key={`${movie.id}-${i}`}>
					<Movie {...movie} movieCategory={category} />
				</SwiperSlide>
			))}
		</Carousel>
	)
}

export default Movies;
