// React
import React, { Suspense } from 'react';
import { render } from 'react-dom';

// Components
import App from './App';
import { Loader } from "@common";

// Styles
import 'antd/dist/antd.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import "@styles/custom-antd.css";
import "@styles/loader.css";
import "@styles/main.css";
import "@styles/movies.css";

const root = document.getElementById('root');

function MovieAwardsBallot() {
	return (
  	<Suspense fallback={<Loader />}>
  		<App />
  	</Suspense>
	)
}

// Render application
render(<MovieAwardsBallot />, root);
