import React, { useState } from "react";
import LeftContact from "../../components/LeftContact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    // Create a new object that contains dynamic template params
    const templateParams = {
      username: username,
      email: email,
      phonenumber: phonenumber,
      to_name: "Sandra Mawuwenam Dakey",
      subject: subject,
      message: message,
    };

    // Send the email using Emailjs
    if (username === "") {
      setErrMsg("Full name is required!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    } else if (phonenumber === "") {
      setErrMsg("Phone number is required!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    } else if (message === "") {
      setErrMsg("Message is required!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    } else {
      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setSuccessMsg(
              `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setTimeout(() => {
              setSuccessMsg(null);
            }, 5000);
          },
          (error) => {
            console.log(error)
            setSuccessMsg("Something went wrong, please try again later");
            setTimeout(() => {
              setSuccessMsg(null);
            }, 5000);
          }
        );
      e.target.reset();

      setErrMsg("");
      setUsername("");
      setPhonenumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="flex justify-center">
          <h1 className="text-amber-200 text-4xl py-10">Contact Me</h1>
        </div>

        <div className="h-auto p-6 md:p-12 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[37%] flex flex-col">
            <LeftContact />
          </div>

          <div className="w-full md:w-[60%] p-6 md:p-10 shadow-2xl shadow-black bg-gray-900">
            <form onSubmit={handleSend}>
              {errMsg && (
                <p className="bg-black py-2 text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="bg-black py-2 text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="lg:pb-8">
                  <h4 className="pb-4 text-white">FULL NAME</h4>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    name="username"
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-border-blue-800"
                    } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                  />
                </div>
                <div>
                  <h4 className="pb-4 text-white">PHONE NUMBER</h4>
                  <input
                    type="tel"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                    name="phonenumber"
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                  />
                </div>
              </div>
              <div className="lg:pb-8">
                <h4 className="pb-4 text-white">EMAIL</h4>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                />
              </div>
              <div className="lg:pb-8">
                <h4 className="pb-4 text-white">SUBJECT</h4>
                <input
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                />
              </div>
              <div className="lg:pb-8">
                <h4 className="pb-4 text-white">MESSAGE</h4>
                <textarea
                  rows="8"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black w-full rounded-lg hover:cursor-pointer"
                >
                  <h4 className="p-3 text-white">SUBMIT</h4>
                </button>
              </div>
              {errMsg && (
                <p className="bg-black py-2 mt-4 text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="bg-black py-2 mt-4 text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
