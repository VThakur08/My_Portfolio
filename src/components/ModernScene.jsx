import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import gsap from 'gsap';

const ModernScene = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const floatingElements = useRef([]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z = Math.sin(Date.now() * 0.0003) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Central Floating Cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay for tech aesthetic */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 3.2, 3.2]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={0.3}
          metalness={0.95}
          roughness={0.05}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Rotating rings around the cube */}
      <group rotation={[Math.PI * 0.2, 0, 0]}>
        <mesh>
          <torusGeometry args={[5, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#a5b4fc"
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </group>

      <group rotation={[0, Math.PI * 0.3, 0]}>
        <mesh>
          <torusGeometry args={[6.5, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Floating tech spheres */}
      <Float floatIntensity={2} speed={1.5}>
        <mesh position={[5, 3, -2]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float floatIntensity={2} speed={1.8}>
        <mesh position={[-5, 2, -3]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#a5b4fc"
            emissiveIntensity={0.7}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1.5} speed={1.2}>
        <mesh position={[2, -4, 1]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.9}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Tech pyramids for visual interest */}
      <Float floatIntensity={1.8} speed={1.6}>
        <mesh position={[-3, 3, 2]}>
          <coneGeometry args={[0.7, 1.5, 8]} />
          <meshStandardMaterial
            color="#c7d2fe"
            emissive="#c7d2fe"
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Light sources */}
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#818cf8" />
      <ambientLight intensity={0.8} />
    </group>
  );
};

export default ModernScene;
