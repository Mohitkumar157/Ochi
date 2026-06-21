import React, { useRef } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function ContactUs() {
  const contactHeading = useRef();
  useGSAP(() => {
    gsap.from(".contact-heading", {
      y: "100%",
      duration: .7,
      delay : .2,
      opacity : 0.4,
      stagger :.1
    })
  })
  return (
    <section className="w-full bg-[#CFCFCF] py-16">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28">

        {/* Heading */}
        <h1
          className="
            uppercase text-[#212121] font-black leading-[0.9]
            text-[2.5rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[7rem]
            xl:text-[8rem]
            overflow-hidden
          "
        >
          <span className="contact-heading inline-block">
            Let’s Build
          </span>
           <br />
          <span className="contact-heading inline-block">
            Something Great
          </span>
        </h1>

        {/* Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">

          {/* Left Side */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-base sm:text-lg md:text-xl text-[#212121] leading-relaxed max-w-xl">
                Tell us about your idea, product, or presentation challenge.
                We’ll help craft something eye-opening.
              </p>
            </div>

            <div className="space-y-6 text-[#212121]">
              <div>
                <p className="text-sm uppercase tracking-wide mb-2 opacity-70">
                  Email
                </p>
                <p className="text-lg sm:text-xl md:text-2xl underline break-all">
                  hello@ochi.design
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide mb-2 opacity-70">
                  Phone
                </p>
                <p className="text-lg sm:text-xl md:text-2xl">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-6 md:space-y-8">
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full bg-transparent border-b border-black
                py-4 sm:py-5
                text-base sm:text-lg
                outline-none
                placeholder:text-[#555]
              "
            />

            <input
              type="email"
              placeholder="Email address"
              className="
                w-full bg-transparent border-b border-black
                py-4 sm:py-5
                text-base sm:text-lg
                outline-none
                placeholder:text-[#555]
              "
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project"
              className="
                w-full bg-transparent border-b border-black
                py-4 sm:py-5
                text-base sm:text-lg
                outline-none resize-none
                placeholder:text-[#555]
              "
            />

            <PrimaryButton ctaText={"send message"} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;