import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaCamera, FaRobot } from 'react-icons/fa';

const expertiseItems = [
    {
        icon: <FaPaintBrush className="text-4xl text-brand-purple mb-4" />,
        title: "Design Criativo",
        desc: "Criando interfaces e gráficos visualmente impressionantes que cativam os usuários.",
        tags: ["UI/UX", "Branding", "Motion"]
    },
    {
        icon: <FaCode className="text-4xl text-brand-neon mb-4" />,
        title: "Dev Full Stack",
        desc: "Construindo aplicações robustas e escaláveis com tecnologias modernas.",
        tags: ["React", "Node.js", "Tailwind"]
    },
    {
        icon: <FaCamera className="text-4xl text-brand-purple mb-4" />,
        title: "Conteúdo Visual",
        desc: "Capturando e editando imagens e vídeos de alta qualidade para marcas.",
        tags: ["Fotografia", "Edição de Vídeo", "Premiere"]
    },
    {
        icon: <FaRobot className="text-4xl text-brand-neon mb-4" />,
        title: "Automação com IA",
        desc: "Alavancando a IA para otimizar fluxos de trabalho e criar sistemas mais inteligentes.",
        tags: ["LLMs", "Python", "Workflows"]
    }
];

const Expertise = () => {
    return (
        <section id="expertise" className="py-20 px-6 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Áreas de <span className="text-gradient">Especialidade</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, borderColor: '#00f7ff' }}
                            className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300"
                        >
                            <div className="bg-white/5 p-4 rounded-xl inline-block mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
