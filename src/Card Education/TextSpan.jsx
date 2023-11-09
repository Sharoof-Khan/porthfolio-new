import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children  }) => {
    
    const control = useAnimationControls();
    const [isPlaying,setIsPlaying]=useState(false)

    const rubberBand =  ()=>{
        control.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,.1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition:{
                time:[0,.4,.6,.7,.8,.9]
            }
        })
        setIsPlaying(true)
    }
    // whileHover={()=>rubberBand()}

  return (
    <motion.p className="cursor-pointer hover:text-[#ff004f]" animate={control} 
    onMouseOver={()=>{
        if(!isPlaying){
            rubberBand()
        }
    }}    
    onAnimationComplete={()=>setIsPlaying(false)}
    >
      {children}
    </motion.p>
  );
};

export default TextSpan;
