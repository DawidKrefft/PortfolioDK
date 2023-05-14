import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Nav = () => {
	return (
		<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
			<div className='container mx-auto'>
				{/* nav inner */}
				<div className='w-full bg-black/15 h-[76px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 select-none noSelect noSelect:focus'>
					<Link
						offset={-200}
						activeClass='active'
						smooth={true}
						spy={true}
						to='home'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						Home
					</Link>
					<Link
						activeClass='active'
						smooth={true}
						spy={true}
						to='why'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						Why
					</Link>
					<Link
						activeClass='active'
						smooth={true}
						spy={true}
						to='experience'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						Exp
					</Link>
					<Link
						activeClass='active'
						smooth={true}
						spy={true}
						to='projects'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						Proj
					</Link>
					<Link
						activeClass='active'
						smooth={true}
						spy={true}
						to='contact'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						Form
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
