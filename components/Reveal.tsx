"use client";
import { motion } from "framer-motion";
export default function Reveal({children, delay=0, className=""}:{children:React.ReactNode;delay?:number;className?:string}) {
  return <motion.div className={className}
    initial={{opacity:0,y:34,filter:"blur(8px)"}}
    whileInView={{opacity:1,y:0,filter:"blur(0px)"}}
    viewport={{once:true,amount:.14}}
    transition={{duration:.8,delay,ease:[.22,1,.36,1]}}>
    {children}
  </motion.div>
}
