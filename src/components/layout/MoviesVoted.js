// React
import React, { useCallback } from "react";

// Librarys
import { List, Typography } from "antd";

// Hooks
import { useMovies } from "@hooks";

// Utils
import Helper from "@utils/Helper";

const { Title } = Typography;

const MoviesVoted = () => {
	const { moviesVoted } = useMovies();

	const renderMovies = useCallback((movie) => {
		const imgAlt = Helper.convertEmptySpacesInHyphens(movie.title);
		
		return (
			<List.Item className="movie">
				{/* Movie Image */}
				<figure>
					<img
						width={150}
						height={150}
						alt={imgAlt}
						loading="lazy"
						src={movie.photoUrL}
					/>
				</figure>

				<section>
					{/* Movie title */}
					<Title level={4} className="title mb-0">Movie name:</Title>
					<Title level={5} className="value mt-0">{movie.title}</Title>

					{/* Movie Category */}
					<Title level={4} className="title mt-0 mb-0">Movie category:</Title>
					<Title level={5} className="value mt-0">{movie.category}</Title>
				</section>
			</List.Item>
		)
	}, []);

	return (
		<List
			size="large"
			className="movies-details"
      dataSource={moviesVoted}
      renderItem={renderMovies}
   	/>
  )
}

export default MoviesVoted;
