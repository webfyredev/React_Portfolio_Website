import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/log.png'
import { BsSun, BsMoon } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa"




export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className="w-full h-15 z-50 top-0 bg-[#0f172a] flex flex-row items-center justify-between px-8">
                <Link className="font-bold text-[#38bdf8] text-2xl flex">
                    <img src={logo} className="w-9 h-8.5" />WebFyre
                </Link>
                <div className="hidden md:flex items-center justify-evenly ml-10">
                    <ul className="flex">
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            Home
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            About
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            Skills
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            Projects
                        </li>
                        <li className="px-7 py-2 rounded-md font-semibold text-[#64748b] text-sm hover:cursor-pointer hover:text-[#2563eb] hover:bg-[#02153b] transition-all duration-300 mr-1">
                            Contacts
                        </li>
                    </ul>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="p-3 hover:bg-[#02153b] transition-all duration-300 cursor-pointer rounded-md text-[#64748b] hover:text-[#2563eb] outline-none">
                    {isOpen ? <BsSun  className="w-6 h-5 drop-shadow-md "/> : <FaMoon  className="w-6 h-5 drop-shadow-md"/>  }
                </button>
            </nav>
        </>
    );
}