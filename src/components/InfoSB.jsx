import React from "react";

function Article({ children, image }) {
  return (
    <article className="bg-background-grey text-white p-9 w-[16.7rem] rounded-3xl flex flex-col items-center justify-center text-center gap-7 max-lg:w-full max-lg:gap-12">
      <img className="w-20" src={image} alt="" />
      <p className="text-lg max-lg:text-base max-w-[12rem]">{children}</p>
    </article>
  );
}

function InfoSB() {
  return (
    <>
      <h3 className="font-bold text-white text-[3.2rem] mb-16">
        Why Sushi Boom?
      </h3>
      <section className="container px-7 flex gap-9 mb-10 justify-between max-lg:flex-col max-lg:px-5 max-lg:gap-5">
        <Article image="/img/Open.svg">
          Open 7 days a week, 11:00 - 22:00
        </Article>
        <Article image="/img/Delivery.svg">
          Order for delivery or collection
        </Article>
        <Article image="/img/Fresh_Ingredients.svg">
          We use only fresh ingredients
        </Article>
        <Article image="/img/Catering.svg">
          Catering for any special occasions
        </Article>
      </section>
    </>
  );
}

export default InfoSB;
