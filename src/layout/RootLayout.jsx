import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/ui/Header";
import Footer from "../component/ui/Footer";
import LocomotiveScroll from "locomotive-scroll";

function RootLayout() {
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
    <div data-scroll-container ref={scrollRef}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;