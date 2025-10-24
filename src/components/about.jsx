import { motion } from "framer-motion";
import { scrollLeft, buttonHover, scrollUp, scrollRight, projectEffectsbtn, scrollUpNext } from "../animations/motion";
import { FaDownload, FaCode, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll"
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaServer, FaPlug, FaDatabase, FaCodeBranch } from "react-icons/fa";
import aboutImg from '../images/fyre.png'
export default function About(){
    const services = [
        {
            id : 1,
            icon : <FaLaptopCode  className="w-13 h-12 p-2.5 mt-3 rounded-sm bg-[#38bdf8]"/>,
            title : 'Frontend Development',
            sb_title : 'Building modern, responsive, and interactive user interfaces'
        },
        {
            id : 2,
            icon : <FaServer className="w-13 h-12 p-2.5 mt-3 rounded-sm bg-[#38bdf8]"/>,
            title : 'Backend Development',
            sb_title : 'Creating efficient server-side logic and APIs for seemless functionality.'
        },
        {
            id : 3,
            icon : <FaPlug className="w-13 h-12 p-2.5 mt-3 rounded-sm bg-[#38bdf8]"/>,
            title : 'API Integration',
            sb_title : 'Connecting applications with third party services and APIs'
        },
        {
            id : 4,
            icon : <FaDatabase className="w-13 h-12 p-2.5 mt-3 rounded-sm bg-[#38bdf8]"/>,
            title : 'Database Management',
            sb_title : 'Designing, managing, and optimizing database for performance.'
        },
        {
            id : 5,
            icon : <FaCodeBranch className="w-13 h-12 p-2.5 mt-3 rounded-sm bg-[#38bdf8]"/>,
            title : 'Version Control (Git & Github)',
            sb_title : 'Tracking changes, collaborating, and managing code repositories'
        },
    ];
    return(
        <>
        <motion.div {...scrollUp} className="w-full lg:h-120 h-auto mt-20 bg-[#0f172a] overflow-hidden" id="about">
            <motion.h2 {...scrollUp} className="font-bold text-[#38bdf8] text-3xl flex w-[100%] md:h-[12%] h-auto flex items-center justify-center pt-5">
            About Me
            </motion.h2>
            <div className="lg:flex lg:flex-row flex flex-col md:flex-col w-[100%] lg:h-[85%] h-auto px-5 py-3 justify-between mt-5">
                <div className="lg:w-[45%] w-full h-auto lg:h-full">
                <motion.img {...scrollRight} src={aboutImg} className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300" />
                </div>
                <motion.div {...scrollLeft} className="lg:w-[50%] lg:h-full w-full h-auto flex flex-col p-5">
                    <h2 className="font-bold text-white md:text-4xl text-3xl mb-5">
                        Hello I'm <span className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">Oyinloye Oyinlade</span>
                    </h2>
                    <p className="text-slate-200 text-justify  text-xs md:text-sm">
                        I'm a passionate Web Developer and  Backend Engineer with expeertise in building scalable web applications and robust backend systems. I love turning
                        complex problems into simple, beautiful, and intuitive solutions.
                        With a Strong foundation in both frontend and backend technologies, I create end-to-end solutions that deliver exceptional
                        user experiences while maintaining high performance and security standards.
                        When am not coding, you can find me exploring new teechnologies, contributing to open-source
                        projects, or sharing knowledge with the developer community.
                    </p>
                    <motion.div {...scrollLeft} className="flex flex-row mt-10">
                            <motion.button {...buttonHover} className="md:px-8 md:py-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-xs md:text-sm cursor-pointer mr-3 hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200 hover:text-white">
                                <a href='#' className="flex">
                                Download CV <FaDownload  className="w-3 h-3 mt-0.5 md:mt-1.5 ml-1"/>
                                </a>
                            </motion.button>
                            <motion.button {...buttonHover} className="px-5 py-2.5 md:px-8 md:py-3 ml-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-xs md:text-sm cursor-pointer hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200 hover:text-white">
                                <Link to="project"
                                smooth={true}
                                duration={600}
                                offset={-50}
                                className="flex">
                                View Projects<FaChevronRight  className="w-3 h-3 mt-0.5 md:mt-1.5 ml-1"/>
                                </Link>
                            </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
        <div className="w-full h-auto bg-[#0f172a] flex flex-col px-5 py-10 items-center overflow-hidden">
            <motion.h1 {...scrollUp} className="font-bold text-[#38bdf8] md:text-3xl text-2xl mt-10 text-center">
                End-to-End Development Services
            </motion.h1>
            <motion.p {...scrollUpNext} className="md:w-[50%] text-center md:text-xs text-[10px] mt-3 text-slate-200">
                I deliver end-to-end development solutions from thoughtful project planning and 
                seamless AI integration to building reliable backends and engaging frontends 
                ensuring your ideas come to life with precision and creativity.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 py-5">
                {services.map((data, index) =>(
                    <motion.div {...buttonHover} {...projectEffectsbtn} key={index} className="flex flex-col p-4 bg-[#0f173b] rounded-md">
                        {data.icon}
                        <h3 className="mt-2 font-semibold text-[#38bdf8]">
                            {data.title}
                        </h3>
                        <p className="text-slate-200 text-sm my-2">
                            {data.sb_title}  
                        </p>
                    </motion.div>  
                ))}
                
            </div>
        </div>
        </>
    );
}