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

  // destroy old instance properly
  if (scrollInstance.current) {
    scrollInstance.current.destroy();
  }

  // re-init after DOM paints
  setTimeout(() => {
   if(window.innerWidth >= 768){
     scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
   }
  }, 0);

  return () => {
    scrollInstance.current?.destroy();
    scrollInstance.current = null;
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