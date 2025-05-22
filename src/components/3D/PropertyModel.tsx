
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

// Rotating house component
const House = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animation rotation logic
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main structure */}
      <Box ref={meshRef} args={[2, 1.2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      
      {/* Roof */}
      <mesh position={[0, 1.1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.8, 1.2, 4]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Door */}
      <Box args={[0.4, 0.8, 0.1]} position={[0, -0.2, 1.05]}>
        <meshStandardMaterial color="#713f12" />
      </Box>
      
      {/* Windows */}
      <Box args={[0.4, 0.4, 0.1]} position={[-0.6, 0.1, 1.05]}>
        <meshStandardMaterial color="#e5e7eb" />
      </Box>
      <Box args={[0.4, 0.4, 0.1]} position={[0.6, 0.1, 1.05]}>
        <meshStandardMaterial color="#e5e7eb" />
      </Box>
    </group>
  );
};

// Main component
const PropertyModel = () => {
  // We'll use this to match the theme
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="w-full h-[400px] relative">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={isDarkMode ? 0.2 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.5 : 1} />
        <House />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default PropertyModel;
