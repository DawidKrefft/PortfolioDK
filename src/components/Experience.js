import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const experience = [
	{
		name: 'Grywit',
		description:
			'I worked with Grywit for 3 months as an intern. I got some experience with setup a huge app environment with docker and all that jazz. I finally had a chance to work with github with a team. Most of the tasks were done with react-native.'
	},
	{
		name: 'NScode',
		description:
			'I also worked with NScode team as an intern for 3 months. My job was to make websites using vanilla JavaScript and Sass.'
	},
	{
		name: 'Skills',
		description: `I am quite confident with MERN stack, familiar with typescript, form/data validations and different styling (scss, mui, tailwind, bootstrap). As for React, I can use Redux Toolkit or Context Api for state management. I can solve many problems and I've reached the level of fast learning the new things. I learn mostly from documentations or youtube videos. My english is good. I have read many books, watched even more shows with english subtitles to the point, I don't need them anymore.`
	}
];

const Experience = () => {
	return (
		<section className='section' id='experience'>
			<div className='container mx-auto'>
				<div className='flex flex-col'>
					<motion.h2
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='sm:block h2 text-center text-accent text-[24px] sm:text-[32px] mb-3 sm:my-16'>
						Experience
					</motion.h2>
					<div className='grid place-items-center mb-40'>
						{experience.map((service, index) => {
							const { name, description } = service;
							return (
								<div key={index} className='lg:mb-[40px] flex max-w-xl'>
									<motion.div
										variants={fadeIn('up', 0.2)}
										initial='hidden'
										whileInView={'show'}
										viewport={{ once: true, amount: 0.7 }}>
										<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
											{name}
										</h4>
										<p className='font-secondary leading-normal flex'>{description}</p>
										<div className='border-b border-white/20 mt-4'></div>
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
