import { SiDjango, SiNodedotjs, SiReact, SiTailwindcss, SiPython, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import { buttonHover, scrollUp, skillEffectsbtn } from "../animations/motion";
export default function Skills(){
    return(
        <>
            <div className="w-full h-120 bg-gradient-to-b from-[#0f173b] to-[#1e293b] flex flex-col items-center">
                <motion.h2 {...scrollUp} className="mt-10 font-bold text-[#38bdf8] text-2xl">Technical Skills</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5">
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiDjango className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            Django
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[90%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            90% Proficiency
                        </p>
                    </motion.div>
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiNodedotjs className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            Node.js
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[85%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            85% Proficiency
                        </p>
                    </motion.div>
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiReact className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            React
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[88%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            88% Proficiency
                        </p>
                    </motion.div>
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiTailwindcss className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            TailwindCSS
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[92%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            92% Proficiency
                        </p>
                    </motion.div>
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiPython className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            Python
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[90%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            90% Proficiency
                        </p>
                    </motion.div>
                    <motion.div {...skillEffectsbtn} className="w-full h-30 p-4 rounded-lg mt-2 bg-[#02153b] shadow-lg hover:cursor-pointer">
                        <div className="flex items-center w-[100%] h-10 font-bold text-white">
                            <SiJavascript className="w-5 h-5 ml-1 mr-2 mt-1 text-[#38bdf8]" />
                            JavaScript
                        </div>
                        <div className="w-70 h-2.5 mt-2 rounded-sm bg-[#0f172a] relative">
                            <div className="absolute w-[87%] h-full border-1 rounded-sm bg-[#38bdf8]">
                            </div>
                        </div>
                        <p className="text-slate-300 text-[13px] mt-2">
                            87% Proficiency
                        </p>
                    </motion.div>

                </div>
            </div>
        </>
    );
}