'use client';
import React, { use, useEffect } from 'react';
import { useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useControls } from 'leva';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import Link from 'next/link';



export default function Home() {

  const signupboxref = useRef<HTMLDivElement>(null);
  const loginboxref = useRef<HTMLDivElement>(null);

  const textunref = useRef<HTMLDivElement>(null);

  const [signuphover, setSignupHover] = useState(false);
  const [loginhover, setLoginHover] = useState(false);
  const [textunder, setTextunder] = useState(false);
  function signuph() {
    setSignupHover(true);
  }
  function loginh() {
    setLoginHover(true);
  }
  function signupnoh() {
    setSignupHover(false);
  }
  function loginnoh() {
    setLoginHover(false);
  }
  function texth() {
    setTextunder(true)
  }
  function textnoh() {
    setTextunder(false)
  }


  useGSAP(() => {
    if (loginhover) {
      const t2 = gsap.timeline()
      t2.fromTo(
        loginboxref.current,
        {
          display: "flex",
          y: -200,


        },
        {
          display: "flex",
          duration: 0.5,
          y: 0,
          x: 0,
          z: 0,
          ease: "power3.inOut",
         

        }
      )

    }
    if (!loginhover) {
      const t2 = gsap.timeline()
      t2.to(
        loginboxref.current,
        {
          display: "flex",
          y: -200,
          ease: "power3.inOut",
          
          duration: 0.5
        }

      )
      t2.to(loginboxref.current, {
        display: "none"
      })

    }
    if (signuphover) {
      const t2 = gsap.timeline()
      t2.fromTo(
        signupboxref.current,
        {
          display: "flex",
          y: -200,


        },
        {
          display: "flex",
          duration: 0.5,
          y: 0,
          x: 0,
          z: 0,
          ease: "power3.inOut"

        }
      )




    }
    if (!signuphover) {
      const t2 = gsap.timeline()
      t2.to(
        signupboxref.current,
        {
          display: "flex",
          y: -200,
          ease: "power3.inOut",
         
          duration: 0.5
        }

      )
      t2.to(signupboxref.current, {
        display: "none"
      })

    }



  }, [loginhover, signuphover]

  )








  const textref = useRef<HTMLHeadingElement>(null);
  const lowerref = useRef<HTMLDivElement>(null);


  const navref = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    let tl = gsap.timeline();
    if (textref.current) {
      const split = new SplitType(textref.current, {
        types: "chars",
      },);

      if (lowerref.current) {
        const split2 = new SplitType(lowerref.current, {
          types: "chars",
        },);
        // gsap.killTweensOf(split.chars);

        tl.fromTo(
          split.chars,
          {
            // rotationY: 0,
            //   rotationX:0,
            //   rotationZ: 0,
            x: -400,
            y: -400,
            z: 400,
            opacity: 0,

          },
          {
            x: 0,
            y: 0,
            z: 0,
            opacity: 1,
            // rotationX: 180,
            // rotationZ: 180,
            // rotationY: 180,
            duration: 2.2,
            stagger: 0.3,
            ease: "back.out",
            transformOrigin: "center",
            color: 'white',
            delay: 0.5,
          }
        )
        tl.to(split.chars, {
          textShadow: ' 4px 4px 4px #00786f,5px 5px 5px #00786f,6px 6px 6px #00786f',
          stagger: { each: 0.2, from: "edges" },
          duration: 0.5,
          ease: "power1.inOut",
        }

        )
        tl.fromTo(
          split2.chars,
          {
            // rotationY: 0,
            //   rotationX:0,
            //   rotationZ: 0,
            x: -400,

            z: 400,
            opacity: 0,


          }, {
          x: 0,
          y: 0,
          z: 0,
          opacity: 1,
          // rotationX: 180,
          // rotationZ: 180,
          // rotationY: 180,
          duration: 2.2,
          stagger: 0.3,
          ease: "back.out",
          transformOrigin: "center",
          color: 'white'
        }
        )
        tl.to(split2.chars, {
          opacity: 0,
          ease: "power1.inOut",
          duration: 1,
          stagger: {
            each: 0.1, from: "end"


          },

        })
        tl.to(split2.chars, {
          display: "none"
        })
        tl.fromTo(navref.current, {
          display: "none",
          opacity: 0
        }, {
          opacity: 1,
          display: "flex", duration: 0.3, ease: "power1.inOut"
        })
        tl.to(split.chars, {
          y: -311,
          x: -430,
          z: 200,
          textShadow: ' 2px 2px 2px #919191,2px 2px 2px #919191,2px 2px 2px #919191',

          fontSize: '2rem',
          ease: "power1.inOut",
          duration: 1,
          stagger: { each: 0.05, from: "random" },


        })
        tl.to(split.chars, {
          textShadow: ' 2px 2px 2px #00786f,2px 2px 2px #00786f,2px 2px 2px #00786f',
          stagger: { each: 0.2, from: "start" },
          duration: 0.5,
          ease: "power1.inOut",
        }

        )


      }
    }
  })




  return (
    <div className=' bg-black h-full w-full overflow-auto min-w-screen min-h-screen m-0  relative overflow-y-hidden overflow-x-hidden'>
      <div ref={navref} className=' bg-black/60 absolute top-2 left-0 h-10 z-0 w-screen flex justify-center items-center rounded-2xl shadow-teal-700 shadow-md '>
        <ul className='text-white font-orbitron flex gap-10 text-lg blur-none'>
          <Link href="/" className=' blur-none hover:cursor-pointer hover:scale-125 hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200 '>
            Home
          </Link>
          <Link  href="/Services"className='blur-none hover:cursor-pointer hover:scale-125 hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200 ' >Services</Link>
          <Link href={"/Policies"} className='blur-none hover:cursor-pointer hover:scale-125 hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200 '>Policies</Link>
          <div onMouseOver={loginh} className='blur-none hover:cursor-pointer hover:scale-125 hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200 '>Login</div>
          <div onMouseOver={signuph} className='blur-none hover:cursor-pointer hover:scale-125 hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200 '>Signup </div>
        </ul>

      </div>

      <h1 style={{ textShadow: ' 4px 4px 4px #919191,5px 5px 5px #919191,6px 6px 6px #919191', }} className='absolute top-60 left-110 text-9xl text-center font-orbitron text-white' ref={textref}>Werkwise</h1>


      <div ref={lowerref} className='absolute top-92 right-92 text-white font-orbitron'>
        Now And Forever

      </div>
      <div onMouseLeave={loginnoh} ref={loginboxref} className='  flex flex-col absolute gap-2 top-12  z-50 bg-black/30 rounded-md overflow-y-hidden overflow-x-hidden font-orbitron text-white' style={{ width: '6% ', height: '9%', display: 'none',left:'55%' }}>
        <Link href="/EmployerLogin" onMouseOver={texth} onMouseOut={textnoh} className=' hover:cursor-pointer  hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200' >Employer</Link>
        <Link href="/EmployeeLogin" onMouseOver={texth} onMouseOut={textnoh} className=' hover:cursor-pointer  hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200'>Employee </Link>
  
        

      </div>
      <div onMouseLeave={signupnoh} ref={signupboxref} className='  flex flex-col absolute gap-2 top-12 left-2 z-50 bg-black/30 rounded-md overflow-y-hidden overflow-x-hidden text-white font-orbitron ' style={{ width: '6% ', height: '9%', display: 'none',left:'62%' }}>
        <Link href="/EmployerSignup" onMouseOver={texth} onMouseOut={textnoh} className='hover:cursor-pointer  hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200' >Employer</Link>
        <Link href="/EmployeeSignup" onMouseOver={texth} onMouseOut={textnoh} className=' hover:cursor-pointer  hover:text-shadow-md hover:text-shadow-teal-700 ease-in-out duration-200'>Employee </Link>

        

      </div>

    </div>




  );
}
