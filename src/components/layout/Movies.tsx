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
import { isEmptyObject } from "@utils/Validations";

const { Title } = Typography;

const Movies = () => {
	const { getMovies, groupedMovies } = useMovies();

	useEffect(() =>{
		getMovies();
	}, [getMovies]);

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
		return <Skeletons totalItems={36} />
	}

	const keys = Object.keys(groupedMovies);

	keys.sort();

	return keys.map(key => (
		<section key={key} className="mt-20">
			<Title level={2} className="movie-category">{key}</Title>
			{renderMovies(groupedMovies[key].movies)}
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

function renderMovies(movies:Array<MovieType>) {
	return (
		<Carousel speed={4000} spaceBetween={10} className="movies">
			{movies.map((movie, i) => (
				<SwiperSlide key={`${movie.id}-${i}`}>
					<Movie {...movie} />
				</SwiperSlide>
			))}
		</Carousel>
	)
}

export default Movies;
