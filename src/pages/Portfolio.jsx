import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import SocialPlatform from "/src/assets/social_med_platform_pic.png";
import AuthTemp from "/src/assets/auth_app_pic.png";
import Blackjack from "/src/assets/blackjack_pic.png"

const data = {
  projects: [
    {
      "id": "1",
      "src": SocialPlatform,
      "title": "Social Media Platform",
      "description": "A full stack, mock social media plaform built with the MERN stack utilizing MongoDB for the database, Express and Node.js for backend routing, and React and TailwindCSS for frontend development.",
      "link": "https://github.com/zreggert/Social-Media-Project"
    },
    {
      "id": "2",
      "src": AuthTemp,
      "title": "React App Auth Template",
      "description": "Template for future projects of an sign in/login authentication page using React and MongoDB",
      "link": "https://github.com/zreggert/mern-authapp-template"
    },
    {
      "id": "3",
      "src": Blackjack,
      "title": "Command Line Python Blackjack App",
      "description": "Simple command line application blackjack game utilizing Python",
      "link": "https://github.com/zreggert/python_blackjack"
    },
    
  ]
}


const Portfolio = () => {

	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', "start end"]
	});

	const opacity = useTransform(scrollYProgress, [0,0.3,0.5], [0,0.5,1]);

	const slide_ref = useRef(null);
	const isInView = useInView(slide_ref, { once: true });

	return (
		<motion.div ref={targetRef} style={{ opacity }} className="flex flex-col justify-center items-start mx-8 md:mx-16 lg:mx-36 my-24 px-8 py-6 gap-20 xl:h-screen" id="portfolio">
			<div className="flex justify-between items-start w-[100%]">
				<div className="flex flex-col items-start gap-10">
					<h3 className="sm:text text-4xl font-bold text-gray-800">
						Portfolio
					</h3> 
				</div>
				<div>
				<button className="hidden lg:flex justify-center items-center gap-4 bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">
					<a href="https://github.com/zreggert" className="flex flex-row justify-center items-center gap-3">
						<FaGithub size={40}/>
						<p className="text-xl">Check out my GitHub</p>
					</a>
				</button>
				</div>
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-start gap-5" ref={slide_ref}>
				{data.projects.map((item, index) => (
				<div 
					key={index} 
					className="grid grid-cols-1 gap-4 xl:gap-10 rounded-2xl shadow-xl h-[100%]"
					style={{
						transform: isInView ? "translateX(0px)" : "translateX(50px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.10, 0.5, 0.75, 1) 0.5s"
					}}
				>
					<div className="flex justify-start items-start p-6 max-h-300">
						<img src={item.src} alt='project screenshot' className="rounded-lg relative"/>
					</div>
					<div className="flex flex-col px-5 pb-5 items-start self-stretch gap-5">
					<div>
						<h3 className="text-2xl font-bold">{item.title}</h3>
						<p className="text-xl">{item.description}</p>
					</div>
					<div>
						<button className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">
							<a href={item.link} className="flex flex-row justify-center items-center gap-3">
								<FaGithub size={30}/>
								<p>View this project on GitHub</p>
							</a>
						</button>
					</div>
					</div>
				</div>
				))}
			</div>
		</motion.div>
	)
}

export default Portfolio