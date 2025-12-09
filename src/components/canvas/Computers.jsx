import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    // Since we don't have the GLTF model locally, using a cool abstract shape 
    // that looks like a futuristic core/orb for now.

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh position={[4.5, -2, -1.5]}> {/* Moved to bottom right */}
                {/* Abstract geometric shape replacing the desktop model for now 
             to avoid missing file errors. */}
                <icosahedronGeometry args={[isMobile ? 1.5 : 2.5, 0]} />
                <MeshDistortMaterial
                    color='#915eff'
                    attach='material'
                    distort={0.4}
                    speed={2}
                    roughness={0}
                />
            </mesh>
            {/* Restored secondary shapes, shifted relative to the main sphere */}
            <mesh position={[-2, -2.5, -6.5]} scale={0.5}>
                <sphereGeometry />
                <meshStandardMaterial color="#ff0000" wireframe />
            </mesh>
            <mesh position={[6, 1.5, -6.5]} scale={0.5}>
                <boxGeometry />
                <meshStandardMaterial color="#00ff00" wireframe />
            </mesh>
        </Float>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
