// React
import React, { memo, useState, useEffect, useCallback } from 'react';

// Components
import { Flex, Button } from "@common";

// Librarys
import { message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoteYea, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Hooks
import { useMovies } from "@hooks";

// Utils
import Helper from "@utils/Helper";
import { isEmptyArray } from "@utils/Validations";

const imgPlaceholder = require("@assets/img/img-placeholder.png");

interface MovieImageProps {
  movie: any,
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
    message.success(`You voted for the movie ${props.movie.title}`)
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
    <figure className="position-relative">
	   <LazyLoadImage
        height={350}
        alt={altImg}
        effect="blur"
        // placeholder={imgPlaceholder}
        placeholderSrc={imgPlaceholder}
        src={props.movie.photoUrL}
        className="movie-image"
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