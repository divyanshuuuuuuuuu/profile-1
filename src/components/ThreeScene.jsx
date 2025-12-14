import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Stars, Environment } from '@react-three/drei';

// Enhanced Floating Project Card
const FloatingProjectCard = ({ position, color, index }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Unique rotation for each card
        meshRef.current.rotation.x = Math.sin(t * 0.3 + index) * 0.2;
        meshRef.current.rotation.y = t * 0.2 + index;

        // Pulsing glow effect
        const intensity = 0.3 + Math.sin(t * 2 + index) * 0.2;
        meshRef.current.material.emissiveIntensity = intensity;
    });

    return (
        <Float speed={1.5 + index * 0.2} rotationIntensity={0.5} floatIntensity={0.8}>
            <mesh ref={meshRef} position={position}>
                <boxGeometry args={[0.8, 1, 0.05]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.9}
                />
                {/* Glow outline */}
                <mesh scale={1.05}>
                    <boxGeometry args={[0.8, 1, 0.05]} />
                    <meshBasicMaterial color={color} transparent opacity={0.1} />
                </mesh>
            </mesh>
        </Float>
    );
};

// Enhanced Room with better materials and lighting
const Room3D = () => {
    const laptopScreenRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Animated screen glow
        if (laptopScreenRef.current) {
            laptopScreenRef.current.material.emissiveIntensity = 0.5 + Math.sin(t) * 0.2;
        }
    });

    return (
        <group position={[0, -1, 0]}>
            {/* Floor with grid pattern */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[12, 12]} />
                <meshStandardMaterial
                    color="#0a0a0f"
                    roughness={0.7}
                    metalness={0.3}
                />
            </mesh>

            {/* Grid lines on floor */}
            <gridHelper args={[12, 20, '#00f5ff', '#1a1a24']} position={[0, 0.01, 0]} />

            {/* Back Wall */}
            <mesh position={[0, 3, -6]} receiveShadow>
                <planeGeometry args={[12, 6]} />
                <meshStandardMaterial color="#111118" roughness={0.8} />
            </mesh>

            {/* Desk */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <boxGeometry args={[3.5, 0.1, 1.8]} />
                <meshStandardMaterial color="#1a1a24" roughness={0.4} metalness={0.6} />
            </mesh>

            {/* Laptop Base */}
            <mesh position={[0, 0.6, 0]} castShadow>
                <boxGeometry args={[1, 0.05, 0.6]} />
                <meshStandardMaterial color="#2a2a3a" roughness={0.3} metalness={0.7} />
            </mesh>

            {/* Laptop Screen */}
            <mesh position={[0, 1, -0.3]} rotation={[-0.3, 0, 0]} castShadow>
                <boxGeometry args={[1, 0.65, 0.05]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Screen Display - Animated Glow */}
            <mesh ref={laptopScreenRef} position={[0, 1, -0.27]} rotation={[-0.3, 0, 0]}>
                <planeGeometry args={[0.95, 0.6]} />
                <meshStandardMaterial
                    color="#00f5ff"
                    emissive="#00f5ff"
                    emissiveIntensity={0.5}
                    toneMapped={false}
                />
            </mesh>

            {/* Accent Lights on Desk */}
            <pointLight position={[-1.5, 0.7, 0]} intensity={2} color="#00f5ff" distance={2} />
            <pointLight position={[1.5, 0.7, 0]} intensity={2} color="#a855f7" distance={2} />
        </group>
    );
};

// Main 3D Scene Component
export default function ThreeScene() {
    return (
        <div className="h-full w-full absolute top-0 left-0 -z-10">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 2, 7]} fov={60} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                    maxPolarAngle={Math.PI / 2.2}
                    minPolarAngle={Math.PI / 3.5}
                    enablePan={false}
                />

                {/* Lighting Setup */}
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
                <pointLight position={[-10, 10, -10]} intensity={1.5} color="#a855f7" />
                <pointLight position={[0, 15, 0]} intensity={1} color="#ffffff" />
                <spotLight
                    position={[0, 10, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    color="#00f5ff"
                />

                {/* Environment for reflections */}
                <Environment preset="night" />

                {/* Starfield Background */}
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                {/* 3D Room */}
                <Room3D />

                {/* Floating Project Cards - 4 cards representing projects */}
                <FloatingProjectCard position={[-2.5, 2.5, 0]} color="#00f5ff" index={0} />
                <FloatingProjectCard position={[2.5, 2, 1]} color="#a855f7" index={1} />
                <FloatingProjectCard position={[-2, 1.5, 2]} color="#ec4899" index={2} />
                <FloatingProjectCard position={[2, 3, -1]} color="#3b82f6" index={3} />

                {/* Fog for depth */}
                <fog attach="fog" args={['#0a0a0f', 5, 20]} />
            </Canvas>
        </div>
    );
}
