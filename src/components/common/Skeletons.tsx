// React
import React from "react";

// Librarys
import { Row, Col, Skeleton } from "antd";

// Utils
import Helper from "@utils/Helper";

const Skeletons = ({ totalItems }: {totalItems:number}) => {
	const skeletons = Helper.generateArray(totalItems);

	return (
		<Row gutter={[20, 20]}>
			{skeletons.map((_, i) => (
				<Col
					key={i}
					xs={16}
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
