import { motion } from 'framer-motion';
import FaultyTerminal from './FaultyTerminal';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Shader */}
            <div className="absolute inset-0 z-0">
                <FaultyTerminal
                    scale={0.8}
                    brightness={0.4}
                    tint="#00f7ff"
                    curvature={0.1}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">
                        Sobre <span className="text-gradient">Mim</span>
                    </h2>

                    <div className="glass p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/5 hover:bg-black/50 transition-all duration-500 group">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-medium mb-8 text-white italic"
                        >
                            Estúdio criativo e tecnológico focado em <span className="text-brand-neon">design, vídeo e programação</span>, unindo estética dark, futurista e minimalista com soluções práticas e profissionais.
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed text-left max-w-3xl mx-auto"
                        >
                            <p>
                                Estudo <span className="text-white font-semibold">programação e edição de imagens há 7 anos</span> e gosto de resolver problemas com lógica. Minha jornada é marcada pela busca constante por excelência técnica e impacto visual.
                            </p>

                            <p className="border-l-4 border-brand-purple pl-6 py-2 bg-white/5 rounded-r-xl italic text-white/90">
                                "Sou um profissional que acredita no trabalho bem-feito e no cuidado com cada detalhe. Atuo na área há alguns anos, período em que venho me dedicando diariamente a aprender, evoluir e entregar sempre o melhor resultado possível."
                            </p>

                            <p>
                                Mais do que executar, busco entender, respeitar o processo e valorizar cada cliente. Meu trabalho é feito com <span className="text-brand-neon">foco, responsabilidade e paixão</span> pelo que faço. Sigo em constante evolução, porque acredito que quem ama o que faz nunca para de aprender.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
