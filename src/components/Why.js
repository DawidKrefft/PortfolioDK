import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import svg1 from '../assets/startup-idea.svg';
import svg2 from '../assets/people-collaborating.svg';
import svg3 from '../assets/walk-to-work.svg';

const Why = () => {
	const [ref, inView] = useInView({
		threshold: 0.5
	});
	return (
		<section className='section' id='why' ref={ref}>
			<div className=' mx-auto'>
				{/* text */}
				<motion.h2
					variants={fadeIn('up', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: true, amount: 0.7 }}
					className='text-[32px] lg:text-[60px] pt-7 lg:mb-24 tracking-[10%] uppercase text-center text-accent'>
					why me
				</motion.h2>
				{/* cards */}
				<div className='grid grid-cols-1 gap-1 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 scale-90 sm:scale-100 xl:scale-125'>
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src={svg1}
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group'>
							<h1 className='font-dmserif text-3xl font-bold text-white group-hover:hidden absolute h-[155px] w-[120px]'>
								ambitious
							</h1>
							<p className=' text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								I spend minimum 6 hours a day learning web technologies. <br /> Constancy is
								important. <br /> <br />I believe I am capable of creating nearly anything given
								enough time.
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-xl'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src={svg2}
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group'>
							<h1 className='font-dmserif text-3xl font-bold text-white group-hover:hidden absolute h-[155px] w-[120px]'>
								Passionate
							</h1>
							<p className=' text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								I enjoy "programming" and I must admit,{' '}
								<span className='border-b border-white/80'>it is my greatest hobby.</span> <br />I
								used to play video games, but most of them are not nearly as challenging. I would
								love to meet people who share the same passion.
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.6)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-xl'>
						<div className='h-96 w-72'>
							<img
								className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
								src={svg3}
								alt=''
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
						<div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group'>
							<h1 className='font-dmserif text-3xl font-bold text-white group-hover:hidden absolute h-[155px] w-[120px]'>
								Adaptive
							</h1>
							<p className=' text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								I am willing to learn different technologies, <br />
								(either frontend or backend), <br />
								as well as I am willing to transfer to a different city or country.
								<br />
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Why;
