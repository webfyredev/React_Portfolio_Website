import { Link } from "react-router-dom";
export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <footer className="w-full h-auto flex flex-col items-center justify-center bg-[#0f172a] py-5">
                <span className="w-full h-0.05 border-1 border-[#02153b] mb-2"></span>
                <p className="text-[#64748b] text-sm">&copy; {dates} <Link to="mailto:oyinbook@gmail.com" className="font-semibold">oyinbook@gmail.com</Link></p>
            </footer>
        </>
    )
}