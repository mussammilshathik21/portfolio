import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Aboutme from "./components/Aboutme"
import Skills from "./components/Skills"
import Contact from "./components/Contact"


function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
    
  )
}
export default App;