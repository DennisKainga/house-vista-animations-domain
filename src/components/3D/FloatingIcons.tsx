
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Simple floating icon component
interface FloatingIconProps {
  position: [number, number, number];
  delay: number;
  text: string;
}

const FloatingIcon = ({ position, delay, text }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animation for floating effect with delays
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() + delay;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.2;
      meshRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group position={position}>
      <Box 
        ref={meshRef} 
        args={[0.8, 0.8, 0.8]} 
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Text
        position={[0, 0, 0.45]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

// 3D Background for stats
const FloatingIcons = () => {
  return (
    <div className="w-full h-[200px]">
      <Canvas dpr={[1, 2]} className="bg-transparent">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Environment preset="sunset" />
        
        <FloatingIcon position={[-2, 0, 0]} delay={0} text="🏠" />
        <FloatingIcon position={[-0.5, 0, 0]} delay={1} text="📈" />
        <FloatingIcon position={[1, 0, 0]} delay={2} text="🔑" />
        <FloatingIcon position={[2.5, 0, 0]} delay={3} text="📍" />
      </Canvas>
    </div>
  );
};

export default FloatingIcons;
