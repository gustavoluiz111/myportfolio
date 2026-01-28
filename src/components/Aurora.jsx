import { useEffect, useRef } from 'react';

const Aurora = ({ colorStops = ["#5227FF", "#ff6666", "#5227FF"], amplitude = 1, blend = 0.5 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        let resizeTimeout;
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resize, 100);
        };

        resize();
        window.addEventListener('resize', handleResize);

        const animate = () => {
            time += 0.005;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient
            const gradient = ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );

            colorStops.forEach((color, index) => {
                const position = index / (colorStops.length - 1);
                gradient.addColorStop(position, color);
            });

            // Draw aurora effect
            ctx.globalAlpha = blend;
            ctx.fillStyle = gradient;

            // Create wave effect
            const isMobile = window.innerWidth < 768;
            const step = isMobile ? 50 : 10;

            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += step) {
                const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 100 * amplitude;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();

            // Add glow effect - skipped on mobile for performance
            if (!isMobile) {
                ctx.globalAlpha = blend * 0.5;
                ctx.filter = 'blur(50px)';
                ctx.fill();
                ctx.filter = 'none';
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [colorStops, amplitude, blend]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export default Aurora;
