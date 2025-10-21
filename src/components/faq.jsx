import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { scrollUp } from "../animations/motion";
import { motion } from "framer-motion";

const faqs = [
    {
        question : 'What technologies do you specialize in',
        answer : 'I Specialize in React, TailwindCSS, Node.Js, Python, Django, for building modern, scalable web applications',
    },
    {
        question: "Do you handle both frontend and backend development?",
        answer: "Yes! I'm a full-stack developer. I build responsive interfaces and efficient backend systems that work seamlessly together.",
    },
    {
        question: "Are you open to collaborations or freelance work?",
        answer: "Absolutely. I'm always open to collaborating on interesting projects or freelance opportunities that align with my skills.",
    },
    {
        question: "What tools do you use in your workflow?",
        answer: "I use VS Code, Git/GitHub, Figma, Postman, and various modern web dev tools for productivity and version control.",
    },
    {
        question: "How can I contact you?",
        answer: "You can reach me via the contact section of my website or send me an email directly.",
    },
]

export default function Faqs (){
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaqs = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return(
        <>
            <motion.section {...scrollUp} className="w-full bg-[#0f172a] text-white px-8 py-5 overflow-hidden">
                <h2 className="text-3xl font-bold text-center mb-10 mt-3 text-[#38bdf8]">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4 mb-10">
                    {faqs.map((faq, index) =>(
                        <div key={index} className="border-0.8 border-[#38bdf8] rounded-lg overflow-hidden">
                            <button onClick={() => toggleFaqs(index)} className="w-full flex justify-between items-center p-4 text-left bg-[#0f173b] hover:bg-[#02153b] group transition-all">
                                <span className="font-semibold text-xs md:text-sm">{faq.question}</span>
                                <FaChevronDown  className={`transform transition-transform group-hover:text-[#38bdf8] duration-300 ${activeIndex === index ? "rotate-180" : ""}`}/>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-[#02153b] text-gray-300 text-sm transition-all duration-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.section>
        </>
    )
}