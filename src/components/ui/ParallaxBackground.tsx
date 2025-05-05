import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollY } = useScroll();

    // Create smoother parallax transforms for different elements
    const yBackground = useTransform(scrollY, [0, 1000], [0, -150]);
    const yDots = useTransform(scrollY, [0, 1000], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [0.15, 0.05]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute inset-0"
                style={{
                    y: yBackground,
                    opacity,
                    pointerEvents: 'none'
                }}
            >
                {/* Main grid pattern */}
                <svg width="100%" height="200%" xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="grid"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 60 0 L 0 0 0 60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-primary-600"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </motion.div>

            {/* Overlay with dots that move at a different speed */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: yDots,
                    opacity,
                    pointerEvents: 'none'
                }}
            >
                <svg width="100%" height="200%" xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="dots"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle
                            cx="60"
                            cy="60"
                            r="2"
                            fill="currentColor"
                            className="text-primary-400"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </motion.div>
        </div>
    );
};

export default ParallaxBackground;