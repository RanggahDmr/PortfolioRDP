import Header from "./components/Header";
// import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";

function App() {
  return (
    <>
      <Header />
      
       
        <About/>
        <Experience/>
        <Skill />
        <Projects />
        <Certificate/>
        <Contact />
    
      <Footer />
    </>
  );
}

export default App;
