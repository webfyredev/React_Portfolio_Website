import { useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaChevronRight,} from "react-icons/fa";
import borders from '../images/batthern.png'
import logoBg from '../images/fyre.png'
import { ReactTyped } from "react-typed";
import {Link} from 'react-scroll'
import {buttonHover, scrollLeft, scrollRight} from '../animations/motion.js'
import { motion } from "framer-motion";
export default function Hero(){
    return(
        <>

            <div className="w-full lg:h-130 h-auto relative top-0 bg-[#0f173b] flex flex-col lg:flex lg:flex-row items-center justify-between px-5 py-10 absolute top-16 overflow-hidden" id="home">
                <div className="flex flex-col items-left lg:w-[45%] w-full h-auto lg:h-full px-3 py-10">
                    <motion.button {...scrollLeft} className="w-35 h-9  bg-[#0f172a] rounded-xl text-xs font-semibold text-slate-300 cursor-pointer drop-shadow-[0_0_5px_#2563eb]">
                    Ready to Build
                    </motion.button>
                    <motion.h1 {...scrollRight} className="mt-5 text-4xl font-bold text-slate-300">
                        Hi, I'm <span className=" text-slate-100 drop-shadow-[0_0_20px_#38bdf8]">Full-stack Developer</span>
                    </motion.h1>
                    <h2 className=" mt-5 text-lg md:text-xl font-semibold text-[#38bdf8] drop-shadow-[0_0_20px_#2563eb]">
                        <ReactTyped 
                        strings={[
                            "Frontend Developer",
                            "Backend Developer",
                            "Python Developer",
                            "Tech Enthusiast"
                        ]}
                        typeSpeed={90}
                        backSpeed={40}
                        loop>

                        </ReactTyped>
                    </h2>
                    <p className="text-slate-200 text-sm mt-5">
                        Passionate about creating innovative web solutions with modern technologies. Specializing in full stack development
                        with a focus on performance and user experience
                    </p>
                    <motion.div {...scrollLeft} className="flex flex-row mt-10">
                        <motion.button {...buttonHover} className="px-5 md:px-8 md:py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-sm cursor-pointer hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200">
                            <Link to='project' 
                                smooth = {true}
                                duration = {600}
                                offset={-50}
                            className="flex">
                            View Projects <FaChevronRight  className="w-3 h-3 md:mt-1 mt:0.5 ml-0.5"/>
                            </Link>
                        </motion.button>
                        <motion.button {...buttonHover} className="px-8 py-3 ml-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-[#0f172a] font-semibold text-sm cursor-pointer hover:drop-shadow-[0_0_3px_#2563eb] transition-all duration-200">
                            <Link to="contact"
                            smooth = {true}
                            duration = {600}
                            offset = {-50}
                            className="flex">
                            Contact Me<FaEnvelope  className="w-4 h-4 md:mt-1 mt-0.5 ml-0.5"/>
                            </Link>
                        </motion.button>
                    </motion.div> 
                </div>
                <div className="lg:w-[45%] lg:h-full w-full h-auto">
                    <motion.img {...scrollLeft} src={logoBg} className="w-full h-[100%] object-cover relative cursor-pointer hover:scale-105 transition-all duration-300"/>
                </div>
            </div>
        </>
    );
}