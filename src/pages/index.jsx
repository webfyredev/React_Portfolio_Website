import About from "../components/about";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Skills from "../components/skills";
import Project from "../components/projects";
import Faqs from "../components/faq";
import Contacts from "../components/contacts";
import { TechnicalSkills } from "../components/skill";

export default function Home_Page(){
    return(
        <>
            <NavBar />
            <Hero />
            <About />
            <TechnicalSkills />
            <Skills />
            <Project />
            <Faqs />
            <Contacts />
            <Footer />
        </>
    );
}