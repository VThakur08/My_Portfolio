import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
    const targetRef = useRef();
    // const { scene } = useGLTF(
    //     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
    // );

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.6}>
            <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
            <meshStandardMaterial color="#C1C1C1" />
            
            {/* Inner rings to look like a target */}
            <mesh position={[0, 0.06, 0]}>
                 <cylinderGeometry args={[0.3, 0.3, 0.11, 32]} />
                 <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[0, 0.07, 0]}>
                 <cylinderGeometry args={[0.15, 0.15, 0.12, 32]} />
                 <meshStandardMaterial color="white" />
            </mesh>
             <mesh position={[0, 0.08, 0]}>
                 <cylinderGeometry args={[0.05, 0.05, 0.13, 32]} />
                 <meshStandardMaterial color="red" />
            </mesh>
        </mesh>
    );
};

export default Target;
