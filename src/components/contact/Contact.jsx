import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-[800px] px-20 pt-10 pb-20 item-center border-b-[1px] border-b-[black]"
    >
      <div className="flex justify-center text-center items-center">
        <Title title="Get in touch" desc="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-[550px] justify-between flex">
         <ContactLeft/>
          <div className="w-[63%] h-full flex flex-col rounded-lg p-8 justify-between bg-slate-600">
              <form action="" className="w-full h-full flex flex-col justify-between">
                <div className=" justify-between">
                  <p>Full Name</p>
                  <input className="w-[80%] h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;" type="text" />
                  <p>Mobile No.</p>
                  <input type="number" name="" id="" />
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
