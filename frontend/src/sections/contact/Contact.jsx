import React from "react";

const Contact = () => {
  return (
    <div id="contact-section">
      <div className=" bg-zinc-800">
        <div className="flex justify-center">
          <h1 className="text-white py-10">Contact Me</h1>
        </div>

        <div className="h-auto p-12 flex ">
          <div className="w-[39%] flex flex-col">contact section</div>

          <div className="w-[60%] p-10 shadow-2xl shadow-black bg-zinc-800">
            <form>
              <div className="w-full flex gap-10 pb-8">
                <div className="w-1/2">
                  <h4 className="pb-4 text-white">FULL NAME</h4>
                  <input
                    type="text"
                    className="w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800"
                  />
                </div>
                <div className="w-1/2">
                  <h4 className="pb-4 text-white">PHONE NUMBER</h4>
                  <input
                    type="text"
                    className="w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800"
                  />
                </div>
              </div>
              <div className="pb-8">
                <h4 className="pb-4 text-white">EMAIL</h4>
                <input
                  type="text"
                  className="w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800"
                />
              </div>
              <div className="pb-8">
                <h4 className="pb-4 text-white">SUBJECT</h4>
                <input
                  type="text"
                  className="w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800"
                />
              </div>
              <div className="pb-8">
                <h4 className="pb-4 text-white">MESSAGE</h4>
                <textarea
                  rows="8"
                  className="w-full py-3 px-2 rounded-lg bg-black text-[16px] text-white focus:outline focus:ring focus:border-blue-800"
                />
              </div>
              <div>
                <button className="bg-black w-full rounded-lg hover:cursor-pointer">
                  <h4 className="p-3 text-white">SUBMIT</h4>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
