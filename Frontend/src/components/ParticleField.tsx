import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      
      // Gentle floating motion
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d9ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -state.clock.elapsedTime * 0.08;
      wireframeRef.current.rotation.y = -state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group position={[2, 0, -2]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#00d9ff" opacity={0.1} transparent />
      </mesh>
      <lineSegments ref={wireframeRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <lineBasicMaterial color="#9333ea" opacity={0.3} transparent />
      </lineSegments>
    </group>
  );
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem />
        <FloatingGeometry />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
};

export default ParticleField;
