/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DoobiDooba (https://sketchfab.com/DoobiDooba)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rubiks-cube-155420e09a124ec3a3bcca0852280672
Title: rubik's cube
*/
import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';

const RubiksCube = (props) => {
  const cubeRef = useRef();
  const { nodes, materials } = useGLTF('models/rubiks_cube.glb');

  useGSAP(() => {
    gsap.to(cubeRef.current.position, {
      y: cubeRef.current.position.y + 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  });

    // GSAP animation for rotation (simple continuous rotation)
  useGSAP(() => {
    gsap.to(cubeRef.current.rotation, {
      x: "+=6.28", // 360 degrees in radians (2 * Math.PI)
      y: "+=6.28", // 360 degrees in radians (2 * Math.PI)
      z: "+=6.28", // 360 degrees in radians (2 * Math.PI)
      duration: 5, // Duration of one full rotation
      repeat: -1, // Repeat infinitely
      ease: "linear", // Smooth continuous rotation
      onUpdate: () => {
    // Keep the rotation values within a 0-2π range
        cubeRef.current.rotation.x %= (2 * Math.PI);
        cubeRef.current.rotation.y %= (2 * Math.PI);
        cubeRef.current.rotation.z %= (2 * Math.PI);
      },
    })
  });

  return (
    <mesh
      {...props}
      geometry={nodes.RubixCube_RubixCube_0.geometry}
      material={materials.RubixCube}
      ref={cubeRef}
    />
  )
}

useGLTF.preload('models/rubiks_cube.glb')

export default RubiksCube;
