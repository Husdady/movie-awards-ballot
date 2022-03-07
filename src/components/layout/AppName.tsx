// React
import React from 'react';

// Components
import { Flex } from "@common";

// Librarys
import { Typography } from 'antd';

const { Title } = Typography;
const logo = require('@assets/img/logo.png')

const AppName = () => {
  return (
  	<Flex wrap align="center" justify="center">
  		{/*	App logo */}
  		<img
  			src={logo}
  			width={40}
  			height={40}
  			alt="app-logo"
  			loading="lazy"
  			className="app-logo mr-5"
  		/>

  		{/*	App name */}
  		<Title className="app-name mb-0">Movie Awards Ballot</Title>
  	</Flex>
  )
}

export default AppName;
