import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const PageTransion = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)?$/; // Regular expression to allow only letters in the name field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!name.trim().match(nameRegex)) {
      alert("Name must contain only letters.");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    emailjs
      .sendForm(
        "service_q2smclk",
       "template_bl979ur",
        form.current,
      "Iclzun0lxDs3AWCK5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={PageTransion}
      className="  flex px-8 lg:px-16 py-8 justify-center lg:min-h-[50vh] "
    >
      <div className="flex flex-col justify-center gap-3 font-bold lg:w-[45%] w-[100%] h-96 rounded-md bg-slate-600">
        <p className="text-[40px] text-center text-white">Contact Me </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex gap-3 justify-center mb-2 focus:hover:scale-110 transition delay-100">
            <CgProfile size={40} />
            <input placeholder="Enter name" type="text" name="user_name" className="rounded-md px-3" />
          </div>
          <div className="flex gap-3 justify-center focus:hover:scale-110 transition delay-100">
            <AiOutlineMail size={40} />
            <input placeholder="Enter email address" type="email" name="user_email" className="rounded-md px-3" />
          </div>
          <div className="flex lg:gap-4 lg:ml-5 gap-5 justify-center mt-5 focus:hover:scale-110 transition delay-100">
            <BiMessageDetail size={40} />
            <textarea placeholder="Enter message" name="message" className="rounded-md px-3 w-60 h-20" />
          </div>
          <div className="flex lg:gap-3 mt-5 lg:ml-80 ml-40 p-2 rounded-md hover:scale-110 transition delay-75 border focus:bg-slate-950 border-red-500 w-fit">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
