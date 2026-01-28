import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const categories = [
    {
        name: "Jogos & Experiências Interativas",
        projects: [
            {
                title: "Reciclatech",
                desc: "Site educativo sobre sustentabilidade e reaproveitamento de resíduos eletrônicos. Integrado com IA própria. Projeto vinculado ao Reciclatech/IPA.",
                link: "https://rectech.com.br",
                type: "site"
            },
            {
                title: "Protótipo Web 3D (estilo Just Dance)",
                desc: "Detecção de movimentos e interface 3D imersiva.",
                link: "https://gustavoluiz111.github.io/web-dance/",
                type: "github"
            }
        ]
    },
    {
        name: "Sites & Plataformas",
        projects: [
            {
                title: "Pinóquio Macabro",
                desc: "Site de terror com 6 páginas, animações e estética sombria. Meu primeiro site.",
                link: "#",
                type: "site"
            },
            {
                title: "Sistema de Rifas Automáticas",
                desc: "Geração automática, embaralhamento e exportação em JPG.",
                link: "https://gustavoluiz111.github.io/Rifa_ipa/",
                type: "site"
            }
        ]
    },
    {
        name: "Inteligência Artificial",
        projects: [
            {
                title: "Assistente de Apresentações com IA",
                desc: "Automação de apresentações e geração de conteúdo usando Gemini e ChatGPT.",
                link: "#",
                type: "ai"
            }
        ]
    },
    {
        name: "Outros Projetos",
        projects: [
            {
                title: "Projeto UPE",
                desc: "Projeto aprovado pela UPE (escopo técnico e implementação funcional).",
                link: "https://gustavoluiz111.github.io/guimaraes/",
                type: "site"
            },
            {
                title: "Caneta virtual (Web/Canvas)",
                desc: "Ferramenta de desenho interativo.",
                link: "https://gustavoluiz111.github.io/virtualpen/",
                type: "site"
            }
        ]
    }
];

const ProjectList = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-brand-dark/50">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-brand-light"
                >
                    PROJETOS
                </motion.h2>

                <div className="space-y-16">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="border-l-2 border-brand-red/30 pl-8 relative">
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-brand-red origin-top"
                            />
                            <h3 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-8">{cat.name}</h3>

                            <div className="grid gap-12">
                                {cat.projects.map((proj, pIdx) => (
                                    <motion.div
                                        key={pIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                            <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-neon transition-colors">
                                                {proj.title}
                                            </h4>
                                            {proj.link !== "#" && (
                                                <a
                                                    href={proj.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-bold text-brand-neon hover:text-white transition-colors uppercase tracking-tight"
                                                >
                                                    {proj.type === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                                                    Ver Projeto
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                                            {proj.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
