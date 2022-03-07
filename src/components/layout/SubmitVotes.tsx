// React
import React, { Fragment, useState, useCallback } from "react";

// Components
import { Button } from "@common";
import MoviesVoted from "./MoviesVoted";

// Librarys
import { Modal, message } from "antd";

// Hooks
import { useMovies } from "@hooks";

// Utils
import { isEmptyArray } from "@utils/Validations";

const SubmitVotes = () => {
	const { moviesVoted, setDefaultMoviesVoted } = useMovies();
	const [isModalVisible, setModalVisibility] = useState(false);

	const handleShowModal = useCallback(() => {
		if (isEmptyArray(moviesVoted)) {
			return message.warning("No movie votes yet")
		}

		setModalVisibility(true)
	}, [moviesVoted]);

	const handleHideModal = useCallback(() => setModalVisibility(false), []); 

	const handleCancel = useCallback(() => {
		handleHideModal();
		setDefaultMoviesVoted();
		return message.info("All movie votes have been reset")
	}, [handleHideModal, setDefaultMoviesVoted]);

	return (
		<Fragment>
			<Button
				title="Submit votes"
				className="submit-votes"
				onClick={handleShowModal}
			/>

			<Modal
				title="Votes Submitted"
				visible={isModalVisible}
				onCancel={handleHideModal}
				footer={<Cancel onCancel={handleCancel} />}
			>
				<MoviesVoted />
			</Modal>
		</Fragment>
	)
}

export default SubmitVotes;

const Cancel = ({ onCancel } : {onCancel:any}) => {
	return (
		<Button
			title="Cancel"
			onClick={onCancel}
			className="close-modal"
			backgroundColor="var(--bg-darkyellow)"
		/>
	)
}