import Footer from "../../components/Footer"
import Header from "../../components/Header"
import AboutMe from "../AboutMe"
import Contact from "../Contact"
import Hero from "../Hero"
import Portfolio from "../Portfolio"
import Skills from "../Skills"



const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default Home