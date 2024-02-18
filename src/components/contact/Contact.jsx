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
        <div className="w-full h-[580px] justify-between flex">
          <ContactLeft />
          <div className="w-[63%] h-full flex flex-col rounded-lg p-8 justify-between bg-slate-600">
            <form action="" className="w-full h-full flex gap-3 p-8  flex-col">
              <div className="w-full flex gap-4">
                <div className="w-1/2 flex flex-col">
                  <p className="tracking-wide text-gray-400">Full Name</p>
                  <input
                    className="w-full h-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                    type="text"
                  />
                </div>
                <div className="w-1/2 flex flex-col ">
                  <p>Mobile No.</p>
                  <input
                    className="w-full h-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                    type="number"
                  />
                </div>
              </div>
              <div className="w-full gap-4">
                <p>Email</p>
                <input
                  className="w-full h-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                  type="email"
                />
              </div>
              <div className="w-full gap-4">
                <p>Subject</p>
                <input
                  className="w-full h-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                  type="text"
                />
              </div>
              <div className="w-full gap-4">
                 <p>Your Message</p>
                  <textarea className="w-full h-40 row-span-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 py-2 px-3 outline-none resize-none " ></textarea>
              </div>
              <div className="w-[20%]">
                <button
                  className="w-60 h-12 rounded-lg  bg-slate-800 text-gray-400 text-semibold active:outline-none hover:focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
