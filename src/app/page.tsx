'use client';
import React, { use, useEffect } from 'react';
import Loader from './components/Loader';
import Cubeloader from './components/3dLoader';
import { div } from 'three/tsl';


export default function Home() {
  return(
    <div  

        
    className=' bg-black h-full w-full overflow-auto min-w-screen min-h-screen m-0  relative overflow-y-hidden'>
   <Loader/>

   </div>
  )

}