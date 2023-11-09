import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeButton = () => {
    // useEffect(() => {
    //     // 👇️ scroll to top on page load
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //   }, []);
    
      const [visible, setVisible] = useState(false);
    
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
          setVisible(true);
        } else if (scrolled <= 10) {
          setVisible(false);
        } 
      };
      window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behavior
         in place of 'smooth' */
    });
  };
  return (
    <div>
      {/* 👇️ scroll to top on button click */}
      <button
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
        //   height: "50px",
        //   width: "50px",
        //   borderRadius: "50%",
          position: "fixed",
          // padding: '1rem 1rem',
          fontSize: "10px",
          bottom: "10px",
          right: "10px",
          textAlign: "center",
        }}

        className="text-gray-500"
      >
        {/* ^ */}
        <span style={{fontSize:'24px',fontWeight:'bold', marginLeft:0}}><Link to={"/"}><AiFillHome size={35}/></Link></span>

      </button>
    </div>
  );
};

export default HomeButton;