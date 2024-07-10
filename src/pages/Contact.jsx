import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


const Contact = () => {

    const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', "end end"]
	});

	const opacity = useTransform(scrollYProgress, [0,0.3,0.5], [0,0.5,1]);

    return (
        <motion.div ref={targetRef} style={{ opacity }} id="contact" className="flex flex-col justify-center items-center text-center pb-20">
            <div>
                <h3 className="text sm:text-4xl font-bold text-gray-800">Contact Me</h3>
                <p className="">Get in Touch</p>
            </div>
            <form
                action="https://formspree.io/f/mrbzgwbk"
                method="POST" 
                className="grid grid-rows-2 grid-cols-1 mt-10 gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <label htmlFor="first-name" className="flex flex-col items-start gap-5 w-[100%]">
                        <span className="text-md">First Name</span>
                        <input type="text" className="flex items-center self-stretch p-4 rounded-md border-[1.33px] bg-white" name="first-name" id="first-name" required></input>
                    </label>
                    <label htmlFor="last-name" className="flex flex-col items-start gap-5 w-[100%]">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="flex items-center self-stretch p-4 rounded-md border-[1.33px] bg-white" name="last-name" id="last-name" required></input>
                    </label>
                    <label htmlFor="email" className="flex flex-col items-start gap-5 w-[100%]">
                        <span className="text-md">Email</span>
                        <input type="email" className="flex items-center self-stretch p-4 rounded-md border-[1.33px] bg-white" name="email" id="email" required></input>
                    </label>
                    <label htmlFor="phone-number" className="flex flex-col items-start gap-5 w-[100%]">
                        <span className="text-md">Phone Number</span>
                        <input type="number" className="flex items-center self-stretch p-4 rounded-md border-[1.33px] bg-white" name="phone-number" id="phone-number"></input>
                    </label>
                </div>
                <label htmlFor="message" className="flex flex-col items-start gap-5 w-[100%]">
                    <span className="text-md">Message</span>
                    <textarea className="flex items-center self-stretch p-4 rounded-md border-[1.33px] bg-white" id="phone-number" rows="8" placeholder="Type your message" required></textarea>
                    <button type="submit" className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">Submit</button>
                </label>
            </form>
        </motion.div>
        
    )
}

export default Contact