import React from "react";
import logo from "../../images/Logo.svg";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="py-16 border-b border-gray-800 lg:border-b-0 lg:border-l lg:order-last lg:py-24 lg:pl-12">
              <div className="flex justify-center text-teal-300 lg:hidden">
                <img src={logo} alt="" />
              </div>

              <div className="mt-12 space-y-4 lg:mt-0">
                <span className="bg-orange-400 rounded lg:h-1 lg:w-10 lg:block"></span>

                <div className="text-center lg:text-left">
                  <h5 className="text-2xl font-medium text-white">Request a Demo</h5>

                  <p className="max-w-md mx-auto mt-4 text-sm leading-relaxed text-gray-400 lg:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
                    harum deserunt nesciunt praesentium, repellendus eum perspiciatis
                    ratione pariatur a aperiam eius numquam doloribus asperiores sunt.
                  </p>
                </div>

                <form className="mt-6">
                  <div className="relative max-w-lg mx-auto lg:mx-0">
                    <label className="sr-only" for="email">
                      {" "}
                      Email{" "}
                    </label>

                    <input
                      className="w-full py-4 pl-3 pr-16 text-sm text-white bg-gray-800 border-none rounded-md"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />

                    <button
                      className="absolute p-3 transition -translate-y-1/2 bg-orange-400 hover:bg-orange-600 text-white rounded top-1/2 right-1.5"
                      type="button"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="pt-16 pb-8 lg:pt-24 lg:pr-12">
              <div className="hidden text-teal-300 lg:flex">
                <img src={logo} alt="" />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-12">
                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium text-white">About Us</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Company History
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Meet the Team
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Employee Handbook
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium text-white">Our Services</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Web Development
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Web Design
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Marketing
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Google Ads
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium text-white">Helpful Links</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          FAQs
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Support
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex group justify-center gap-1.5 lg:justify-start"
                          href="/"
                        >
                          <span className="text-white transition group-hover:text-white/75">
                            Live Chat
                          </span>

                          <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="pt-8 mt-16 text-sm text-white border-t border-gray-800 lg:mt-24">
                <p className="text-center lg:text-left">
                  <a
                    className="inline-block text-white underline transition hover:text-white/75"
                    href="/"
                  >
                    Privacy Policy
                  </a>

                  <span>&middot;</span>

                  <a
                    className="inline-block text-white underline transition hover:text-white/75"
                    href="/"
                  >
                    Terms & Conditions
                  </a>

                  <span>&middot;</span>

                  <a
                    className="inline-block text-white underline transition hover:text-white/75"
                    href="/"
                  >
                    Cookies
                  </a>
                </p>

                <p className="mt-4 text-center lg:text-left">
                  &copy; 2022 Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
