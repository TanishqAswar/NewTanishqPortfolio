import React, { useEffect, useRef } from "react";

const StarsCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animId;
        let w, h;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            // Add extra height block for scrolling areas to not show empty space immediately
            // But since this is global background in App.jsx, window size is fine combined w/ fixed position or 100vh
        };
        resize();
        window.addEventListener("resize", resize);

        // Many small stars
        const stars = Array.from({ length: 400 }, () => ({
            x: Math.random() * 3000 - 1500,
            y: Math.random() * 3000 - 1500,
            z: Math.random() * 2000,
            r: Math.random() * 1.5 + 0.1,
            alpha: Math.random(),
            twinkleSpeed: Math.random() * 0.05 + 0.01,
            twinkleOffset: Math.random() * Math.PI * 2,
        }));

        let t = 0;

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            // Very dark subtle gradient for depth
            const grad = ctx.createLinearGradient(0, 0, 0, h);
            grad.addColorStop(0, "#010206");
            grad.addColorStop(1, "#050816"); // Theme color
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            const cx = w / 2;
            const cy = h / 2;

            const now = t * 0.01;

            stars.forEach((s) => {
                s.z -= 0.5; // Move towards camera
                if (s.z <= 0) {
                    s.z = 2000;
                    s.x = Math.random() * 3000 - 1500;
                    s.y = Math.random() * 3000 - 1500;
                }

                // Perspective projection
                const px = cx + (s.x / s.z) * 1000;
                const py = cy + (s.y / s.z) * 1000;

                // Only draw if on screen
                if (px > 0 && px < w && py > 0 && py < h) {
                    const scale = 1000 / s.z;
                    const alpha = s.alpha * (0.5 + 0.5 * Math.sin(now * s.twinkleSpeed * 60 + s.twinkleOffset));
                    
                    // Fade out deep stars
                    const zAlpha = Math.min(1, Math.max(0, 1 - (s.z / 2000)));

                    ctx.beginPath();
                    ctx.arc(px, py, s.r * scale, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * zAlpha})`;
                    ctx.fill();
                }
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
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <canvas
                ref={canvasRef}
                className="fixed inset-0 w-full h-full"
                style={{ display: "block" }}
            />
        </div>
    );
};

export default StarsCanvas;
