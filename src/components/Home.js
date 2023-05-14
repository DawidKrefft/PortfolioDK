import React from 'react';
import Image from '../assets/profile.png';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import cv from '../assets/cv_dawidkrefft.pdf';

const Home = () => {
	return (
		<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
					{/* text */}
					<div className='flex-1 text-center font-secondary lg:text-left'>
						<motion.h1
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-3'>
							Dawid <span>Krefft</span>
						</motion.h1>
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]'>
							<TypeAnimation
								sequence={[
									'Welcome!',
									1500,
									'if you like this page',
									1500,
									'or the projects',
									1500,
									'please contact me',
									1500
								]}
								speed={20}
								className='text-accent'
								wrapper='span'
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn('right', 0.4)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='mb-8 max-w-lg mx-auto lg:mx-0'>
							A frontend developer <br className='sm:hidden' /> who hope to find a great team{' '}
							<br className='sm:hidden' /> to work with <br /> and share passions.
						</motion.p>
						<motion.div
							variants={fadeIn('right', 0.5)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
							<a
								href='https://github.com/DawidKrefft'
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-lg noSelect noSelect:focus grid place-items-center'>
								<div className='flex gap-3 justify-center items-center'>
									<p>Repo</p> <FaGithub />
								</div>
							</a>
							<a
								href={cv}
								download='cv_dawidkrefft'
								className='text-gradient btn-link noSelect noSelect:focus'>
								Download <br />
								CV 👈
							</a>
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='mx-auto bg-gradient-to-b from-teal-600 rounded-full hidden sm:flex sm:w-72 sm:h-72 overflow-hidden lg:h-[400px] lg:w-[400px] xl:h-[480px] xl:w-[480px]'>
						<img
							src={Image}
							alt=''
							className='object-cover sm:h-72 sm:w-72 lg:h-[400px] lg:w-[400px] xl:h-[480px] xl:w-[480px]'
						/>
					</motion.div>
					{/* <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
						<Image src={Image} layout="fill" objectFit="cover" />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Home;
