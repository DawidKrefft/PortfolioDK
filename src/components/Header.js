import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

// images
import Logo from '../assets/logo.svg';

const Header = () => {
	return (
		<div className=' py-8'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					{/* logo */}
					<a href='https://davvidkrefft.netlify.app' className='noSelect noSelect:focus'>
						<img src={Logo} alt='' className='scale-110' />
					</a>
					<Link
						smooth={true}
						spy={true}
						to='contact'
						className='btn btn-sm items-center grid place-items-center cursor-pointer noSelect noSelect:focus'>
						Contact me
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
