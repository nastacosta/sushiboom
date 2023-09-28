import React from "react";

function Review({ customer, children }) {
  return (
    <article className="relative flex flex-col items-center justify-center text-center px-7 pt-[59px] pb-5 bg-background-grey text-white rounded-[1.5rem]">
      <img
        className="absolute w-20 -top-10 rounded-full select-none pointer-events-none"
        src="/img/Quote.svg"
        alt="quote"
      />
      <h5 className="font-bold">{customer}</h5>
      <p className="mt-3">{children}</p>
      <span className="mt-6 text-orange-600">★★★★★</span>
    </article>
  );
}

function Reviews() {
  return (
    <>
      <h3 className="font-bold text-white text-[3.2rem] mt-32 mb-20">
        What do our sushi lovers say?
      </h3>
      <section className="container px-7 grid grid-cols-3 gap-10 [&>*:nth-child(odd)]:mb-5 [&>*:nth-child(odd)]:pb-8">
        <Review customer="Bruno C.">
          Amazing sushi and right next home. I LOVE IT. Great quality and good
          portions! Great work guys and congratulations on this business!
        </Review>
        <Review customer="Usman H.">
          Me and my sister picked up a delicious selection today. Our favourites
          were the warm prawn tempura and cold tiger rolls. Will try more in the
          future!
        </Review>
        <Review customer="Namm S.">
          One of the best sushi out there! If anyone looking for fresh-made,
          quick and delicious taste sushi...this one is definitely the one. 100%
          recommend.
        </Review>
      </section>
    </>
  );
}

export default Reviews;
