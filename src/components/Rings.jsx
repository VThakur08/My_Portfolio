import { useGSAP } from '@gsap/react';
import { Center } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            duration: 3,
            stagger: {
              each: 0.2,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  // Modern ring colors with gradient effect
  const ringColors = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'];

  return (
    <Center>
      <group scale={0.8} position={[0, 0, 0]}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.6, 0.08, 16, 100]}></torusGeometry>
            <meshStandardMaterial 
              color={ringColors[index]} 
              emissive={ringColors[index]}
              emissiveIntensity={0.8}
              toneMapped={false}
              wireframe={false}
            />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
