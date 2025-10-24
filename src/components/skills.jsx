import { SiDjango, SiNodedotjs, SiReact, SiTailwindcss, SiPython, SiJavascript,} from "react-icons/si";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { buttonHover, scrollUp, skillEffectsbtn, scrollLeft, scrollRight } from "../animations/motion";
export default function Skills(){
    const frontEnd_Skills = [
        {
            name : 'React',
            level : 85,
        },
        {
            name : 'TailwindCSS',
            level : 90,
        },
        {
            name : 'Bootstrap',
            level : 75
        },
        {
            name : 'JavaScript',
            level : 85
        }

    ]
    const backEnd_Skills = [
        {
            name : 'Node.js',
            level : 85
        },
        {
            name : 'Django',
            level : 90
        },
        {
            name : 'Next.Js',
            level : 70
        },
        {
            name : 'REST APIs',
            level : 80
        }
    ]
    const dataBase_Skills = [
        {
            name : 'db.sqlite3',
            level : 85
        },
        {
            name : 'Supabase',
            level : 60
        },
        {
            name : 'MongoDB',
            level : 75
        }
    ]
    const tool_skills = [
        {
            name : 'Git',
            level : 75,
        },
        {
            name : 'Github',
            level : 75,
        },
        
        {
            name : 'Vercel',
            level : 85,
        },
        {
            name : 'Docker',
            level : 80
        },
    ]
    return(
        <>
            <div className="w-full h-auto bg-gradient-to-b from-[#0f173b] to-[#1e293b] flex flex-col items-center py-5 md:py-10 overflow-hidden" id="skill">
                <motion.h2 {...scrollUp} className="mt-10 font-bold text-[#38bdf8] text-3xl">Technical Skills</motion.h2>
                <motion.div {...scrollLeft} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-3 mt-10">
                    <motion.div {...buttonHover}  className="md:w-85 w-100 sm:w-150 mb-5 md:mb-0 h-85 p-5 rounded-md bg-[#0f172a] shadow-md cursor-pointer">
                        <FaLaptopCode className="w-10 h-8 mb-3 text-[#38bdf8] mt-2"/>
                        <h3 className="font-semibold mb-3 text-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">
                        Frontend
                        </h3>
                        {frontEnd_Skills.map((skills, i) =>(
                            <div key={i}>
                                
                                <div className="flex justify-between mb-3 text-white text-sm">
                                    <span>{skills.name}</span>
                                    <span className="text-xs font-semibold">{skills.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
                                    <motion.div className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] h-2 rounded-full"
                                    initial={{width : 0}}
                                    whileInView={{width : `${skills.level}%`}}
                                    transition={{duration : 1.5, ease : "easeOut"}}
                                    >

                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...buttonHover} className="md:w-85 sm:w-150 w-100 mb-5 md:mb-0 h-85 p-5 rounded-md bg-[#0f172a] shadow-md cursor-pointer">
                        <FaServer className="w-10 h-8 mb-3 text-[#38bdf8] mt-2"/>
                        <h3 className="font-semibold mb-3 text-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">
                        Backend
                        </h3>
                        {backEnd_Skills.map((skills, i) =>(
                            <div key={i}>
                                
                                <div className="flex justify-between mb-3 text-white text-sm">
                                    <span>{skills.name}</span>
                                    <span className="text-xs font-semibold">{skills.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
                                    <motion.div className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] h-2 rounded-full"
                                    initial={{width : 0}}
                                    whileInView={{width : `${skills.level}%`}}
                                    transition={{duration : 1.5, ease : "easeOut"}}
                                    >

                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...buttonHover} className="md:w-85 sm:w-150 w-100 mb-5 md:mb-0 h-85 p-5 rounded-md bg-[#0f172a] shadow-md cursor-pointer">
                        <FaDatabase className="w-10 h-8 mb-3 text-[#38bdf8] mt-2"/>
                        <h3 className="font-semibold mb-3 text-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">
                        Database
                        </h3>
                        {dataBase_Skills.map((skills, i) =>(
                            <div key={i}>
                                
                                <div className="flex justify-between mb-3 text-white text-sm">
                                    <span>{skills.name}</span>
                                    <span className="text-xs font-semibold">{skills.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
                                    <motion.div className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] h-2 rounded-full"
                                    initial={{width : 0}}
                                    whileInView={{width : `${skills.level}%`}}
                                    transition={{duration : 1.5, ease : "easeOut"}}
                                    >

                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div {...buttonHover} className="md:w-85 sm:w-150 w-100 mb-5 md:mb-0 h-85 p-5 rounded-md bg-[#0f172a] shadow-md cursor-pointer">
                        <FaTools className="w-10 h-8 mb-3 text-[#38bdf8] mt-2"/>
                        <h3 className="font-semibold mb-3 text-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">
                        Other Tools
                        </h3>
                        {tool_skills.map((skills, i) =>(
                            <div key={i}>
                                
                                <div className="flex justify-between mb-3 text-white text-sm">
                                    <span>{skills.name}</span>
                                    <span className="text-xs font-semibold">{skills.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
                                    <motion.div className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] h-2 rounded-full"
                                    initial={{width : 0}}
                                    whileInView={{width : `${skills.level}%`}}
                                    transition={{duration : 1.5, ease : "easeOut"}}
                                    >

                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}