import React, { useEffect, useRef, useState } from "react";

/**
 * Pure CSS + Canvas animated Earth — no WebGL dependency, renders instantly.
 * Shows a rotating globe with atmosphere glow, grid lines, and orbiting satellites.
 */
const Earth = () => {
    const canvasRef = useRef(null);
    const animRef   = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const SIZE = canvas.width; // square canvas
        const cx = SIZE / 2;
        const cy = SIZE / 2;
        const R  = SIZE * 0.36;   // globe radius

        // Satellites: angle (rad), orbit radius multiplier, color, speed
        const sats = [
            { a: 0,    ar: 1.45, tilt: 0.3,  color: "#915eff", size: 3.5, speed: 0.008 },
            { a: 2.1,  ar: 1.6,  tilt: -0.5, color: "#00cea8", size: 2.5, speed: 0.005 },
            { a: 4.3,  ar: 1.35, tilt: 0.7,  color: "#ff3366", size: 3,   speed: 0.011 },
            { a: 1.0,  ar: 1.7,  tilt: -0.2, color: "#ffffff", size: 2,   speed: 0.007 },
        ];

        let rot = 0;

        const draw = () => {
            ctx.clearRect(0, 0, SIZE, SIZE);

            // ── Atmosphere outer glow ──────────────────────────────────────────────
            const atmo = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.28);
            atmo.addColorStop(0,   "rgba(145,94,255,0.18)");
            atmo.addColorStop(0.5, "rgba(77,155,255,0.08)");
            atmo.addColorStop(1,   "rgba(0,0,0,0)");
            ctx.beginPath();
            ctx.arc(cx, cy, R * 1.28, 0, Math.PI * 2);
            ctx.fillStyle = atmo;
            ctx.fill();

            // ── Clip everything to globe circle ────────────────────────────────────
            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.clip();

            // Ocean base gradient (dark side → light side)
            const ocean = ctx.createLinearGradient(cx - R, cy, cx + R, cy);
            ocean.addColorStop(0,    "#050a1f");
            ocean.addColorStop(0.38, "#0d1f4a");
            ocean.addColorStop(0.65, "#0f2d5a");
            ocean.addColorStop(1,    "#071530");
            ctx.fillStyle = ocean;
            ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

            // ── Longitude grid lines (rotate with rot) ─────────────────────────────
            ctx.strokeStyle = "rgba(100,160,255,0.12)";
            ctx.lineWidth   = 0.8;
            const MERIDIANS = 12;
            for (let i = 0; i < MERIDIANS; i++) {
                const angle = (i / MERIDIANS) * Math.PI + rot;
                // project onto sphere surface (perspective ellipse)
                const cosA = Math.cos(angle);
                ctx.beginPath();
                ctx.ellipse(cx, cy, Math.abs(cosA) * R, R, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            // ── Latitude grid lines ────────────────────────────────────────────────
            ctx.strokeStyle = "rgba(100,160,255,0.10)";
            const PARALLELS = 6;
            for (let i = 1; i < PARALLELS; i++) {
                const lat = (i / PARALLELS) * Math.PI - Math.PI / 2;
                const y   = cy + Math.sin(lat) * R;
                const rr  = Math.cos(lat) * R;
                ctx.beginPath();
                ctx.ellipse(cx, y, rr, rr * 0.28, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            // ── Land masses (simplified continents, rotate with rot) ───────────────
            ctx.fillStyle = "rgba(34,197,100,0.55)";
            const continents = [
                // [centerLon, centerLat, wScale, hScale]
                [0.3,  0.1,  0.22, 0.30],  // Europe/Africa
                [1.0,  0.05, 0.28, 0.25],  // Asia
                [-0.8, 0.05, 0.18, 0.28],  // Americas
                [1.6,  -0.3, 0.14, 0.16],  // Australia
            ];
            continents.forEach(([lon, lat, ws, hs]) => {
                const a   = lon + rot;
                const cosA = Math.cos(a);
                const x  = cx + cosA * R * 0.8;
                const y  = cy - Math.sin(lat) * R;
                if (cosA < -0.1) return; // hidden side
                const fade = Math.max(0, cosA);
                ctx.globalAlpha = fade * 0.65;
                ctx.beginPath();
                ctx.ellipse(x, y, R * ws * fade, R * hs, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // ── City-light speckling (night side) ──────────────────────────────────
            const nightLights = [
                [0.05, 0.25], [0.12, 0.18], [-0.06, 0.2], [0.20, 0.22],
                [0.08, 0.30], [-0.12, 0.28], [0.30, 0.15],
            ];
            nightLights.forEach(([ox, oy]) => {
                const a    = rot + ox * 6;
                const cosA = Math.cos(a);
                if (cosA > 0.1) return; // only night side
                const x  = cx + Math.sin(a) * R * 0.6;
                const y  = cy + oy * R;
                ctx.beginPath();
                ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,220,120,${0.6 * Math.abs(cosA)})`;
                ctx.fill();
            });

            ctx.restore();

            // ── Specular highlight ─────────────────────────────────────────────────
            const spec = ctx.createRadialGradient(
                cx - R * 0.35, cy - R * 0.35, 0,
                cx - R * 0.1,  cy - R * 0.1,  R * 0.7
            );
            spec.addColorStop(0,   "rgba(255,255,255,0.08)");
            spec.addColorStop(0.4, "rgba(255,255,255,0.03)");
            spec.addColorStop(1,   "rgba(0,0,0,0)");
            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.clip();
            ctx.fillStyle = spec;
            ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
            ctx.restore();

            // ── Globe border glow ──────────────────────────────────────────────────
            const border = ctx.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.02);
            border.addColorStop(0,   "rgba(145,94,255,0)");
            border.addColorStop(0.7, "rgba(145,94,255,0.25)");
            border.addColorStop(1,   "rgba(145,94,255,0)");
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.strokeStyle = border;
            ctx.lineWidth   = 2.5;
            ctx.stroke();

            // ── Orbiting satellites ────────────────────────────────────────────────
            sats.forEach(sat => {
                sat.a += sat.speed;
                const orbitR = R * sat.ar;
                const sx = cx + Math.cos(sat.a) * orbitR;
                const sy = cy + Math.sin(sat.a) * orbitR * 0.38 + Math.sin(sat.tilt) * R * 0.15;

                // Orbit ellipse (dotted)
                ctx.save();
                ctx.setLineDash([3, 6]);
                ctx.strokeStyle = `${sat.color}33`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.ellipse(cx, cy + Math.sin(sat.tilt) * R * 0.15, orbitR, orbitR * 0.38, 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.restore();

                // Satellite dot + glow
                const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, sat.size * 3);
                glow.addColorStop(0, sat.color + "99");
                glow.addColorStop(1, sat.color + "00");
                ctx.beginPath();
                ctx.arc(sx, sy, sat.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(sx, sy, sat.size, 0, Math.PI * 2);
                ctx.fillStyle = sat.color;
                ctx.fill();
            });

            rot += 0.004;
            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center min-h-[350px]">
            {/* Ambient deep-space glow behind the globe */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(30,10,60,0.6) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />

            {!mounted && (
                // Skeleton shown for the brief moment before canvas mounts
                <div className="w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full bg-[#12103a] border border-[#915eff]/20 animate-pulse flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#915eff]/40 border-t-[#915eff] animate-spin" />
                </div>
            )}

            <canvas
                ref={canvasRef}
                width={440}
                height={440}
                className="relative z-10 cursor-grab"
                style={{
                    display: mounted ? "block" : "none",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    willChange: "transform",
                    transform: "translateZ(0)",
                }}
            />
        </div>
    );
};

export default Earth;
