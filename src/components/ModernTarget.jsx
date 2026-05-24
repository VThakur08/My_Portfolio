import { useRef } from 'react';
import { Float } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ModernTarget = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      z: Math.PI * 2,
      duration: 3,
      repeat: -1,
      ease: 'none',
    });
  });

  return (
    <Float floatIntensity={1.8} speed={1.5}>
      <group position={position} ref={groupRef}>
        {/* Outer ring - large */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2, 0.15, 32, 128]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Middle ring */}
        <mesh position={[0, 0, 0.1]}>
          <torusGeometry args={[1.4, 0.12, 32, 128]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.7}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Inner ring */}
        <mesh position={[0, 0, 0.2]}>
          <torusGeometry args={[0.8, 0.1, 32, 128]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#a5b4fc"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Center glowing sphere */}
        <mesh position={[0, 0, 0.3]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color="#c7d2fe"
            emissive="#c7d2fe"
            emissiveIntensity={0.9}
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>

        {/* Pulsing core */}
        <mesh position={[0, 0, 0.4]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={1.2}
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Light rays */}
        <pointLight position={[0, 0, 1]} intensity={1.5} color="#6366f1" />
      </group>
    </Float>
  );
};

export default ModernTarget;
