import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdSlideshow } from 'react-icons/md';

const Card = ({ img, title, text1, text2, git, url }) => {
	return (
		<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
			<div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
			<div>
				<div className='flex items-center justify-center'>
					<img
						className='group-hover:scale-125 transition-all duration-500  h-[500px] object-fill'
						src={img}
						alt=''
					/>
				</div>
				<div className='absolute -bottom-full left-3 group-hover:bottom-28 transition-all duration-500 z-50'>
					<span className='text-gradient'>
						{text1} <br /> {text2}
					</span>
				</div>
				{/* title */}
				<div className='absolute -bottom-full left-2 group-hover:bottom-10 transition-all duration-700 z-50'>
					<span className='text-3xl text-white'>{title}</span>
				</div>

				<a
					className='absolute -bottom-full left-2 group-hover:bottom-2 transition-all duration-700 z-50'
					href={git}
					target='_blank'
					rel='noopener noreferrer'>
					{git && <FaGithub />}
				</a>
				<a
					className='absolute -bottom-full left-10 group-hover:bottom-2 transition-all duration-700 z-50'
					href={url}
					target='_blank'
					rel='noopener noreferrer'>
					{url && <MdSlideshow className='scale-110' />}
				</a>
			</div>
		</div>
	);
};

export default Card;
