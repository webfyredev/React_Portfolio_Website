import {motion, scale} from 'framer-motion'


export const buttonHover = {
    whileHover : {scale : 1.03},
    whileTap : {scale : 0.90},
}
export const scrollLeft = {
    initial : {opacity : 0, x:30},
    whileInView : {opacity : 1, x:0},
    transition : {duration : 1}
}
export const scrollUp = {
    initial : {opacity : 0, y:20},
    whileInView : {opacity:1, y:0},
    transition : {duration : 1},
}
export const scrollRight = {
    initial : {opacity : 0, x : -30},
    whileInView : {opacity:1, x : 0},
    transition : {duration : 1}

}

export const skillEffectsbtn = {
    initial : { opacity : 0, y : 20},
    whileInView : {opacity : 1, y:0},
    whileHover : {scale : 1.05},
    transition : {duration : 0.5}
}