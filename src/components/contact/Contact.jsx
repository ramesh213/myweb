import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [mobile, SetMobile] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");


  // email validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrorMsg("Please provide your full name !!!");
    } else if (mobile === "") {
      setErrorMsg("Please enter mobile number!");
    } else if (email === "") {
      setErrorMsg("Please provide email address.");
    } else if (!emailValidation) {
      setErrorMsg("Please provide valid email.");
    } else if (subject === "") {
      setErrorMsg("Don't leave subject blank !");
    } else if (message === "") {
      setErrorMsg("Please write some message !!!");
    } else {
      setSuccess("Message sent successfully !");
      setUserName("");
      SetMobile("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrorMsg("");

      // console.log(userName, email,mobile,subject,message)
    }
  };

  // fucntionality for clearing success message after 3 seconds
  useEffect(() => {
    if(success) {
      const timer  = setTimeout(() => {
        setSuccess('');
      },3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

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
          <div className="w-[63%] h-full flex flex-col  rounded-xl shadow-2xl p-8 justify-between bg-slate-600">
            
            {/* Displaying error message */}

            <p className="text-orange-300 ml-10 text-md font-bold animate-bounce">
              {/* shows either error msg or success msg */}
              {errormsg ? errormsg : success}
            </p>
           
            <form action="" className="w-full h-full flex gap-3 p-8  flex-col">
              <div className="w-full flex gap-4">
                <div className="w-1/2 flex flex-col">
                  <p className="tracking-wide text-gray-400">Full Name</p>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className="w-full h-10 hover:shadow hover:shadow-red-300 hover:focus-visible: rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                    type="text"
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col ">
                  <p>Mobile No.</p>
                  <input
                    onChange={(e) => SetMobile(e.target.value)}
                    value={mobile}
                    className="w-full h-10 hover:shadow hover:shadow-red-300 hover:focus-visible: rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                    type="number" min={0}
                  />
                </div>
              </div>
              <div className="w-full gap-4">
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full h-10 rounded-lg  hover:shadow hover:shadow-red-300 hover:focus-visible: border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                  type="email"
                />
              </div>
              <div className="w-full gap-4">
                <p>Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="w-full hover:shadow hover:shadow-red-300 hover:focus-visible: h-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 p-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-tranparent duration-300;"
                  type="text"
                />
              </div>
              <div className="w-full gap-4">
                <p>Your Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full h-40 hover:shadow hover:shadow-red-300 hover:focus-visible: row-span-10 rounded-lg border-b-[1px] border-b-gray-600 bg-slate-800 text-gray-400 py-2 px-3 outline-none resize-none "
                ></textarea>
              </div>
              <div className="w-[20%]">
                <button
                  onClick={handleClick}
                  className="w-60 h-12 rounded-lg  bg-slate-800 text-gray-400 text-semibold active:outline-none hover:shadow-2xl hover:visible hover:bg-blue-600 hover:text-white outline-none focus-visible:border-b-tranparent duration-300"
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
