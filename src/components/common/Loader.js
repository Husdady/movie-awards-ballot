// React
import React, { useCallback } from "react";

// Utils
import Helper from "@utils/Helper";

const Loader = () => {
	const renderSubDivs = useCallback(() => {
		const subDivs = Helper.generateArray(9);
		return subDivs.map((_, i) => <div key={i} />)
	}, []);

	return (
		<div className="wrapper container-loader">
			<div className="loader">
				{renderSubDivs()}
			</div>
		</div>
	)
}

export default Loader;
