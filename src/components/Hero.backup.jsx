import { motion } from 'framer-motion';
import Antigravity from './Antigravity';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Antigravity />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl font-light tracking-wide text-brand-neon mb-4 uppercase"
                >
                    LG Web Studio
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    I Build <span className="text-gradient">Digital Experiences</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
                >
                    Merging code, design, and motion to create immersive web applications.
                    Expertise in Sports Design, Full Stack Development, and AI Automation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-brand-neon transition-all duration-300 text-white font-medium tracking-wide backdrop-blur-sm"
                    >
                        View Work
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
            >
                Scroll Down
            </motion.div>
        </section>
    );
};

export default Hero;
