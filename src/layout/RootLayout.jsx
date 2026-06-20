import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/ui/Header";
import Footer from "../component/ui/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function RootLayout() {
  const [routeText  ,setRouteText] = useState("")
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    const initScroll = () => {
      const isDesktop = window.innerWidth >= 768;

      // Pehle old instance destroy
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }

      // Sirf desktop par initialize
      if (isDesktop) {
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
      }
    };

    initScroll();

    window.addEventListener("resize", initScroll);

    return () => {
      window.removeEventListener("resize", initScroll);

      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, [location.pathname]);

 
  return (
    <>
      <div id="overLay" className="text-5xl text-white absolute top-0 left-0 w-full h-0 overflow-hidden bg-[#212121] z-999">
        <div className="container ">
          <div className=" w-full h-screen flex justify-start items-center ">
            <div className="overflow-hidden">
              <h1 className="overlay-heading text-9xl text-[#f1f1f1]!">
              {routeText.slice(1 , routeText.length).toUpperCase()}
              </h1>
            </div>
          </div>
        </div>
        </div>
      <div data-scroll-container ref={scrollRef} className="overlay-parent">
        <Header setRouteText = {setRouteText}/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;