import { useScroll, useTransform, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutMeImg from '/src/assets/zack-everest.png'

const AboutMe = () => {
    
    const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', "end end"]
	});

	const opacity = useTransform(scrollYProgress, [0,0.3,0.5], [0,0.5,1]);

    const isInView = useInView(targetRef, { once: true });

  
    return (
        <motion.div ref={targetRef} style={{ opacity }} id="aboutme" className=" px-5 lg:px-10 py-10 lg:py-20 bg-lightgray bg-opacity-85">
            <div 
                className="grid grid-cols-1 xl:grid-cols-2 my-6 lg:my-20 mx-2 lg:mx-14 gap-10"
                style={{
                    transform: isInView ? "translateY(0px)" : "translateY(500px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.10, 0.5, 0.75, 1) 0.5s"
                }}
            >
                <div className="flex justify-center items-center">
                    <img className="shadow-lg rounded-lg" src={AboutMeImg}/>
                </div>
                <div className="flex rounded-lg shadow-lg bg-slate300 justify-center items-center">
                    <div className="flex flex-col mx-8 mt-3 pb-10 gap-8 ">
                        <h1 className="sm:text text-4xl font-bold text-gray-800">
                            About Me
                        </h1>
                        <p className="text-md">Hi, I&apos;m Zack, a web developer out of Atlanta, Georgia. During the pandemic in 2020, after spending many years bartending and working as a service industry professional, I decided to pursue a career in tech. I received a certificate in Full Stack Web Development through the Georgia Institute of Technology. Since then, I have worked in Tech Support and Network Operations in the financial tech industry. While the experience has been great, I am trying to turn my attention back to web and software development and am continuing my education in those areas. I&apos;ve recently updated my portfolio and am beginning work on new personal and professional projects I will showcase here. If you like what you see please feel from to contact me!</p>
                        <p className="text-md">Outside of my professional career I am a active person and enjoy many hobbies including hiking, biking, jiu jitus, and TTRPGs. I absolutely love traveling and am hoping that I&apos;ll soon be able to start planning my next big adventure.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe