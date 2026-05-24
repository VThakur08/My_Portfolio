import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Float } from '@react-three/drei';
import gsap from 'gsap';

const Target = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        gsap.to(targetRef.current.rotation, {
            z: Math.PI * 2,
            duration: 3,
            repeat: -1,
            ease: 'none',
        });
    });

    return (
        <Float floatIntensity={1.5} speed={2}>
            <group {...props} ref={targetRef}>
                {/* Outer ring */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 1, 0.05, 64]} />
                    <meshStandardMaterial 
                        color="#6366f1" 
                        emissive="#6366f1"
                        emissiveIntensity={0.6}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Middle ring */}
                <mesh position={[0, 0.01, 0]}>
                    <cylinderGeometry args={[0.65, 0.65, 0.06, 64]} />
                    <meshStandardMaterial 
                        color="#818cf8" 
                        emissive="#818cf8"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {/* Inner circle */}
                <mesh position={[0, 0.02, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.07, 64]} />
                    <meshStandardMaterial 
                        color="#a5b4fc" 
                        emissive="#a5b4fc"
                        emissiveIntensity={0.5}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                {/* Center dot */}
                <mesh position={[0, 0.03, 0]}>
                    <sphereGeometry args={[0.1, 32, 32]} />
                    <meshStandardMaterial 
                        color="#818cf8"
                        emissive="#818cf8"
                        emissiveIntensity={0.8}
                    />
                </mesh>
            </group>
        </Float>
    );
};

export default Target;
