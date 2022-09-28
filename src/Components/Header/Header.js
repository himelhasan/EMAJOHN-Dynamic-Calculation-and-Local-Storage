import React from "react";

const Header = () => {
  return (
    <div>
      <section className="relative bg-center bg-no-repeat bg-cover bg-[url(https://img.freepik.com/free-photo/different-cosmetics-types-scattered-beige-table_23-2148046918.jpg?w=2000)]">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-orange-400">
                Forever Product.
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <a
                href="#"
                className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-orange-400 sm:w-auto active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-orange-600 sm:w-auto hover:text-orange-700 active:text-orange-500 focus:outline-none focus:ring"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
