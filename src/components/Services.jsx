import { motion } from 'framer-motion';
import { FaPaintBrush, FaVideo, FaImage, FaCode } from 'react-icons/fa';

const services = [
    {
        icon: <FaPaintBrush className="text-4xl text-brand-purple mb-4" />,
        title: "Design",
        items: [
            "Identidade visual",
            "Artes para redes sociais",
            "Mockups",
            "Design esportivo",
            "Tipografia e composição"
        ]
    },
    {
        icon: <FaVideo className="text-4xl text-brand-neon mb-4" />,
        title: "Vídeo",
        items: [
            "Edição de vídeo",
            "Vídeos criativos",
            "Motion design",
            "Color grading",
            "Sound design"
        ]
    },
    {
        icon: <FaImage className="text-4xl text-brand-purple mb-4" />,
        title: "Imagem",
        items: [
            "Retoque fotográfico",
            "Manipulação de imagem",
            "Arte conceito",
            "IA Generativa",
            "Fotografia"
        ]
    },
    {
        icon: <FaCode className="text-4xl text-brand-neon mb-4" />,
        title: "Coding",
        items: [
            "Web sites (React)",
            "Aplicações interativas",
            "Integração de APIs",
            "Sistemas customizados",
            "Automações"
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">O QUE EU FAÇO</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Soluções criativas do conceito à entrega final.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl group hover:border-brand-neon transition-all duration-300 bg-black/40 backdrop-blur-xl border border-white/5"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                            <ul className="space-y-2">
                                {service.items.map((item, i) => (
                                    <li key={i} className="text-gray-400 flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
