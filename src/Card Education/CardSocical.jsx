import React  from "react";


const CardSocial = ({icon,handleOnclik,url})=>{
    return(
        <div className=" flex flex-wrap justify-end "onClick={()=>handleOnclik(url)}>
          {icon}
        </div>
    )
}

export default CardSocial