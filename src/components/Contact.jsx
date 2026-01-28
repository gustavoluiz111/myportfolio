import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaInstagram, FaBehance, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { icon: FaGithub, link: "https://github.com/gustavoluiz111", color: "neon" },
        { icon: FaWhatsapp, link: "https://wa.me/558195275520", color: "purple" },
        { icon: FaInstagram, link: "https://instagram.com/lg_wstudio", color: "neon" },
        { icon: FaEnvelope, link: "mailto:cavalcantelima1415@gmail.com", color: "purple" }
    ];

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Vamos Construir o <span className="text-gradient">Futuro</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
                >
                    Tem um projeto em mente? Procurando um parceiro criativo?
                    Vamos nos conectar e criar algo extraordinário.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center space-x-8 mb-16"
                >
                    {socialLinks.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.3,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.3 }
                            }}
                            className={`text-gray-400 text-3xl md:text-4xl transition-all duration-300 relative group`}
                        >
                            <item.icon className="relative z-10" />

                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color === 'neon' ? 'bg-brand-neon' : 'bg-brand-purple'
                                    }`}
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.a>
                    ))}
                </motion.div>

                <footer className="text-gray-600 text-sm border-t border-white/5 pt-8">
                    <p>© 2026 LG Web Studio. Todos os direitos reservados.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
