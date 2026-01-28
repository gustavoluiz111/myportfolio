import { motion } from 'framer-motion';
import Antigravity from './Antigravity';

const Hero = () => {
    const logos = [
        `${import.meta.env.BASE_URL}assets/logo/2.png`,
        `${import.meta.env.BASE_URL}assets/logo/3.png`,
        `${import.meta.env.BASE_URL}assets/logo/4.png`,
        `${import.meta.env.BASE_URL}assets/logo/5.png`,
        `${import.meta.env.BASE_URL}assets/logo/6.png`
    ];

    return (
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-80">
                <Antigravity color="#FFFFFF" />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <motion.img
                        src={`${import.meta.env.BASE_URL}assets/logo/2.png`}
                        alt="LG Web Studio Logo"
                        className="h-24 md:h-32 object-contain hover:scale-105 transition-transform duration-300 invert"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-3xl font-bold tracking-widest text-white mb-4 uppercase italic"
                >
                    Luiz Gustavo
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white"
                >
                    Eu Construo <span className="text-gradient">Experiências Digitais</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-bold"
                >
                    Fundindo código, design e movimento para criar aplicações web imersivas.
                    Especialista em Design Esportivo, Desenvolvimento Full Stack e Automação com IA.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex gap-4 justify-center"
                >
                    <a
                        href="#about"
                        className="px-8 py-3 bg-white text-black border border-white rounded-full hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300 font-medium tracking-wide backdrop-blur-sm"
                    >
                        Conheça meu Trabalho
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold"
            >
                Role para baixo
            </motion.div>
        </section>
    );
};

export default Hero;
