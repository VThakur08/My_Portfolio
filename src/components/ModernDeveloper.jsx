import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const ModernDeveloper = ({ position = [0, -3, 0], scale = 1, animationName = 'idle' }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <Float floatIntensity={0.5} speed={1}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Base platform */}
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Central pillar */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 4, 32]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.6}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Head - Sphere */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.7}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Body - Geometric shape */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1.2, 1.8, 0.8]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Arms - Rotating based on animation */}
        <group position={[0, 1, 0]}>
          {/* Left arm */}
          <mesh position={[-1, 0, 0]} rotation={[animationName === 'idle' ? 0 : Math.PI * 0.3, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.25, 1.5, 16]} />
            <meshStandardMaterial
              color="#a5b4fc"
              emissive="#a5b4fc"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Right arm */}
          <mesh position={[1, 0, 0]} rotation={[animationName === 'idle' ? 0 : -Math.PI * 0.3, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.25, 1.5, 16]} />
            <meshStandardMaterial
              color="#a5b4fc"
              emissive="#a5b4fc"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* Legs */}
        <group position={[0, -0.5, 0]}>
          {/* Left leg */}
          <mesh position={[-0.5, -1, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 1.2, 16]} />
            <meshStandardMaterial
              color="#c7d2fe"
              emissive="#c7d2fe"
              emissiveIntensity={0.4}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>

          {/* Right leg */}
          <mesh position={[0.5, -1, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 1.2, 16]} />
            <meshStandardMaterial
              color="#c7d2fe"
              emissive="#c7d2fe"
              emissiveIntensity={0.4}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
        </group>

        {/* Floating code symbols around the figure */}
        <mesh position={[1.5, 1, 0.5]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        <mesh position={[-1.5, 0.5, 0.5]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#a5b4fc"
            emissiveIntensity={0.5}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Lighting */}
        <pointLight position={[2, 2, 2]} intensity={1} color="#6366f1" />
        <ambientLight intensity={0.6} />
      </group>
    </Float>
  );
};

export default ModernDeveloper;
