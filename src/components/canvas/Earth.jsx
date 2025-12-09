import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
    // Stylized Earth using basic geometry
    return (
        <group>
            {/* Core */}
            <mesh>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial color="#050816" wireframe />
            </mesh>
            {/* Surface / Atmosphere */}
            <mesh scale={0.9}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial color="#915eff" opacity={0.4} transparent />
            </mesh>
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
