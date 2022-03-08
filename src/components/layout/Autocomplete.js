// React
import React, { memo, useCallback } from 'react';

// Components
import { Flex } from "@common";

// Librarys
import { Row, Col, Typography } from "antd";

// Utils
import Helper from "@utils/Helper";

const { Title } = Typography;

const Autocomplete = ({ collections, onPressItem }) => {
	const renderItems = useCallback((items) => {
		return items.map((item, i) => {
			const imgAlt = Helper.convertEmptySpacesInHyphens(item.title);

			return (
				<Col
					key={i}
					xs={24}
					sm={16}
					md={12}
					lg={10}
					xl={8}
					xxl={6}
					className="movies-details"
				>
					<Flex
						key={i}
						className="movie cursor-pointer"
						onClick={() => onPressItem(item)}
					>
		        <figure>
		          <img src={item.photoUrL} width={150} height={150} alt={imgAlt} />
		        </figure>

		        <section>
		          {/* Movie title */}
		          <Title level={4} className="title mb-0">Movie name:</Title>
		          <Title level={5} className="value mt-0">{item.title}</Title>

		          {/* Movie Category */}
		          <Title level={4} className="title mt-0 mb-0">Movie category:</Title>
		          <Title level={5} className="value mt-0">{item.category}</Title>
		        </section>
		      </Flex>
			</Col>
		)})
	}, [onPressItem])

	const renderContent = useCallback(() => {
		return collections.map((collection, i) => {
			const { items } = collection;

			return renderItems(items);
		});
	}, [collections, renderItems]);

	return (
		<Row
			align="middle"
			gutter={[10, 10]}
			className="autocomplete border-none  px-10 py-20"
		>
			{renderContent()}
		</Row>
	)
};

export default memo(Autocomplete);
