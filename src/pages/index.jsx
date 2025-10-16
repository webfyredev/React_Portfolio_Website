import About from "../components/about";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Skills from "../components/skills";

export default function Home_Page(){
    return(
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Footer />
        </>
    );
}