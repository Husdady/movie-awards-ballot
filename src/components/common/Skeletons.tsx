// React
import React from "react";

// Librarys
import { Row, Col, Skeleton } from "antd";

// Utils
import Helper from "@utils/Helper";

const Skeletons = () => {
	const skeletons = Helper.generateArray(35);

	return (
		<Row gutter={[20, 20]}>
			{skeletons.map((_, i) => (
				<Col
					key={i}
					xs={24}
					sm={12}
					md={8}
					lg={8}
					xl={6}
					xxl={4}
				>
					<Skeleton.Button active style={{ width: "100%", height: 400 }} /> 
				</Col>
			))}
		</Row>
	)
}

export default Skeletons;
