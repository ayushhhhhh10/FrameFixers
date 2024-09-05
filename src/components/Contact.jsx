import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ertac88", "template_vkd2fpv", formRef.current, {
        publicKey: "Ph84yEvmrQrjsnFHj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: "url(/Contact-background.webp)",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mx-auto my-16 h-[95vh] w-[90%] sm:w-[80%] py-32 pl-6 sm:p-24 rounded-3xl text-white"
    >
      <h1 className="text-3xl sm:text-5xl font-bold">Get in touch</h1>
      <form ref={formRef} onSubmit={sendEmail} className="mt-10">
        <div className="flex sm:flex-row flex-col gap-4 mb-6">
          <input
            className="w-2/3 sm:w-52 px-5 py-3 rounded bg-[#0B0E18] border"
            placeholder="Enter your full name"
            type="text"
            name="user_name"
          />
          <input
            className="w-2/3 sm:w-52 px-5 py-3 rounded bg-[#0B0E18] border"
            placeholder="Enter your email"
            type="text"
            name="user_email"
          />
        </div>
        <h1 className="uppercase mb-1 text-zinc-100">Message</h1>
        <textarea
          name="message"
          className="px-5 py-3 rounded bg-[#0B0E18] border w-52 sm:w-96 h-28 sm:h-[20vh]"
          placeholder="Start typing here..."
        ></textarea>
        <div>
          <input
            type="submit"
            value="Submit"
            className="cursor-pointer mt-2 font-semibold bg-red-500 hover:bg-[#228493] px-7 py-4 rounded-md duration-200"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
