// React
import { Component, Fragment } from "react";

class Loader extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Fragment>
				<div className="wrapper" />
				<div className="d-flex j-center align-items-center container-loader">
					<div className="sk-chase">
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Loader;
