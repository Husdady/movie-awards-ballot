// React
import React from 'react';

interface FlexProps { 
  children: React.ReactNode
  align?: String
  justify?: String
  wrap: Boolean
  className?: String,
  style?: Object,
}

const Flex = (props: FlexProps) => {
	const isAlignCenter = props.align === "center";
  const isJustifyCenter = props.justify === "center";

	const align = isAlignCenter ? "align-items-center" : null;
  const justify = isJustifyCenter ? "j-center" : null;
  const wrap = props.wrap ? "wrap" : null;
	const className = ["d-flex", align, justify, wrap, props.className].join(" ");

  return (
  	<div className={className} style={props.style}>
  		{props.children}
  	</div>
  );
}

export default Flex;

Flex.defaultProps = {
  wrap: false,
}