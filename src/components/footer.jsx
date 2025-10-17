import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <footer className="w-full h-auto flex flex-col items-center justify-center bg-[#0f172a] py-5">
                <span className="w-full h-0.05 border-1 border-[#02153b] mb-2"></span>
                <div className="flex w-full h-10 items-center justify-between px-5">
                    <p className="text-[#64748b] text-sm">&copy; {dates} <Link to="mailto:webfyre@gmail.com" className="font-semibold">webfyre@gmail.com</Link>. All right reserved.</p>
                    <div className="flex items-center justify-evenly text-[#38bdf8]  w-30">
                    <Link to="#">
                        <FaGithub  className="cursor-pointer hover:text-[#2563eb] "/>
                    </Link>
                    <Link to="#">
                        <FaLinkedin  className="cursor-pointer hover:text-[#2563eb]"/>
                    </Link>
                    <Link to="#">
                        <FaTwitter  className="cursor-pointer hover:text-[#2563eb]"/>
                    </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}