import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=Math.PI' : `+=${Math.PI * 2}`,
        x: hovered ? '+=Math.PI' : `-=${Math.PI * 2}`,
        z: `+=${Math.PI * 0.5}`,
        duration: hovered ? 1 : 3,
        ease: 'sine.inOut',
      });
  });

  // Modern gradient colors for cube faces
  const faceColors = [
    '#6366f1', // indigo
    '#818cf8', // light indigo
    '#a5b4fc', // lighter indigo
    '#c7d2fe', // very light indigo
    '#4f46e5', // darker indigo
    '#4c1d95', // deep indigo
  ];

  return (
    <Float floatIntensity={1.5} speed={1.5}>
      <group position={[0, -2, 0]} scale={0.8} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors[0]}
            emissive={faceColors[0]}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.7}
            roughness={0.3}
            wireframe={false}
          />
        </mesh>

        {/* Add glowing edges */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.55, 1.55, 1.55]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            wireframe={true}
            transparent={true}
            opacity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};

export default Cube;
