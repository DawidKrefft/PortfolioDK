import React from 'react';
// components
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Why from './components/Why';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
	return (
		// <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
		<div className='background overflow-x-hidden'>
			<Header />
			<Nav />
			<Home />
			<Why />
			<Experience />
			<Projects />
			<Contact />
			{/* <div className='h-[4000px]'></div> */}
		</div>
	);
};

export default App;
