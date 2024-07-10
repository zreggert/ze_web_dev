import { RiJavascriptFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";


const data = {
    skills: [
        {
            "id": "1",
            Icon: () => (<RiJavascriptFill size={100}/>),
            "title": "Programming",
            "description": "Experience developing using JavaScript and Python"
        },
        {
            "id": "2",
            Icon: () => (<FaDatabase size={100}/>),
            "title": "Back-End",
            "description": "Built relational and non-relational databases using SQL adn NoSQL"
        },
        {
            "id": "3",
            Icon: () => (<FaReact size={100}/>),
            "title": "Front-End",
            "description": "Develop client UI for web application using React and TailwindCSS"
        },
        {
            "id": "4",
            Icon: () => (<FaGitAlt size={100}/>),
            "title": "Git",
            "description": "Managed version control for projects using Git"
        }
    ]
}

const Skills = () => {

    const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', "end end"]
	});

	const opacity = useTransform(scrollYProgress, [0,0.3,0.5], [0,0.5,1]);

    const skillRef = useRef(null);
    const isInView = useInView(skillRef);

    const skill_opacity = {
        hidden: {
            opacity: 0
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { 
                delay: custom * 0.4,
                duration: 0.5
            }
        })
    }

    return (
        <motion.div ref={targetRef} style={{ opacity }} className="flex flex-col justify-center items-start lg:mx-36 my-24 px-8 py-6 gap-10 h-5/6" id="skills">
            <div className="flex flex-col items-start gap-2">
                <h2 className="sm:text text-4xl font-bold text-gray-800">My Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-start gap-5" ref={skillRef}>
                {data.skills.map((item, index) => (
                    <motion.div key={index} custom={item.id} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={skill_opacity} className="flex flex-col items-start p-3 gap-3 border-white rounded-3xl bg-skyblue shadow-xl h-[100%]">
                        <div>
                            {item.Icon()}
                        </div>
                        <div className="flex flex-col items-start gap-4 self-stretch p-5">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-xl">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Skills