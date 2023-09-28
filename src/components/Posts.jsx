import React from "react";

function Post({ children, img }) {
  return (
    <article className="post-item group overflow-hidden relative text-white h-[17.3rem] flex flex-col items-center justify-center">
      <p className="font-medium translate-y-6 opacity-0 text-[14px] duration-200 text-center mx-[2rem] z-10 transition-all ease-linear group-hover:opacity-100 group-hover:translate-y-0">
        {children}
      </p>
      <img
        className="absolute w-full h-full object-cover blur-[0.5px] transition-all ease-linear duration-200 group-hover:brightness-[10%]"
        src={img}
      />
    </article>
  );
}

function Posts() {
  return (
    <>
      <h3 className="font-bold text-white text-[2.5rem] mt-36 mb-16">
        @SUSHI_BOOM_LONDON
      </h3>
      <section className="container px-7 grid grid-cols-4 gap-5 mb-16">
        <Post img="/img/post-1.jpg">
          @sushi_boom_london: Are you tired of paying lots of £££ and getting
          dry, small, flavourless sushi? 😓 😏 Then you must try ...
        </Post>
        <Post img="/img/post-2.jpg">
          @sushi_boom_london: Craving the finest sushi experience? Look no
          further! 🤤🍣 Fresh, responsibly sourced ingredients ...
        </Post>
        <Post img="/img/post-3.jpg">
          @sushi_boom_london: Thinking on what to eat? How about best sushi in
          town? Mouthwatering, tender and juicy 🥰🤤 Cupidon set 💘 ...
        </Post>
        <Post img="/img/post-4.jpg">
          @sushi_boom_london: Fresh, flavorful, and irresistibly delicious!🤤
          👨‍🍳Made with high quality ingredients and artful ...
        </Post>
        <Post img="/img/post-5.jpg">
          @sushi_boom_london: 6000 FOLLOWERS GIVEAWAY🥳🥳🥳 ❤️ We are so
          grateful to have you, I still remember the day when I started my ...
        </Post>
        <Post img="/img/post-6.jpg">
          @sushi_boom_london: Ninja set 💥 Looking at the name of this set some
          of you may remember Ninja turtles 🐢 who used to fight evil in ...
        </Post>
        <Post img="/img/post-7.jpg">
          @sushi_boom_london: Range of our beautiful sets now available in our
          highlights* 🫶 we created it so you can see them closer, as ...
        </Post>
        <Post img="/img/post-8.jpg">
          @ccgyozalover: Can sushi rolls be warm? YES! You can find different
          kind of warm sushi rolls @sushi_boom_london 😍😍😍
        </Post>
      </section>
    </>
  );
}

export default Posts;
