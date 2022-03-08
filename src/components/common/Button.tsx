// React
import React, { memo, useCallback } from "react";

// Librarys
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { isString, isEmptyObject } from "../../utils/Validations";

interface ButtonProps {
	title: string,
	backgroundColor?: string,
	className?: string,
	icon?: any,
	onClick?(): any,
} 

const Button = (props: ButtonProps) => {
	const renderIcon = useCallback(() => {
		if (isEmptyObject(props.icon)) return;

		return <FontAwesomeIcon {...props.icon} icon={props.icon.name} className="mr-4" />
	}, [props.icon]);

	const renderTitle = useCallback(() => {
		if (!isString(props.title)) return;

		return <span>{props.title}</span>
	}, [props.title]);

	const buttonStyle = {
		backgroundColor: props.backgroundColor
	}

	const buttonClassName = ["border-none", "cursor-pointer", "scale", props.className].join(" ");

	return (
		<button
			style={buttonStyle}
			className={buttonClassName}
			onClick={props.onClick}
		>
			{renderIcon()}
			{renderTitle()}
		</button>
	)
};

export default memo(Button);

Button.defaultProps = {
	icon: {},
	title: "button",
}