// React
import React, { useCallback } from "react";

// Librarys
import { List, Typography } from "antd";

// Hooks
import { useMovies } from "@hooks";

const { Title } = Typography;

const MoviesVoted = () => {
	const { moviesVoted } = useMovies();

	const renderMovies = useCallback((movie) => {
		return (
			<List.Item className="movie-vote">
				{/* Movie Image */}
				<figure>
					<img src={movie.photoUrL} width={150} height={150} />
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
			className="movies-voted"
      dataSource={moviesVoted}
      renderItem={renderMovies}
   	/>
  )
}

export default MoviesVoted;
