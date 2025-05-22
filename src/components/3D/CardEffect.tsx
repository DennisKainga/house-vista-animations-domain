
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import * as THREE from 'three';

interface CardEffectProps {
  image: string;
  hovered: boolean;
}

const CardEffect = ({ image, hovered }: CardEffectProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const [spring] = useState(() => ({ pos: 0, vel: 0.1, target: 0 }));

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    // Add gentle floating animation
    const t = clock.getElapsedTime();
    
    // Apply hover effect
    spring.target = hovered ? 1 : 0;
    spring.pos += (spring.target - spring.pos) * 0.1;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.2, spring.pos);
    meshRef.current.position.z = THREE.MathUtils.lerp(0, 0.5, spring.pos);
    
    // Add subtle movement
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.03;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <planeGeometry args={[2.5, 1.6]} />
        <meshStandardMaterial color="#ffffff" />
        <Image url={image} position={[0, 0, 0.01]} scale={[2.4, 1.5, 1]} />
      </mesh>
    </group>
  );
};

export default CardEffect;
