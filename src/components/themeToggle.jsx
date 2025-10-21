import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle(){
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark" );
    useEffect(() => {
        const root = window.document.documentElement;
        if(theme === 'dark'){
            root.classList.add('dark')
            localStorage.setItem("theme", "dark");
        }else {
            root.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [theme])
    return(
        <>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-3 hover:bg-[#02153b] transition-all duration-300 cursor-pointer rounded-md text-[#64748b] hover:text-[#2563eb] outline-none mr-5 md:mr-0">
                {theme === "dark" ? (
                    <FaSun className="w-5 h-5 text-[#2563eb]" />
                ) : (
                    <FaMoon className="w-5 h-5 text-gray-700" />
                )}
            </button>
        </>
    );
}