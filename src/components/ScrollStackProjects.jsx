import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { projects } from '../data/data';
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';

const ScrollStackProjects = () => {
    return (
        <section id="projects" className="py-20 relative h-[300vh] bg-black">
            <div className="absolute top-10 left-0 w-full text-center z-10 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Projetos <span className="text-gradient">Selecionados</span>
                </motion.h2>
                <p className="text-gray-400">Arraste ou role para explorar a stack</p>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-2xl h-[450px] md:h-[550px] relative px-4">
                    <ScrollStack
                        itemDistance={50}
                        stackPosition="15%"
                        scaleEndPosition="5%"
                        itemScale={0.06}
                        itemStackDistance={25}
                    >
                        {projects.map((project) => (
                            <ScrollStackItem key={project.id}>
                                <div className="relative h-full w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                                    {/* Imagem de Fundo */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                    />

                                    {/* Overlay de Conteúdo */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 md:p-12 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                            <span className="text-brand-neon font-mono text-xs md:text-sm mb-2 block tracking-widest uppercase">
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-8 max-w-xl">
                                                {project.shortDesc}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-6">
                                                {project.links.site && (
                                                    <a
                                                        href={project.links.site}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-white hover:text-brand-neon transition-colors font-bold text-sm md:text-base group/link"
                                                    >
                                                        SITE <FaGlobe className="group-hover/link:rotate-12 transition-transform" />
                                                    </a>
                                                )}
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-white hover:text-brand-purple transition-colors font-bold text-sm md:text-base group/link"
                                                    >
                                                        GITHUB <FaGithub className="group-hover/link:scale-110 transition-transform" />
                                                    </a>
                                                )}
                                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                                                        EXPLORAR <FaArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
};

export default ScrollStackProjects;
