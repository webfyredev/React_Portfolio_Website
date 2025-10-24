import { motion } from "framer-motion";
import { buttonHover, scrollLeft, scrollUp, projectEffectsbtn, scrollUpNext } from "../animations/motion";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Project(){
    const [projects, setProjects] = useState([])
    useEffect(() =>{
        axios.get("https://portfolio-backend-1-2dt3.onrender.com/project-list/")
        .then((response) =>{
            setProjects(response.data)
        })
        .catch((error) =>{
            console.error('Error fetching projects', error)
        });
    }, []);
    const baseUrl = 'https://portfolio-backend-1-2dt3.onrender.com';
    return(
        <>
        <div className="w-full h-auto flex flex-col items-center overflow-hidden" id="project">
                <motion.h2 {...scrollUp} className="mt-5 font-bold text-[#38bdf8] text-3xl">My Projects</motion.h2>
                <motion.p {...scrollUpNext} className="md:w-[50%] text-center my-3 text-slate-200 text-xs lg:text-sm">
                    Here are some of my recent prrojects that showcase my skills in web development and backend engineering. Each project represents a unique challenge and solution
                </motion.p>
                <motion.div {...scrollUp} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto mt-3 p-5">
                {projects.map((project, index) =>(
                    <motion.div {...projectEffectsbtn} className="w-[95%] flex flex-col p-5 mb-5 rounded-md bg-[#0f172a]">
                        <img src={project.image} alt={project.title} className="w-[100%] h-full object-cover" />
                        <h2 className="mt-2 font-semibold text-[#38bdf8]">{project.title}</h2>
                        <p className="text-slate-200 text-sm mt-2">
                            {project.text}
                        </p>
                        <ul className="flex">
                            {project.skills.map((skill) =>(
                                <motion.li {...buttonHover} className="px-4 py-1.5 mt-4 text-xs font-semibold mr-2 rounded-xl bg-[#02153b] text-[#38bdf8] hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-white transition-all duration-300 hover:cursor-pointer">{skill}</motion.li>
                            ))}
                        </ul>
                        <div className="w-full h-20 mt-4 flex items-center justify-between">
                            <motion.button {...buttonHover} className="w-35 h-[85%] bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-sm font-semibold rounded-md cursor-pointer text-white">
                                <Link to={project.live_demo}>
                                    Live Demo
                                </Link>
                            </motion.button>
                            <motion.button {...buttonHover} className="w-35 h-[85%] border-1 border-[#38bdf8] text-sm font-semibold rounded-md cursor-pointer text-white hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] transition-all duration-500">
                                <Link to={project.code_link}>
                                    View Code
                                </Link>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
                </motion.div>
        </div>
        </>
    );
}