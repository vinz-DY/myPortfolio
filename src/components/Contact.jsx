import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/d8b50c9f-874a-45cd-a5eb-a9cc83091f93"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cbbeff] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            vincentducampyong@gmail.com{" "}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded focus:bg-slate-200 focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded focus:bg-slate-200 focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded focus:bg-slate-200 focus:outline-none"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 px-6 py-3 my-8 mx-auto flex items-center hover:bg-[#6166d7] hover:border-[#6166d7]">
          Let's Collab
        </button>
      </form>
    </div>
  );
};

export default Contact;
