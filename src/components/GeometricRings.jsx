import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GeometricRings = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
      })
      .to(ring1Ref.current.rotation, { z: Math.PI * 2, duration: 4, ease: 'none' }, 0)
      .to(ring2Ref.current.rotation, { y: Math.PI * 2, duration: 5, ease: 'none' }, 0)
      .to(ring3Ref.current.rotation, { x: Math.PI * 2, duration: 6, ease: 'none' }, 0);
  });

  return (
    <Float floatIntensity={1.2} speed={1}>
      <group position={position} ref={groupRef}>
        {/* Ring 1 - Blue */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.5, 0.12, 32, 128]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.7}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Ring 2 - Light Blue */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[3.2, 0.1, 32, 128]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Ring 3 - Lighter Blue */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[4, 0.08, 32, 128]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#a5b4fc"
            emissiveIntensity={0.5}
            metalness={0.75}
            roughness={0.25}
          />
        </mesh>

        {/* Connecting lines for tech aesthetic */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.8, 0.03, 16, 128]} />
          <meshStandardMaterial
            color="#c7d2fe"
            emissive="#c7d2fe"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

export default GeometricRings;
