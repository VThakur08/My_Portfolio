import { Float, useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');
  const groupRef = useRef();

  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 4,
      repeat: -1,
      ease: 'none',
    });
  });

  return (
    <Float floatIntensity={1.5} speed={1.5}>
      <group position={[5, 5, 0]} scale={0.6} {...props} dispose={null} ref={groupRef}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;
