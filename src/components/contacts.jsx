import { motion } from "framer-motion";
import { buttonHover, scrollUp, scrollUpNext, scrollLeft } from "../animations/motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { MdEmail } from 'react-icons/md'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

export default function Contacts(){
    const [formData, setFormData] = useState({full_name: "", email:"", message : ""})
    const [status, setStatus] = useState({message : "", type : ""});
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("https://portfolio-backend-1-2dt3.onrender.com/contact/", formData);
            setStatus({message : `Thanks for contacting us ${formData.email}`, type : "success"});
            setFormData ({full_name:"", email:"", message:""})
            setTimeout(() => setStatus(""), 4000)
        } catch (error){
            setStatus({message : "Failed to send Message. Try again", type : "error"})
            setTimeout(() => setStatus(""), 4000)
        };

    };
    return(
        <>
            {status.message && (
                <motion.div 
                initial = {{opacity : 0, y : -40}}
                animate = {{opacity : 1, y : 0}}
                transition={{duration:1}}
                exit={{opacity : 0, y : -40}}
                className={`fixed top-5 transform -translate-x-1/2 left-1/2 z-50 px-3 py-4 md:py-3.5 rounded-md shadow-sm text-white text-xs md:text-sm text-center w-[95%] h-12 font-semibold ${status.type === "success" ? 'bg-green-500' : 'bg-red-500'}`}>
                    {status.message}
                </motion.div>
            )}
            <div className="w-full h-auto px-3 md:px-0 py-10 items-center flex flex-col mt-10 overflow-hidden" id="contact">
                <motion.h2 {...scrollUp} className="text-3xl font-bold text-center my-3 text-[#38bdf8]">
                    Get In Touch
                </motion.h2>
                <motion.p {...scrollUpNext} className="text-center lg:w-[40%] w-full md:w-[80%] text-slate-300 text-xs  md:text-sm">
                    I'm always open to discussing new opportunities, interesting projects, or just haiving a chat about technology. Feel free to reach out.
                </motion.p>
                <form onSubmit={handleSubmit} className="md:w-[90%] w-full h-auto mt-5 flex flex-col md:p-5">
                    <label htmlFor="" className="mb-2 font-semibold text-xs md:text-sm text-[#38bdf8] ml-1">Full Name</label>
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Enter your full name" className="w-full h-12 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 mb-5 text-xs md:text-sm"/>
                    <label htmlFor="" className="mb-2 font-semibold text-xs md:text-sm text-[#38bdf8] ml-1">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" className="w-full h-12 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 mb-5 text-xs md:text-sm"/>
                    <label htmlFor="" className="mb-2 font-semibold text-xs md:text-sm text-[#38bdf8] ml-1">Message</label>
                    <textarea  name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or just say hello!" className="w-full h-30 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 text-xs md:text-sm"></textarea>
                    <motion.button type="submit" {...buttonHover} className="mt-5 w-full h-13 rounded-lg cursor-pointer font-bold bg-[#38bdf8] text-xs md:text-sm outline-none">Send Message</motion.button>
                </form>
                <motion.div {...scrollLeft} className="md:w-[90%] mt-20 w-full h-auto p-5 bg-[#0f172a] rounded-md ">
                    <h3 className="text-[#38bdf8] font-semibold text-lg md:text-2xl ml-5">
                        Let's Connect
                    </h3>
                    <div className="flex w-auto h-auto p-3 items-center mt-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <FaMapMarkerAlt  className="mr-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200 text-sm md:text-base">
                                Location
                            </h3>
                            <p className="text-xs md:text-sm text-white">
                                Ilorin, Nigeria
                            </p>
                        </div>
                    </div>
                    <div className="flex w-auto h-auto p-3 items-center mt-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <MdEmail  className="mr-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200 text-sm md:text-base">
                                Email
                            </h3>
                            <a href="mailto:oyinwebworks@gmail.com" className="text-xs md:text-sm text-white hover:text-[#38bdf8]">
                            oyinwebworks@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex w-auto h-auto p-3 items-center my-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <FaPhoneAlt  className="mr-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200 text-sm md:text-base">
                                Phone
                            </h3>
                            <a href="tel://+2349131580378" className="text-xs md:text-sm text-white hover:text-[#38bdf8]">
                            +2349131580378
                            </a>
                        </div>
                    </div>
                    <h3 className="text-[#38bdf8] font-semibold text-lg md:text-2xl ml-5 mt-10">
                        Follow Me
                    </h3>
                    <div className="flex Items-center justify-between w-50 h-auto px-4 py-2 mt-3">
                        <Link to="https://github.com/webfyredev/">
                            <FaGithub  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2.5 md:p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/oyinlade-oyinloye-3159ba292/">
                            <FaLinkedin  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2.5 md:p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="https://x.com/WebFyreDev">
                            <SiX  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2.5 md:p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="mailto:oyinwebworks@gmail.com">
                            <MdEmail  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2.5 md:p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
}