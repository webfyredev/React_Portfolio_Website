import { useState, useEffect } from "react";
import { Route, Link as RouteLink } from "react-router-dom";
import logo from '../images/log.png'
// import { BsSun, BsMoon } from "react-icons/bs";
import { FaMoon, FaSun, FaTimes, FaBars} from "react-icons/fa"
import { Link as ScrollLink } from "react-scroll"
import { scrollUp } from "../animations/motion";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";





export default function NavBar(){
    const [openIcon, setOpenIcon] = useState(false)
    return(
        <>
            <nav className="w-full h-15 z-50 top-0 bg-blue-500 dark:text-red-500  dark:bg-[#0f172a]/90 backdrop-blur-md z-50 flex flex-row items-center justify-between px-8 fixed">
                <RouteLink to ="/" className="font-bold text-[#38bdf8] text-2xl flex">
                    <img src={logo} className="w-9 h-8.5" />WebFyre
                </RouteLink>
                <div className="hidden lg:flex items-center justify-evenly ml-10">
                    <ul className="flex">
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            <ScrollLink to="home"
                            smooth={true}
                            duration={600}
                            offset={-50}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            <ScrollLink to="about"
                            smooth={true}
                            duration={600}
                            offset={-50}
                            spy={true}
                            activeClass="active-link"
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            <ScrollLink to="skill"
                            smooth={true}
                            duration={600}
                            offset = {-50}
                            spy={true}
                            activeClass="active-link"
                            >
                                Skills
                            </ScrollLink>
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            <ScrollLink to="project"
                            smooth={true}
                            duration={600}
                            offset={-50}
                            spy={true}
                            activeClass = "active-link"
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            <ScrollLink to="contact"
                            smooth={true}
                            duration={600}
                            offset={-50}
                            spy={true}
                            activeClass="active-link"
                            >
                                Contacts
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* <ThemeToggle /> */}
                    <button onClick={() => setOpenIcon(!openIcon)} className="lg:hidden p-3 hover:bg-[#02153b] transition-all duration-300 cursor-pointer rounded-md text-[#38bdf8] hover:text-[#2563eb] outline-none">
                        {openIcon ? <FaTimes  size={20}/> : <FaBars  size={20}/>}
                    </button>
                    {openIcon && (
                        <motion.div {...scrollUp} className="absolute top-16 left-0 w-full h-auto px-2 py-5 bg-[#0f172a] z-50">
                            <ul className="flex flex-col space-y-2">
                                <li className="px-7 py-3 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                                    <ScrollLink to="home"
                                        smooth={true}
                                        duration={600}
                                        offset={-50}
                                        spy={true}
                                        activeClass = 'active-mobile'
                                        >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li className="px-7 py-3 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                                    <ScrollLink to="about"
                                        smooth={true}
                                        duration={600}
                                        offset={-50}
                                        spy={true}
                                        activeClass="active-mobile"
                                        >
                                            About
                                    </ScrollLink>
                                </li>
                                <li className="px-7 py-3 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                                    <ScrollLink to="skill"
                                        smooth={true}
                                        duration={600}
                                        offset = {-50}
                                        spy={true}
                                        activeClass="active-mobile"
                                        >
                                        Skills
                                    </ScrollLink>
                                </li>
                                <li className="px-7 py-3 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                                    <ScrollLink to="project"
                                        smooth={true}
                                        duration={600}
                                        offset={-50}
                                        spy={true}
                                        activeClass = "active-mobile"
                                        >
                                            Projects
                                    </ScrollLink>
                                </li>
                                <li className="px-7 py-3 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                                    <ScrollLink to="contact"
                                        smooth={true}
                                        duration={600}
                                        offset={-50}
                                        spy={true}
                                        activeClass="active-mobile"
                                        >
                                        Contacts
                                    </ScrollLink>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </>
    );
}