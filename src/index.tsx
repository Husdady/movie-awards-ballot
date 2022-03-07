// React
import React, { Suspense } from 'react';
import { render } from 'react-dom';

// Components
import App from './App';
import { Loader } from "@common";

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
