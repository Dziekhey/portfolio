import { useState } from "react";
import LeftContact from "../../components/LeftContact";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  // const sendEmail = (e) => {

  const handleSend = (e) => {
    e.persist();
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
    emailjs
      .sendForm(
        process.env.VITE_APP_SERVICE_ID,
        process.env.VITE_APP_TEMPLATE_ID,
        e.target,
        process.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // setStateMessage('Message sent!');
          setSuccessMsg(
            `Thank you dear ${username}, Your Messages has been sent Successfully!`
          );
          // setIsSubmitting(false);
          setTimeout(() => {
            setSuccessMsg(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setSuccessMsg('Something went wrong, please try again later');
          setTimeout(() => {
            setSuccessMsg(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();

      
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div id="contact">
      <div className="   bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="flex justify-center">
          <h1 className="text-amber-200 text-4xl py-10">Contact Me</h1>
        </div>

        <div className="h-auto p-12 flex gap-14 justify-between">
          <div className="w-[37%] flex flex-col ">
            <LeftContact />
          </div>

          <div className="w-[60%] p-10 shadow-2xl shadow-black bg-gray-900">
          <form className="py-2">
          {errMsg && (
                <p className="bg-black py-2 shadow-2xl text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="bg-black py-2 shadow-2xl text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex gap-10 pb-8">
                <div className="w-1/2">
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
                <div className="w-1/2">
                  <h4 className="pb-4 text-white">PHONE NUMBER</h4>
                  <input
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    name="phonenumber"
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
  
                  />
                </div>
              </div>
              <div className="pb-8">
                <h4 className="pb-4 text-white">EMAIL</h4>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800`}
                
                />
              </div>
              <div className="pb-8">
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
              <div className="pb-8">
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
                <button onClick={handleSend} className="bg-black w-full rounded-lg hover:cursor-pointer">
                  <h4 className="p-3 text-white">SUBMIT</h4>
                </button>
              </div>
              {errMsg && (
                <p className="bg-black py-2 mt-6 shadow-2xl text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="bg-black py-2 mt-6 shadow-2xl text-center text-green-500 text-base tracking-wide animate-bounce">
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