import react from '../images/skills/react.png'
import javascript from '../images/skills/javascript.png'
import typescript from '../images/skills/typescript.png'
import tailwindcss from '../images/skills/tailwindcss.png'
import framer from '../images/skills/framer.png'
import nextjs from '../images/skills/nextjs.png'
import node from '../images/skills/nodejs.png'
import supabase from '../images/skills/superbase.png'
import bootstrap from '../images/skills/bootstrap.png'
import django from '../images/skills/django.png'
import postman from '../images/skills/postman.png'
import git from '../images/skills/git.png'
import github from '../images/skills/github.png'
import docker from '../images/skills/docker.png'
import rest_framework from '../images/skills/rest_framework.png'
import render from '../images/skills/render.png'
import vercel from '../images/skills/vercel.png'
import python from '../images/skills/python.png'
import { motion } from 'framer-motion'
import { buttonHover, projectEffectsbtn } from '../animations/motion'


const skills = [
    {
        id : 1,
        icon : react,
        text : 'React'
    },
    {
        id : 2,
        icon : javascript,
        text : 'JavaScript'
    },
    {
        id : 3,
        icon : typescript,
        text : 'TypeScript'
    },
    {
        id : 4,
        icon : tailwindcss,
        text : 'TailwindCSS'
    },
    {
        id : 5,
        icon : framer,
        text : 'Framer'
    },
    {
        id : 6,
        icon : bootstrap,
        text : 'Bootstrap'
    },
    {
        id : 7,
        icon : nextjs,
        text : 'Next Js'
    },
    {
        id : 8,
        icon : node,
        text : 'Node Js'
    },
    
    {
        id : 9,
        icon : supabase,
        text : 'Supabase'
    },
    {
        id : 10,
        icon : python,
        text : 'Python'
    },
    {
        id : 11,
        icon : django,
        text : 'Django'
    },
    {
        id : 12,
        icon : postman,
        text : 'Postman'
    },
    {
        id : 13,
        icon : git,
        text : 'Git'
    },
    {
        id : 14,
        icon : github,
        text : 'Github'
    },
    {
        id : 15,
        icon : docker,
        text : 'Docker'
    },
    {
        id : 16,
        icon : rest_framework,
        text : 'Rest_Frameworks'
    },
    {
        id : 17,
        icon : render,
        text : 'Render'
    },
    {
        id : 18,
        icon : vercel,
        text : 'Vercel'
    },
]

export function TechnicalSkills(){
    return(
        <>
            <div className="flex p-5 flex-col items-center">
                <h2 className="mt-5 font-bold text-[#38bdf8] text-3xl">Technical Skills</h2>
                <div className="px-5 lg:px-10 py-10 w-full lg:w-[85%] mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {skills.map((skill) => (
                    <motion.div {...projectEffectsbtn} className='cursor-pointer w-[90%] flex flex-col py-5 bg-[#02153b] hover:bg-[#0f172a] items-center rounded-md space-y-2.5 hover:border-1 hover:border-[#0f173b]'>
                        <img src={skill.icon} className='w-6 h-6 md:h-9 md:w-9 object-cover'/>
                        <h2 className='font-semibold text-white text-sm mt-1.5'>
                            {skill.text}
                        </h2>
                    </motion.div>
                ))}
                </div>
            </div>
        </>
    );
}