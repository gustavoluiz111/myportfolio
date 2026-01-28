import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaGlobe } from 'react-icons/fa';
import { projects } from '../data/data';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-brand-neon hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-neon selection:text-black">
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Stack
                </Link>
                <span className="text-brand-neon font-mono text-sm">{project.category}</span>
            </nav>

            <header className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                    >
                        {project.shortDesc}
                    </motion.p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold mb-4 text-brand-purple">Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-4 text-brand-neon">Challenge & Solution</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Links</h4>
                            <div className="space-y-4">
                                {project.links.site && (
                                    <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center text-white hover:text-brand-neon transition-colors">
                                        <FaGlobe className="mr-3" /> Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center text-white hover:text-brand-purple transition-colors">
                                        <FaGithub className="mr-3" /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Tailwind', 'Framer Motion'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;
