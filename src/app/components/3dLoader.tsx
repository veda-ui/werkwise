'use client';
import React, { use, useEffect } from 'react';
import { useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { div, rotate } from 'three/tsl';
import { AmbientLight, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
export default function Cubeloader() {
    var val = 1
   
    return(
   <div className='w-full m-0 h-screen flex justify-center items-center bg-black'>
    
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <OrbitControls enableZoom={false}  enablePan={false} />
      <ambientLight intensity={val} />
     < directionalLight position={[10, 10, 5]} intensity={val} />
      <Cube/>
    </Canvas>
   </div>
   
)
}

function Cube(){
      const meshref = useRef(null)
    useFrame((state, delta) => {
        meshref.current.rotation.x += delta *  0.5
        meshref.current.rotation.y +=delta *  0.5
        meshref.current.rotation.z += delta * 0.5
    }

    )

    const texture = useLoader(TextureLoader, "/logooo.png")
    const bg = useLoader(TextureLoader, "/bg.png")
    
    return(
        <mesh ref={meshref} position={[0,0,0]}  >
        <boxGeometry  args={[1.25, 1.25, 1.25]}  />
        <meshStandardMaterial map={texture} attach="material-0" />
        <meshStandardMaterial map={texture} attach="material-1" />
        <meshStandardMaterial map={texture} attach="material-2" />
        <meshStandardMaterial map={texture} attach="material-3" />
        <meshStandardMaterial map={texture} attach="material-4" />
        <meshStandardMaterial map={texture} attach="material-5" />
       
      </mesh>
    )
}





