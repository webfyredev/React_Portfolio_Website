import { motion } from "framer-motion";
import { buttonHover, scrollUp, scrollUpNext, scrollLeft } from "../animations/motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { MdEmail } from 'react-icons/md'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

export default function Contacts(){
    const [formData, setFormData] = useState({full_name: "", email:"", message : ""})
    const [status, setStatus] = useState("");
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:345/contact/", formData);
            setStatus("Messages sent successfully");
            setFormData ({full_name:"", email:"", message:""})
            setTimeout(() => setStatus(""), 4000)
        } catch (error){
                setStatus("Failed to send Message. Try again")
                setTimeout(() => setStatus(""), 4000)
        };

    };
    return(
        <>
            {status && (
                <motion.div initial ={{opacity:0, y:-50}}
                animate = {{opacity: 1, y:0}}
                exit={{opacity : 0, y:-50}}
                transition={{duration:0.4}}
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-semibold ${status.includes("success") ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {status}
                </motion.div>
            )}
            <div className="w-full h-auto px-3 md:px-5 py-10 items-center flex flex-col mt-10 overflow-hidden" id="contact">
                <motion.h2 {...scrollUp} className="text-3xl font-bold text-center mb-3 mt-3 text-[#38bdf8]">
                    Get In Touch
                </motion.h2>
                <motion.p {...scrollUpNext} className="text-center md:w-[40%] w-[80%] text-slate-300 text-xs  md:text-sm">
                    I'm always open to discussing new opportunities, interesting projects, or just haiving a chat about technology. Feel free to reach out.
                </motion.p>
                <form onSubmit={handleSubmit} className="md:w-[90%] w-full h-auto mt-5 flex flex-col p-5">
                    <label htmlFor="" className="mb-2 font-semibold text-sm text-[#38bdf8]">Full Name</label>
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Enter your full name" className="w-full h-12 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 mb-5 text-sm"/>
                    <label htmlFor="" className="mb-2 font-semibold text-sm text-[#38bdf8]">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" className="w-full h-12 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 mb-5 text-sm"/>
                    <label htmlFor="" className="mb-2 font-semibold text-sm text-[#38bdf8]">Message</label>
                    <textarea  name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or just say hello!" className="w-full h-30 outline-none p-5 hover:drop-shadow-[0_0_1px_#2563eb] rounded-lg bg-[#0f172a] text-[#38bdf8] transition-all duration-200 text-sm"></textarea>
                    <motion.button type="submit" {...buttonHover} className="mt-5 w-full h-13 rounded-lg cursor-pointer font-bold bg-[#38bdf8]">Send Message</motion.button>
                </form>
                <motion.div {...scrollLeft} className="mt-20 w-[90%] h-auto p-5 bg-[#0f172a] rounded-md ">
                    <h3 className="text-[#38bdf8] font-semibold text-lg md:text-2xl ml-5">
                        Let's Connect
                    </h3>
                    <div className="flex w-auto h-auto p-3 items-center mt-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <FaMapMarkerAlt  className="mr-2 w-10 h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200">
                                Location
                            </h3>
                            <p className="text-xs md:text-sm text-white">
                                Ilorin, Nigeria
                            </p>
                        </div>
                    </div>
                    <div className="flex w-auto h-auto p-3 items-center mt-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <MdEmail  className="mr-2 w-10 h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200">
                                Email
                            </h3>
                            <Link to="mailto:webfyre@gmail.com" className="text-sm text-white hover:text-[#38bdf8]">
                            webfyre@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-auto h-auto p-3 items-center my-3 hover:bg-[#0f173b] transition-all rounded-lg">
                        <FaPhoneAlt  className="mr-2 w-10 h-10 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[#0f172a] p-2.5 rounded-full mt-1"/>
                        <div className="flex flex-col w-40">
                            <h3 className="font-semibold text-slate-200">
                                Phone
                            </h3>
                            <Link to="phoneto:+2349131580378" className="text-sm text-white hover:text-[#38bdf8]">
                            +2349131580378
                            </Link>
                        </div>
                    </div>
                    <h3 className="text-[#38bdf8] font-semibold text-lg md:text-2xl ml-5 mt-10">
                        Follow Me
                    </h3>
                    <div className="flex Items-center justify-between w-50 h-auto px-4 py-2 mt-3">
                        <Link to="#">
                            <FaGithub  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="#">
                            <FaLinkedin  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="#">
                            <FaTwitter  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                        <Link to="#">
                            <MdEmail  className="w-9 h-9 cursor-pointer bg-[#0f173b] text-[#38bdf8] p-2 rounded-full hover:bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:text-[#0f172a] transtion-all duration-500"/>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
}