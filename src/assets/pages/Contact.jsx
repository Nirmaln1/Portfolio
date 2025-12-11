import { Mail, MapPinHouse, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="md:h-[93vh] scroll-mt-20">
      <div className="text-blue-500 text-[45px] font-[80px] font-bold text-center ">
        Get In Touch
      </div>
      <div className="flex  items-center gap-[30px] md:gap-[80px] flex-col md:flex-row  md:mt-10">
        <div className="flex flex-col gap-[30px] my-auto ml-5">
          <h1 className=" text-[40px] font-[80px] font-bold bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] bg-clip-text text-transparent ">
            Let's Talk
          </h1>

          <p className="text-white ">
            I am currently available for freelance work ,so feel free to send
            message about anything that you want to work on. You can contact
            anytime
          </p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex text-white">
              <Mail />
              <p>Email : nirmalthapan1@gmail.com</p>
            </div>
            <div className="flex text-white">
              <Phone />
              <p>Phone no:9840002374</p>
            </div>
            <div className="flex text-white">
              <MapPinHouse />
              <p>Address:Ktm Mulpani</p>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xanrlnww"
          method="POST"
          className="w-[90%] md:w-[650px] mx-10 flex flex-col gap-[20px] my-auto md:mr-5"
        >
          <div className="w-full">
            <label className="text-white" htmlFor="">
              Your Name
            </label>{" "}
            <br />
            <input
              className="text-white bg-[#32323c] w-full rounded-[4px]"
              type="text"
              name="Name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full">
            {" "}
            <label className="text-white" htmlFor="">
              Email
            </label>
            <br />
            <input
              className="text-white  bg-[#32323c]  w-full rounded-[4px]"
              type="email"
              name="Email"
              placeholder="Enter Your Email border border-white"
            />
          </div>
          <div className="w-full">
            <label className="text-white" htmlFor="">
              Message
            </label>
            <br />
            <textarea
              className="text-white w-full bg-[#32323c] rounded-[4px]"
              name="Message"
              id=""
              rows={4}
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mb-4 md:mb-0 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] rounded-[45px] cursor-pointer hover:scale-105 w-fit mx-auto mt-2 text-white p-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
