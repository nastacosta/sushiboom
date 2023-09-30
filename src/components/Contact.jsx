import React from "react";

function Contact() {
  return (
    <section className="contact-frame w-full flex flex-col items-center text-centerbg-white text-white h-[58rem]">
      <h3 className="font-bold text-white text-[3.2rem] mt-16 z-10">
        Contact Us Today
      </h3>
      <p className="text-[1.35rem] mt-4 mb-12 max-w-[41rem] text-center z-10">
        If you have any questions special requirements, call us or fill in the
        form below:
      </p>
      <form className="text-black w-full max-w-[35rem] flex flex-col gap-5 z-10">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-5 py-4 outline-none rounded-xl"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full px-5 py-4 outline-none rounded-xl"
        />
        <input
          type="text"
          placeholder="Telephone"
          className="w-full px-5 py-4 outline-none rounded-xl"
        />
        <textarea
          rows="3"
          placeholder="Message"
          className="w-full px-5 py-4 outline-none rounded-xl resize-none"
        ></textarea>
        <button
          type="button"
          className="py-4 px-16 mt-2 rounded-full bg-orange-600 text-white"
        >
          SUBMIT
        </button>
      </form>
      <p className="mt-8 text-[15px] z-10">
        By submitting this form, you agree to our{" "}
        <span className="underline">Privacy Policy</span>
      </p>
      <span className="gradient absolute w-full h-[58rem] opacity-50 z-0"></span>
    </section>
  );
}

export default Contact;
