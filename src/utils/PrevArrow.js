import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

const PrevArrow = ({ onClick }) => {
	return (
		<div
			className='absolute right-[50px] -top-[65px] sm:right-[80px] sm:-top-[80px]'
			onClick={onClick}>
			<div className='btn h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full grid place-items-center cursor-pointer'>
				<BsChevronLeft />
			</div>
		</div>
	);
};

export default PrevArrow;
