import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HeroImg from "/src/assets/zack-valleyoffire.png";


const Hero = () => {

	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', "end start"]
	});

	const opacity = useTransform(scrollYProgress, [0,0.5], [1,0.5]);


	return (
		<motion.div ref={targetRef} style={{ opacity }} className="flex" id="hero">
			<img className='w-full h-screen object-cover object-left scale-x-[-1]' src={HeroImg}/>
			<div className="w-full h-screen absolute left-0 bg-white/50">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
					<h1 className="sm:text text-5xl font-bold text-gray-800">
					Zack Eggert
					</h1>
					<h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-600">
					I am 
					<TypeAnimation
						sequence={[
						'a Developer',
						3000, 
						'an Adventurer',
						3000,
						'a Life-long Student',
						3000,
						'a Thrill Seeker',
						3000
						]}
						wrapper="span"
						speed={50}
						style={{ fontSize: '1em', paddingLeft: '5px' }}
						repeat={Infinity}
					/>
					</h2>
					<div className="flex justify-between pt-6 max-w-[200px] w-full">
					<a href="https://www.linkedin.com/in/zachary-eggert/">
						<FaLinkedinIn className="cursor-pointer" size={20} />
					</a>
					<a href="https://github.com/zreggert">
						<FaGithub className="cursor-pointer" size={20} />
					</a>
					<a href="https://www.instagram.com/tacozacktravels?igsh=MWZjNTdrcmNxNTltZw%3D%3D&utm_source=qr">
						<FaInstagram className="cursor-pointer" size={20} />
					</a>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Hero