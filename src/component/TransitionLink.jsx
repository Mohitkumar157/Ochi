import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
function TransitionLink({ to, children, className, setRouteText }) {
    const navigate = useNavigate();
    const location = useLocation()
    let isTransition = false;
    function handlerClick(e) {
        e.preventDefault();
        
        if(isTransition) return;
        isTransition = true;

        const overlay = document.getElementById("overLay");
        const overlayHeading = document.querySelector(".overlay-heading");
       
        
        setRouteText?.(to)
        gsap.set(overlayHeading , {
            y : "0%"
        })
        gsap.set(overlay, {
            y: "100%",
            height: "100vh"
        });
        gsap.to(overlayHeading, {
            y: "-100px",
            duration: .4,
            delay : .8,
            ease: 'power2.in'
        })
        gsap.to(overlay, {
            y: "0%",
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                gsap.to(overlay, {
                    height: "0%",
                    duration: .8
                });

                navigate(to);
            }
        });

    }
    return (
        <button onClick={handlerClick} className={className}>
            {children}
        </button>
    )
}

export default TransitionLink;
