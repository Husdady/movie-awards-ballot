// React
import React, { memo, useState, useEffect, useCallback } from 'react';

// Components
import { Flex, Button } from "@common";

// Librarys
import { message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoteYea, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useMovies } from "@hooks";

// Utils
import Helper from "@utils/Helper";
import { isEmptyArray } from "@utils/Validations";

const PreloadImage = require('react-preload-image').default;

interface MovieProps {
  id: string,
  title: string,
  photoUrL: string,
  category: string,
  movieCategory: string,
}

interface MovieImageProps {
  movie: MovieProps
}

const MovieImage = memo((props: MovieImageProps) => {
  const { moviesVoted, addMovieVote } = useMovies();
  const [isVoted, setMovieVote] = useState(false);

  const onMount = useCallback(() => {
    const isResetMoviesVoted = isVoted && isEmptyArray(moviesVoted);
    if (isResetMoviesVoted) return setMovieVote(false);
  }, [isVoted, moviesVoted]);

  const handleVote = useCallback(() => {
    setMovieVote(true);
    addMovieVote(props.movie);
    const movieCategory = props.movie.movieCategory.toLowerCase();
    const txt = `You voted for ${movieCategory}: "${props.movie.title}"`;
    message.success(txt, 6);
  }, [addMovieVote, props.movie]);

  const renderContent = useCallback(() => {
    if (isVoted) return <AlreadyMovieVoted />

    return (
      <Button
        className="vote"
        title="Vote for this movie"
        backgroundColor="var(--bg-darkred)"
        icon={{ name: faVoteYea }}
        onClick={handleVote}
      />
    )
  }, [isVoted, handleVote]);

  useEffect(() => onMount(), [moviesVoted, onMount]);

  const altImg = Helper.convertEmptySpacesInHyphens(props.movie.title)
  const backgroundColor = isVoted ? "rgba(0,0,0,.84)" : "rgba(0,0,0,.64)";

	return (
    <figure className="position-relative" style={{ height: 400 }}>
	   <PreloadImage
        ease
        lazy
        width={350}
        height={350}
        alt={altImg}
        src={props.movie.photoUrL}
        className="movie-image absolute-total"
        style={{ backgroundColor: "#222222" }}
     />

     {/* Image details */}
     <Flex
       align="center"
       justify="center"
       className="wrapper"
       style={{ backgroundColor }}
     >
        {renderContent()}
     </Flex>
    </figure>
	)
});

export default MovieImage;

const AlreadyMovieVoted = () => {
  return (
    <div className="vote">
      {/* Check icon */}
      <FontAwesomeIcon
        icon={faCheckCircle}
        color="var(--bg-green)"
        className="d-block mx-auto"
      />

      {/* Text */}
      <span
        className="d-block"
        style={{ color: "var(--bg-green)" }}
      >
        You voted for this movie
      </span>
    </div>
  )
}