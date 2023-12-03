// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import React, { useState, useRef, useMemo, Suspense }  from 'react';

function Fish() {
  const fish = useLoader(OBJLoader, require('../../public/Pompano.obj'))

  return <mesh>
    <primitive object={fish} scale={10}/>
  </mesh>  
}

export default function show_fish_3d() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10,10,10]} intensity={1000} />
      <Suspense fallback={null}>
        <Fish />
      </Suspense> 
    </Canvas>
  );
}

