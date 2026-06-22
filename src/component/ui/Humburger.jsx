import React, { useRef, useState } from 'react'
import TransitionLink from '../TransitionLink'
import { Menu } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const navLinks = [
    {
        text: "home",
        url: "/"
    },
    {
        text: "Services",
        url: "/services"
    },
    {
        text: "Our Work",
        url: '/ourwork'
    },
    {
        text: "About us",
        url: "/aboutus"
    },
    {
        text: "Insights",
        url: "/insights"
    },
    {
        text: "Contact us",
        url: "/contactus"
    }

]

function Humburger({ open, setOpen }) {
     
    const humburgerRef = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        gsap.set(humburgerRef.current, {
            height: 0,
        });

        tl.current.to(humburgerRef.current, {
            height: "100vh",
            duration: .5,
            ease: "circ.out",
        });
    }, []);

    function handlerShowMenu() {

        setOpen(pre => !pre);
        if (!open) {
            tl.current.play();
            gsap.from(".humburger-link", {
                y: "-100%",
                opacity: 0,
                delay : .1,
                opacity : 0,
                duration: .6,
                
                ease: "power4.out"
            })
        }
        else {
            tl.current.reverse()
        }

        console.log("clicked");

    }


    function closeMenu(e) {
        console.log(e.target.innerText);
        setOpen(false)
        e.stopPropagation()
        tl.current.reverse()
    }

    return (

        <>
            <div ref={humburgerRef}
                className='w-full z-99 h-screen
            bg-[#212121] absolute top-0 left-0 
             overflow-hidden'
            >
                <div className='border-t border-t-[#ccc] container flex flex-col justify-center items-start mt-26!'>
                    {
                        navLinks
                            .map((link, i) => <NavLink onClick={closeMenu} to={link.url}
                                key={i}
                                className={({isActive}) => `overflow-hidden text-[#f1f1f1]  text-8xl 
                                mb-4 font-[FounderGrotesk]! uppercase ${isActive ? "text-[#cdea68]! border-b-2  border-b-[#cdea68]" : "text-[#f1f1f1] border-b-2 border-transparent"}`}
                                >
                                <p className='humburger-link'>{link.text}</p>
                            </NavLink>)
                    }
                </div>
            </div>
            <div className=' w-full
           container flex justify-end items-end relative'>



                <Menu className={`text-[#212121] absolute right-0 top-0 z-999 ${open && "text-[#f1f1f1]"}`} onClick={handlerShowMenu} />
            </div>
        </>

    )
}

export default Humburger;
