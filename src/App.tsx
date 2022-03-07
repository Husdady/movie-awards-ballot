// React
import React, { lazy } from 'react';

// Styles
import 'antd/dist/antd.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import "@styles/custom-antd.css";
import "@styles/loader.css";
import "@styles/main.css";
import "@styles/movies.css";

const Container = lazy(() => import("./components/common/Container"));
const AppName = lazy(() => import("./components/layout/AppName"));
const Search = lazy(() => import("./components/layout/Search"));
const Movies = lazy(() => import("./components/layout/Movies"));
const MoviesState = lazy(() => import("./context/Movies.State"));

const App = () => {
  return (
  	<MoviesState>
    	<div className="wrapper" />
	    <Container>
	      <AppName />
	      <Search />
	      <Movies />
	    </Container>
    </MoviesState>
  );
}

export default App;
