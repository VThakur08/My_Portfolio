import { useRef, useState } from 'react';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ModernCube = ({ position = [0, 0, 0] }) => {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap.to(cubeRef.current.rotation, {
      x: hovered ? Math.PI * 2 : `+=${Math.PI * 2}`,
      y: hovered ? Math.PI * 2 : `+=${Math.PI * 2}`,
      z: `+=${Math.PI * 0.5}`,
      duration: hovered ? 1 : 3,
      ease: 'sine.inOut',
    });
  });

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.scale.set(
        hovered ? 1.1 : 1,
        hovered ? 1.1 : 1,
        hovered ? 1.1 : 1
      );
    }
  });

  return (
    <Float floatIntensity={1.5} speed={1.5}>
      <group position={position} ref={cubeRef}>
        {/* Main cube */}
        <mesh
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          castShadow
          receiveShadow>
          <boxGeometry args={[1.8, 1.8, 1.8]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={hovered ? 1 : 0.5}
            metalness={0.8}
            roughness={0.2}
            wireframe={false}
          />
        </mesh>

        {/* Wireframe outer cube */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.95, 1.95, 1.95]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.4}
            metalness={0.95}
            roughness={0.05}
            wireframe={true}
            transparent={true}
            opacity={0.4}
          />
        </mesh>

        {/* Glowing edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.8, 1.8, 1.8)]} />
          <lineBasicMaterial color="#a5b4fc" linewidth={2} transparent opacity={0.6} />
        </lineSegments>

        {/* Corner highlights */}
        {[
          [-0.9, -0.9, -0.9],
          [0.9, 0.9, 0.9],
          [-0.9, 0.9, -0.9],
          [0.9, -0.9, 0.9],
        ].map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color="#c7d2fe"
              emissive="#c7d2fe"
              emissiveIntensity={hovered ? 1 : 0.6}
              metalness={1}
              roughness={0}
            />
          </mesh>
        ))}

        {/* Light source */}
        <pointLight position={[1, 1, 1]} intensity={0.8} color="#818cf8" />
      </group>
    </Float>
  );
};

export default ModernCube;
