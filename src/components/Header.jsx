import React from "react";

function Header() {
  return (
    <header className=" h-[110px] w-screen fixed flex gap-5 justify-center items-center text-white z-10">
      <img className="h-[100%] py-4" src="/img/SB-Logo-F.png" alt="logo" />
      <nav className="flex gap-8 px-3 items-center text-lg">
        <button>Home</button>
        <button>Allergens & Nutrition</button>
        <button>Order Information</button>
        <button>Contact Us</button>
      </nav>
      <section className="flex gap-4 text-sm">
        <button className="h-fit p-3 px-9 rounded-3xl bg-orange-600">
          ORDER NOW
        </button>
        <button className="h-fit p-3 px-9 rounded-3xl bg-orange-600">
          TABLE RESERVATION
        </button>
      </section>
    </header>
  );
}

export default Header;
