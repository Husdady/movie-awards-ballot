// React
import React from 'react';

// Components
import { Flex } from "@common";

// Librarys
import { Input } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <Flex className="search-container mt-20 position-relative" align="center">
    	<Input className="search" placeholder="Search an movie..." />
    	<button className="search-icon">
    		<FontAwesomeIcon icon={faSearch} />
    	</button>
    </Flex>
  );
}

export default Search;
