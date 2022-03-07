// React
import React, { memo } from 'react';

// Components
import MovieImage from "./MovieImage";

// Librarys
import { Typography } from "antd";

const { Title } = Typography;

interface MovieProps {
  id: string,
  title: string,
  photoUrL: string,
  category: string,
}

const Movie = memo((props: MovieProps) => {
  return (
    <article className="movie">
      {/* Movie Image */}
      <MovieImage movie={props} />

    	{/* Movie Name */}
    	<Title level={4} className="title text-center">{props.title}</Title>
    </article>
  );
});

export default Movie;
