import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useState, useRef, useMemo, Suspense }  from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three'

function Fish() {
  
  // const materials = useLoader(MTLLoader, require('../../assets/kitang/Pompano.mtl/'));

  // const fish = useLoader(
  //   OBJLoader, 
  //   require('../../assets/kitang/Pompano.obj/'),
  //   (loader) => {
  //     materials.preload();
  //     loader.setMaterials(materials);
  //   })
  // const buffer = useLoader(THREE.FileLoader, require('../../assets/kitang/Pompano.obj'))s


  const fish = useLoader(OBJLoader, require('../../assets/parrotfish/parrotFish.obj'))

  return (

      <primitive object={fish} scale={10}/>
  )
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

