// React
import React from 'react';

// Utils
import { isFunction } from "@utils/Validations";

const Flex = (props) => {
	const isAlignCenter = props.align === "center";
  const isJustifyCenter = props.justify === "center";

	const align = isAlignCenter ? "align-items-center" : null;
  const justify = isJustifyCenter ? "j-center" : null;
  const wrap = props.wrap ? "wrap" : null;
	const className = ["d-flex", align, justify, wrap, props.className].join(" ");
  const isDivButton = isFunction(props.onClick) ? "button" : undefined;

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    isFunction(props.onClick) && props.onClick();
  }

  return (
  	<div
      role={isDivButton}
      style={props.style}
      className={className}
      onClick={handleClick}
    >
  		{props.children}
  	</div>
  );
}


export default Flex;

Flex.defaultProps = {
  wrap: false,
}