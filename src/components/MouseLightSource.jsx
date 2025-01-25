import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MouseLightSource = ({ lightIntensity }) => {
  const { camera, scene } = useThree();
  const lightRef = useRef();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));

  // Update mouse position on mousemove
  useEffect(() => {
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x to -1 to 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize y to -1 to 1
      setMousePosition(new THREE.Vector2(mouseX, mouseY));
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Convert screen coordinates to world coordinates and update light position
  useFrame(() => {
    const vector = new THREE.Vector3(mousePosition.x, mousePosition.y, 0.5); // Depth of 0.5
    vector.unproject(camera); // Convert to world space

    const dir = vector.sub(camera.position).normalize(); // Direction of the ray
    const distance = -camera.position.z / dir.z; // Calculate how far to move in that direction

    // Set the light's position to the mouse position
    lightRef.current.position.copy(camera.position.clone().add(dir.multiplyScalar(distance)));
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={lightIntensity}
      color="white"
      distance={10}
      decay={2}
    />
  );
};

export default MouseLightSource;
