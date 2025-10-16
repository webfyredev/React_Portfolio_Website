import { motion } from "framer-motion";
import { scrollLeft, buttonHover, scrollUp, scrollRight } from "../animations/motion";
import { FaDownload, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import aboutImg from '../images/fyre.png'
export default function About(){
    return(
        <>
        <motion.div {...scrollUp} className="w-full h-120 mt-10 bg-[#0f172a]">
        <motion.h2 {...scrollUp} className="font-bold text-[#38bdf8] text-2xl flex w-[100%] h-[12%] flex items-center justify-center">
        About Me
        </motion.h2>
        <div className="flex w-[100%] h-[85%] px-5 py-3 justify-between">
            <div className="w-[45%] h-full">
            <motion.img {...scrollRight} src={aboutImg} className="w-full h-full object-cover" />
            </div>
            <motion.div {...scrollLeft} className="w-[50%] h-full flex flex-col p-5">
                <h2 className="font-bold text-white text-4xl mb-5">
                    Hello I'm <span className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">Oyinloye Oyinlade</span>
                </h2>
                <p className="text-slate-200 text-justify text-sm">
                    I'm a passionate Web Developer and  Backend Engineer with expeertise in building scalable web applications and robust backend systems. I love turning
                    complex problems into simple, beautiful, and intuitive solutions.
                    With a Strong foundation in both frontend and backend technologies, I create end-to-end solutions that deliver exceptional
                    user experiences while maintaining high performance and security standards.
                    When am not coding, you can find me exploring new teechnologies, contributing to open-source
                    projects, or sharing knowledge with the developer community.
                </p>
                <motion.div {...scrollLeft} className="flex flex-row mt-10">
                        <motion.button {...buttonHover} className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-sm cursor-pointer mr-3 hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200 hover:text-white">
                            <Link to='#' className="flex">
                            Download CV <FaDownload  className="w-3 h-3 mt-1.5 ml-1"/>
                            </Link>
                        </motion.button>
                        <motion.button {...buttonHover} className="px-8 py-3 ml-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-sm cursor-pointer hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200 hover:text-white">
                            <Link to='mailto:oyinbook@gmail.com' className="flex">
                            View Projects<FaCode  className="w-4 h-4 mt-1 ml-1"/>
                            </Link>
                        </motion.button>
                </motion.div>
                <motion.div {...scrollUp} className="w-[25%] h-20 flex justify-between items-center mt-5">
                        <Link>
                            <FaGithub  className="text-white bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] rounded-lg w-9.5 h-9 p-2.5 hover:drop-shadow-[0_0_3px_#2563eb]"/>
                        </Link>
                        <Link>
                            <FaLinkedin  className="text-white bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] rounded-lg w-9.5 h-9 p-2.5 hover:drop-shadow-[0_0_3px_#2563eb]"/>
                        </Link>
                        <Link>
                            <FaTwitter  className="text-white bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] rounded-lg w-9.5 h-9 p-2.5 hover:drop-shadow-[0_0_3px_#2563eb]"/>
                        </Link>
                    </motion.div> 
                    
            </motion.div>
        </div>
        </motion.div>
        </>
    );
}