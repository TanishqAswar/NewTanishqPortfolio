import React, { useEffect, useRef } from "react";

const SolarSystem = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animId;
        let w, h;

        const resize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Optimize performance by reducing dense star background count
        const stars = Array.from({ length: 60 }, () => ({
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
            r: Math.random() * 1.2 + 0.2,
            alpha: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
        }));

        // Planets config: { name, orbitR, size, color, speed, angle, moons? }
        const planets = [
            { name: "Mercury", orbitR: 80,  size: 4,  color: "#b5b5b5", speed: 0.15,  angle: Math.random() * Math.PI * 2 },
            { name: "Venus",   orbitR: 125, size: 7,  color: "#e8cda0", speed: 0.11,  angle: Math.random() * Math.PI * 2 },
            {
                name: "Earth", orbitR: 180, size: 8, color: "#4fa3e0", speed: 0.09, angle: Math.random() * Math.PI * 2,
                moons: [{ orbitR: 16, size: 2.5, color: "#d0d0d0", speed: 0.45, angle: 0 }]
            },
            { name: "Mars",    orbitR: 235, size: 6, color: "#c1440e", speed: 0.075, angle: Math.random() * Math.PI * 2 },
            { name: "Jupiter", orbitR: 310, size: 15, color: "#c88b3a", speed: 0.04, angle: Math.random() * Math.PI * 2 },
            { name: "Saturn",  orbitR: 390, size: 12, color: "#e8d191", speed: 0.028, angle: Math.random() * Math.PI * 2, hasRing: true },
            { name: "Uranus",  orbitR: 470, size: 10, color: "#4b70dd", speed: 0.019, angle: Math.random() * Math.PI * 2 },
            { name: "Neptune", orbitR: 540, size: 9.5, color: "#274687", speed: 0.015, angle: Math.random() * Math.PI * 2 },
        ];

        let t = 0;
        const TILT = 0.45; // 3D Perspective tilt factor

        const drawOrbit = (cx, cy, r) => {
            ctx.beginPath();
            ctx.ellipse(cx, cy, r, r * TILT, 0, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255,255,255,0.4)";
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Subtle glow around the orbit line
            ctx.beginPath();
            ctx.ellipse(cx, cy, r, r * TILT, 0, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255,255,255,0.15)";
            ctx.lineWidth = 3;
            ctx.stroke();
        };

        let cachedSunGrad = null;

        const drawSun = (cx, cy) => {
            // Cache the static base sun gradient to save CPU per frame
            if (!cachedSunGrad) {
                cachedSunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
                cachedSunGrad.addColorStop(0, "rgba(255,240,150,1)");
                cachedSunGrad.addColorStop(0.3, "rgba(255,180,40,0.9)");
                cachedSunGrad.addColorStop(0.8, "rgba(255,100,0,0.4)");
                cachedSunGrad.addColorStop(1, "rgba(255,80,0,0)");
            }
            
            ctx.beginPath();
            ctx.arc(cx, cy, 40, 0, Math.PI * 2);
            ctx.fillStyle = cachedSunGrad;
            ctx.fill();

            const pulse = Math.sin(t * 0.03) * 10 + 60;
            const halo = ctx.createRadialGradient(cx, cy, 25, cx, cy, pulse);
            halo.addColorStop(0, "rgba(255,210,60,0.2)");
            halo.addColorStop(1, "rgba(255,120,0,0)");
            ctx.beginPath();
            ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
            ctx.fillStyle = halo;
            ctx.fill();
        };

        const drawPlanet = (cx, cy, planet, angle) => {
            // Apply TILT to the y-coordinate for isometric 3D orbit
            const px = cx + Math.cos(angle) * planet.orbitR;
            const py = cy + Math.sin(angle) * planet.orbitR * TILT;

            // Saturn ring
            if (planet.hasRing) {
                ctx.save();
                ctx.translate(px, py);
                ctx.scale(1, TILT * 0.5); // Adjust ring perspective
                ctx.beginPath();
                ctx.arc(0, 0, planet.size * 2.5, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(232, 209, 145, 0.6)";
                ctx.lineWidth = 4;
                ctx.stroke();
                ctx.restore();
            }

            // Planet body glow
            ctx.beginPath();
            ctx.arc(px, py, planet.size + 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,0.1)`;
            ctx.fill();

            // Planet body (always spherical, unaffected by tilt)
            const grad = ctx.createRadialGradient(px - planet.size * 0.3, py - planet.size * 0.3, 0, px, py, planet.size);
            grad.addColorStop(0, lightenColor(planet.color, 50));
            grad.addColorStop(1, planet.color);
            ctx.beginPath();
            ctx.arc(px, py, planet.size, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            // Moons
            if (planet.moons) {
                planet.moons.forEach((moon) => {
                    moon.angle = (moon.angle || 0) + moon.speed * 0.016;
                    const mx = px + Math.cos(moon.angle) * moon.orbitR;
                    const my = py + Math.sin(moon.angle) * moon.orbitR * TILT; // Also tilt moon orbit

                    // Moon orbit trail
                    ctx.beginPath();
                    ctx.ellipse(px, py, moon.orbitR, moon.orbitR * TILT, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = "rgba(255,255,255,0.3)";
                    ctx.lineWidth = 0.8;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(mx, my, moon.size, 0, Math.PI * 2);
                    ctx.fillStyle = moon.color;
                    ctx.fill();
                });
            }

            return { px, py };
        };

        const lightenColor = (hex, amount) => {
            const num = parseInt(hex.slice(1), 16);
            const r = Math.min(255, (num >> 16) + amount);
            const g = Math.min(255, ((num >> 8) & 0xff) + amount);
            const b = Math.min(255, (num & 0xff) + amount);
            return `rgb(${r},${g},${b})`;
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = "#010103";
            ctx.fillRect(0, 0, w, h);

            const cx = w * 0.70; 
            const cy = h * 0.5;

            // Stars
            const now = t * 0.01;
            stars.forEach((s) => {
                const alpha = s.alpha * (0.6 + 0.4 * Math.sin(now * s.twinkleSpeed * 60 + s.twinkleOffset));
                ctx.beginPath();
                ctx.arc(cx + s.x, cy + s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha * 0.8})`;
                ctx.fill();
            });

            // Draw bright white tilted 3D orbits
            planets.forEach((p) => drawOrbit(cx, cy, p.orbitR));

            // Calculate current Y positions while keeping the original object reference
            const planetsWithPos = planets.map(p => {
                const py = cy + Math.sin(p.angle) * p.orbitR * TILT;
                return { ref: p, py };
            });

            // Sort so planets in back (lower Y or effectively negative Z) draw first
            planetsWithPos.sort((a, b) => a.py - b.py);

            // Separate into background and foreground relative to the Sun
            const backgroundPlanets = planetsWithPos.filter(p => p.py < cy);
            const foregroundPlanets = planetsWithPos.filter(p => p.py >= cy);

            backgroundPlanets.forEach((pObj) => {
                pObj.ref.angle += pObj.ref.speed * 0.016; 
                drawPlanet(cx, cy, pObj.ref, pObj.ref.angle);
            });

            drawSun(cx, cy);

            foregroundPlanets.forEach((pObj) => {
                pObj.ref.angle += pObj.ref.speed * 0.016;
                drawPlanet(cx, cy, pObj.ref, pObj.ref.angle);
            });

            t++;
            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ display: "block" }}
        />
    );
};

export default SolarSystem;
