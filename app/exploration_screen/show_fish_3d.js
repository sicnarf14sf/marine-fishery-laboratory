import { Canvas, useFrame } from '@react-three/fiber';
import React, { useState, useRef, useMemo, Suspense, useLayoutEffect }  from 'react';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { TextureLoader } from 'expo-three';

function Fish() {
  const [base] = useLoader(TextureLoader, [
    require('../../assets/parrotFish/parrotFish.png'),
  ]);

  const material = useLoader(MTLLoader, require('../../assets/parrotFish/parrotFish.mtl'));

  const obj = useLoader(
    OBJLoader,
    require('../../assets/parrotFish/parrotFish.obj'),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
      }
    });
  }, [obj]);


  return <primitive object={obj} scale={0.015} />
}

export default function show_fish_3d() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <Suspense fallback={null}>
        <Fish />
      </Suspense> 
    </Canvas>
  );
}