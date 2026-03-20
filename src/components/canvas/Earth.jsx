import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

// Generate random satellite data. Reduced count to stop severe React state lag
const N_SATELLITES = 15;
const generatedSatellites = [...Array(N_SATELLITES).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    alt: Math.random() * 0.4 + 0.2, // Altitude above earth
    radius: Math.random() * 1.5 + 0.5, // Satellite size
    color: ['#ff3366', '#ffffff', '#00cea8', '#915eff'][Math.round(Math.random() * 3)]
}));

const Earth = () => {
    const globeRef = useRef();
    const [width, setWidth] = useState(350);
    const [satellites, setSatellites] = useState(generatedSatellites);

    // Initial sizing based on window width
    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth > 768 ? 550 : 350);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Configure auto-rotation and remove zoom on mount
    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.0; // Smooth rotation
            controls.enableZoom = false; // Disable zoom to prevent scrolling issues on page
        }
    }, [globeRef.current]);

    // Animate satellites
    useEffect(() => {
        let animationFrameId;
        (function moveSatellites() {
            // Mutate data for high-performance WebGL state updates
            generatedSatellites.forEach(d => {
                d.lng += 0.3; // Orbit sideways
                d.lat += 0.05; // Orbit diagonal slightly
            });
            setSatellites([...generatedSatellites]);
            animationFrameId = requestAnimationFrame(moveSatellites);
        })();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing">
            {/* Background glow to blend with deep space */}
            <div className="absolute inset-0 bg-[#030510] rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-center">
                <Globe
                    ref={globeRef}
                    width={width}
                    height={width}
                    backgroundColor="rgba(0,0,0,0)"
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    
                    /* Satellite Custom Layer */
                    customLayerData={satellites}
                    customThreeObject={d => new THREE.Mesh(
                        new THREE.SphereGeometry(d.radius),
                        new THREE.MeshBasicMaterial({ color: d.color }) // BasicMaterial glows brightly
                    )}
                    customThreeObjectUpdate={(obj, d) => {
                        // Translate lat/lng into 3D position
                        if (globeRef.current) {
                            Object.assign(obj.position, globeRef.current.getCoords(d.lat, d.lng, d.alt));
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Earth;
