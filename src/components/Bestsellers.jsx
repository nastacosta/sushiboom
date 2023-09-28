import React from "react";

function Item({ children, img }) {
  return (
    <article className="bestseller-item group overflow-hidden relative rounded-[1.5rem] text-white h-[19rem] flex flex-col items-center justify-end transition-all duration-300">
      <h4 className="bestseller-title font-bold text-2xl text-center mx-10 z-10 transition-all duration-300 group-hover:-translate-y-20">
        {children}
      </h4>
      <button className="bestseller-button opacity-0 relative bottom-10 mb-3 h-fit p-[14px] px-8 text-sm font-medium rounded-3xl bg-orange-600 z-10 transition-all duration-300 group-hover:opacity-100">
        ORDER NOW
      </button>
      <img
        className="absolute w-full h-full object-cover blur-[0.5px] transition-all ease-linear duration-200 group-hover:scale-105"
        src={img}
      />
      <span className="absolute w-full h-full bg-white"></span>
    </article>
  );
}

function Bestsellers() {
  return (
    <>
      <h3 className="font-bold text-white text-[3.2rem] mt-24 mb-16">
        Our Bestsellers
      </h3>
      <section className="container px-7 grid grid-cols-3 gap-9">
        <Item img="/img/bestseller-1.jpg">Eel Maki</Item>
        <Item img="/img/bestseller-2.jpg">
          Double Unagi With Sriracha Edamame
        </Item>
        <Item img="/img/bestseller-3.jpg">Surimi Crab Claws</Item>
        <Item img="/img/bestseller-4.jpg">Sriracha Edamame</Item>
        <Item img="/img/bestseller-5.jpg">Salmon Sushi Set</Item>
        <Item img="/img/bestseller-6.jpg">Unagi Rolls</Item>
      </section>
    </>
  );
}

export default Bestsellers;
