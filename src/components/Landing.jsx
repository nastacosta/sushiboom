import React from "react";

function Landing() {
  return (
    <section className="ratona bg-stone-900 w-full h-[100vh] flex justify-center items-center text-white">
      <div className="container text-center px-32 z-10">
        <h2 className="font-bold text-[4rem] leading-tight px-4">
          Sushi Boom - It’s not just food, it's a sushi experience!
        </h2>
        <p className="text-[1.35rem] mt-10">
          Order now to find out why Sushi Boom is the best place in London
        </p>
        <div className="mt-20 flex justify-center gap-2 font-medium">
          <button className="h-fit py-[1.1rem] px-16 rounded-full bg-orange-600">
            ORDER NOW
          </button>
          <button className="h-fit py-[1.1rem] px-16 rounded-full bg-white text-black">
            TABLE RESERVATION
          </button>
        </div>
      </div>

      <iframe
        src="https://www.youtube.com/embed/j4EaBb2r8nk?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://sushiboom.co.uk&amp;playlist=j4EaBb2r8nk&amp;mute=1"
        allow="fullscreen"
        title="Sushi Boom London website video"
        className="h-[112vh] w-screen absolute pointer-events-none"
      ></iframe>

      <div className="absolute landing-gradient h-full w-full"></div>
    </section>
  );
}

export default Landing;
