'use client';
import React, { use, useEffect } from 'react';
import { useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useControls } from 'leva';


export default function Loader() {
    const textref = useRef<HTMLHeadingElement>(null);
    const lowerref = useRef<HTMLDivElement>(null);
    // const { rotationx,rotationy,rotationz, duration, stagger, ease } = useControls("Text Animation", {
    //   rotationx: { value: 360, min: 0, max: 1080, step: 30 },
    //   rotationy: { value: 360, min: 0, max: 1080, step: 30 },
    //   rotationz: { value: 360, min: 0, max: 1080, step: 30 },
      
    //   duration: { value: 1, min: 0.1, max: 5, step: 0.1 },
    //   stagger: { value: 0.05, min: 0, max: 1, step: 0.01 },
    //   ease: {
    //     options: [
    //       "power1.inOut",
    //       "back.out",
    //       "elastic.out(1, 0.3)",
    //       "bounce.out",
    //       "expo.out",
    //       "ease.inOut",
    //       "sine.inOut",
    //     ],
    //     value: "back.out",
    //   },
    // });
    const colors = [""]
    let tl = gsap.timeline();
    const navref = useRef<HTMLDivElement>(null);
  
  
    useEffect(() => {
      if (textref.current) {
        const split = new SplitType(textref.current, {
          types: "chars",
        },);

        if(lowerref.current){
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
        );
       tl.fromTo(
    split2.chars,
     { 
      // rotationY: 0,
    //   rotationX:0,
    //   rotationZ: 0,
    x: -400,
      
      z: 400,
      opacity: 0,


      },{
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
        opacity:0,
        ease:"power1.inOut",
        duration:1,
        stagger:{each:0.1, from:"end"


     }
        })
        tl.fromTo(navref.current,{
          opacity:0,
        },{opacity:1, duration:0.3, ease:"power1.inOut"})
      tl.to(split.chars, {
        y: -311,
        x: -430,
        z: 200,
       textShadow: ' 2px 2px 2px #919191,2px 2px 2px #919191,2px 2px 2px #919191',

        fontSize: '2rem',
        ease:"power1.inOut",
        duration:1,
        stagger:{each:0.05, from:"random"},
        

      })
      
        
}}})
    
        
      //   return () => {
      //     split.revert();
      //   };
      // }}, [rotationx,rotationy,rotationz, duration, stagger, ease]);
  
    return (
     <>
     <div ref={navref} className='absolute top-2 left-0 h-10 z-0 w-screen flex justify-center items-center rounded-2xl shadow-teal-700 shadow-md'>

</div>
        
      <h1 style={{textShadow:' 4px 4px 4px #919191,5px 5px 5px #919191,6px 6px 6px #919191', }}className='absolute top-60 left-110 text-9xl text-center font-orbitron text-white' ref={textref}>Werkwise</h1>

      
         <div ref={lowerref} className='absolute top-92 right-92 text-white font-orbitron'>
          Now And Forever
      
         </div>

     
         </>
   
   
  
      
    );
  }
  