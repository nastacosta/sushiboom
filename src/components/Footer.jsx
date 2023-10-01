import React from "react";

function Footer() {
  return (
    <section className="relative w-full h-[10rem] flex items-center justify-center gap-[37rem]">
      <p className="text-neutral-400 w-64">
        © Copyright All Rights Reserved Sushi Boom London, 2023
      </p>
      <img
        className="absolute h-[80%] py-4"
        src="/img/SB-Logo-F.png"
        alt="logo"
      />
      <div className="text-neutral-500 flex gap-16">
        <button className="underline">Privacy Policy</button>
        <button className="underline">Terms of Service</button>
      </div>
    </section>
  );
}

export default Footer;
