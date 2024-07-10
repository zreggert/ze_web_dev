import Logo from "/src/assets/FullLogo_small.jpg"

const Header = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-10 py-5 bg-gray">
        <div>
            <img src={Logo} alt="ZE Web Dev logo"/>
        </div>
        <div className="flex items-start gap-5">
            <button className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">
              <a href='#contact'>Contact Me</a>
            </button>
            {/* <button className="bg-teal text-white border-teal rounded-md px-4 py-2 hover:bg-white hover:text-teal">Schedule Consultation</button> */}
        </div>
    </div>
  )
}

export default Header;