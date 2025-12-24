import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat(){
    return(
        <>
            <a 
                href="https://wa.me/2349131580378?text=Hello%20I%20would%20like%20to%20get%20in%20touch"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition box-shadow-white"
            >
                <FaWhatsapp  size={28}/>
            </a>
        </>
    );
}