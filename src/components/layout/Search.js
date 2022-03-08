// React
import React, { useState, useCallback, useMemo, useRef } from 'react';

// Components
import { Flex } from "@common";
import Autocomplete from "./Autocomplete";

// Librarys
import { Input } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createAutocomplete } from "@algolia/autocomplete-core";

// Hooks
import { useMovies } from "@hooks";

// Utils
import Helper from "@utils/Helper";
import { searchMovies } from "@utils/requests";

const Search = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const { setGroupedMovies } = useMovies();
  const [autocompleteState, setAutocompleteState] = useState({
    isOpen: false,
    collections: [],
  });

  const { 
    getFormProps,
    getInputProps,
    getPanelProps,
    setQuery,
    setIsOpen,
   } = useMemo(() => createAutocomplete({
    placeholder: "Search an movie...",
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: ({ query }) => [{
      sourceId: "api-movies-awards-ballot",
      getItems: ({ query }) => searchMovies({ query })
    }]
  }), []);
  
  const formProps = getFormProps({
    inputElement: formRef.current
  })

  let inputProps = getInputProps({
    inputElement: inputRef.current
  })

  const panelProps = getPanelProps();

  // Update search value in seeker
  const updateSearchValue = useCallback((movieTitle) => {
    return setQuery(movieTitle);
  }, []);

  // Update grouped Movies
  const updateGroupedMovies = useCallback((item) => {
    const groupedMovies = Helper.groupMovies([item]);
    setGroupedMovies(groupedMovies);
    setIsOpen(false);
    updateSearchValue(item.title);
  }, []);

  // Event 'click' in search
  const handleEnter = useCallback(() => {
    const { collections } = autocompleteState;

    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const { items } = collection;
      const groupedMovies = Helper.groupMovies(items);
      setGroupedMovies(groupedMovies);
    }

    setIsOpen(false);
  }, [autocompleteState.collections]);

  // Render seeker
  const renderSearch = useCallback(() => {
    return (
      <Input
        ref={inputRef}
        className="search"
        onPressEnter={handleEnter}
        suffix={
          <FontAwesomeIcon
            size="lg"
            icon={faSearch}
            color="var(--bg-darkred)"
            className="scale cursor-pointer"
            onClick={handleEnter}
          />
        }
        {...inputProps}
      />
    )
  }, [inputProps.value]);

  // Render autocomplete under of seeker
  const renderAutocomplete = useCallback(() => {
    const { isOpen, collections } = autocompleteState;

    if (!isOpen) return; 

    return (
      <div ref={panelRef} {...panelProps}>
        <Autocomplete collections={collections} onPressItem={updateGroupedMovies} />
      </div>
    )
  }, [autocompleteState]);

  return (
    <form ref={formRef} className="position-relative" {...formProps}>
      {/* Seeker */}
      <Flex className="search-container mt-20 position-relative" align="center">
      	{renderSearch()}
      </Flex>

      {/* Autocomplete */}
      {renderAutocomplete()}
    </form>
  );
}

export default Search;
