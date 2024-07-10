import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import Logo from "/src/assets/FullLogo_small.jpg"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start bg-gray self-stretch py-14 md:px-24 md:py-24 lg:px-40 lg:py-28">
      <div className="flex flex-col gap-8 md:flex-row justify-between items-center self-stretch">
        <div>
          <img src={Logo} alt="ZE Web Dev logo"/>
        </div>
        <div className="flex justify-between items-center max-w-[200px] w-full">
          <a href="https://www.linkedin.com/in/zachary-eggert/">
            <FaLinkedinIn className="text-teal hover:text-white cursor-pointer" size={40} />
          </a>
          <a href="https://github.com/zreggert">
            <FaGithub className="text-teal hover:text-white cursor-pointer" size={40} />
          </a>
          <a href="https://www.instagram.com/tacozacktravels?igsh=MWZjNTdrcmNxNTltZw%3D%3D&utm_source=qr">
            <FaInstagram className="text-teal hover:text-white cursor-pointer" size={40} />
          </a>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">
            <a href='#contact'>Contact Me</a>
          </button>
          {/* <button className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">Schedule Consultation</button> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer