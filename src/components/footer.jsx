import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiX } from "react-icons/si";
export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <footer className="w-full h-auto flex flex-col items-center justify-center bg-[#0f172a] py-5 overflow-hidden">
                <span className="w-full h-0.05 border-1 border-[#02153b] mb-2"></span>
                <div className="flex w-full h-10 items-center justify-between px-5">
                    <p className="text-[#64748b] text-[10px] md:text-sm">&copy; {dates} <Link to="mailto:oyinwebworks@gmail.com" className="font-semibold hover:text-[#2563eb] transition-all">oyinwebworks@gmail.com</Link>. All right reserved.</p>
                    <div className="flex items-center justify-evenly text-[#38bdf8]  w-30">
                    <Link to="https://github.com/webfyredev/">
                        <FaGithub  className="cursor-pointer hover:text-[#2563eb] "/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/oyinlade-oyinloye-3159ba292/">
                        <FaLinkedin  className="cursor-pointer hover:text-[#2563eb]"/>
                    </Link>
                    <Link to="https://x.com/OyinWebX">
                        <SiX  className="cursor-pointer hover:text-[#2563eb]"/>
                    </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}