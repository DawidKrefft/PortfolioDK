import React, { useEffect, useState } from 'react';
import Card from './Card';
import Img1 from '../assets/proj1.jpg';
import Img2 from '../assets/proj2.jpg';
import Img3 from '../assets/proj3.jpg';
import Slider from 'react-slick';
import NextArrow from '../utils/NextArrow';
import PrevArrow from '../utils/PrevArrow';
import { fadeIn } from '../utils/variants';
import { motion } from 'framer-motion';

const data = [
	{
		img: Img1,
		title: 'Portfolio',
		text1: 'Key libraries used: react, tailwind, framer-motion;',
		text2:
			'I made it minimalistic, responsive and time saving. Future plans: pagination for project section, modal with youtube player instead of link, images in database.',
		git: 'https://github.com/DawidKrefft/PortfolioDK/tree/master'
	},
	{
		img: Img2,
		title: 'Booking app',
		text1: 'Key tech: react, context api, express & jwt auth.',
		text2:
			'It was my first MERN project, but I thought it was worth showing. App allows to signup, login and make a reservation based on filtered criteria. If I were to do it again, I would use some kind of session storing and redux. And typescript obviously...',
		git: 'https://github.com/DawidKrefft/Projekt/tree/develop',
		url: 'https://youtu.be/Gmcpef38HvQ'
	},
	{
		img: Img3,
		title: 'Animation app',
		text1: 'Tech: javascript, GSAP, ScrollMagic, Barba.js',
		text2: `Quite "old" project of mine... It doesn't have neither a good structure nor super responsiveness. I had been eager to learn some advanced animations and thought it was worth mentioning.`,
		git: 'https://github.com/DawidKrefft/OldAnimationProj/tree/master',
		url: 'https://6460f66222a1e11538ac2b84--bespoke-figolla-1e1b75.netlify.app/index.html'
	},
	{
		img: '',
		title: 'Atlas app',
		text1: 'I am creating an app using MUI library and typescript.',
		text2: `Project will be added in max few days. Main goal is to create optimized search component (for ex. with debounce, maybe useMemo if efficient). Apart from that, some pagination for displaying all content, lazy loading.`
	}
];

const MySlider = () => {
	const [progress, setProgress] = useState(0);
	const [slideToShow, setSlideToShow] = useState(3);

	const setSlides = () => {
		if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
			setSlideToShow(3);
		} else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
			setSlideToShow(2);
		} else if (window.innerWidth <= 650) {
			setSlideToShow(1);
		}
	};

	useEffect(() => {
		setSlides();
		setProgress(100 / (data.length - slideToShow + 1));
		window.addEventListener('resize', () => {
			setSlides();
		});
	}, []);

	const settings = {
		arrows: true,
		infinite: false,
		speed: 500,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1
				}
			}
		],
		afterChange: (current) => {
			setProgress((100 / (data.length - slideToShow + 1)) * (current + 1));
		}
	};

	return (
		<>
			<div className='section ' id='projects'>
				<div className='container mx-auto '>
					<div>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='h2 leading-tight text-accent text-center lg:text-[40px]'>
							Projects
						</motion.h2>
						{/* <div className='grid place-items-center'> */}
						<motion.p
							variants={fadeIn('right', 0.2)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: true, amount: 0.7 }}
							className='max-w-sm mb-14 sm:mb-8 sm:border-2 sm:border-white/10 sm:rounded-xl sm:p-1'>
							Hover the projects to check out github, <br /> youtube presentation or deployment.
							<br />{' '}
							<span className='hidden sm:block'>
								I won't deploy fullstack apps for now, because it takes about 5 min to get first
								fetch request in a free tier.
							</span>
						</motion.p>
						{/* </div> */}
					</div>
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: true, amount: 0.7 }}
						className='relative  pb-20'>
						<Slider {...settings}>
							{data.map((el, index) => (
								<Card
									key={index}
									img={el.img}
									title={el.title}
									text1={el.text1}
									text2={el.text2}
									git={el.git}
									url={el.url}
								/>
							))}
						</Slider>

						<div className='h-[2px] bg-gray-300 w-[250px] absolute -top-[15px] right-0'>
							<div
								className='bg-[#56ff6482] absolute h-[100%] transition-all'
								style={{ width: `${progress}%` }}></div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default MySlider;
