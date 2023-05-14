import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const NextArrow = ({ onClick }) => {
	return (
		<div className='z-50 absolute right-0 -top-[65px] sm:right-0 sm:-top-[80px]' onClick={onClick}>
			{/* <div className='z-50 absolute right-0 -top-[80px]' onClick={onClick}> */}
			<div className='btn h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full grid place-items-center cursor-pointer z-50'>
				<BsChevronRight />
			</div>
		</div>
	);
};

export default NextArrow;
