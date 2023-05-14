import React from 'react';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors }
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section className='py-16 lg:section' id='contact'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row gap-x-32'>
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className='flex-1 flex justify-start items-center '>
						<div>
							<h4 className='text-xl uppercase text-accent font-medium mb-3 tracking-wide ml-2'>
								text me
							</h4>
							<h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
								Please <br />
								do not <br />
								bot me 😄
							</h2>
						</div>
					</motion.div>
					{/* form */}
					<motion.form
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						target='_blank'
						onSubmit={onSubmit}
						action='https://formsubmit.co/c454d7910a67be63ba50755ca0b0ceb7'
						method='POST'
						className='flex flex-1 flex-col border rounded-2xl gap-y-6 pb-10 p-6 items-start mb-52'>
						<input
							className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
							type='text'
							placeholder='NAME'
							{...register('name', {
								required: true,
								maxLength: 100
							})}
						/>
						{errors.name && (
							<p className='text-red-300'>
								{errors.name.type === 'required' && 'This field is required.'}
								{errors.name.type === 'maxLength' && 'Max length is 100 char.'}
							</p>
						)}
						<input
							className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
							type='text'
							placeholder='EMAIL'
							{...register('email', {
								required: true,
								pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
								// https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute
							})}
						/>
						{errors.email && (
							<p className='text-red-300'>
								{errors.email.type === 'required' && 'This field is required.'}
								{errors.email.type === 'pattern' && 'Invalid email address.'}
							</p>
						)}
						<textarea
							className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none'
							type='text'
							placeholder='MESSAGE'
							rows='4'
							cols='50'
							{...register('message', {
								required: true,
								maxLength: 2000
								// https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute
							})}
						/>
						{errors.message && (
							<p className='text-red-300'>
								{errors.message.type === 'required' && 'This field is required.'}
								{errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
							</p>
						)}

						<button type='submit' className='btn btn-lg self-center'>
							SEND ME A MESSAGE
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
