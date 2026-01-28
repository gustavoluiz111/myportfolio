import { motion } from 'framer-motion';

const projects = [
    {
        title: "Neon E-Commerce",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000",
        desc: "A futuristic shopping experience with 3D product previews."
    },
    {
        title: "AI Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        desc: "Data visualization platform for neural network training metrics."
    },
    {
        title: "Cyber Brand",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
        desc: "Identity design for a next-gen cybersecurity firm."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16"
                >
                    Selected <span className="text-gradient">Works</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <div className="aspect-video bg-zinc-800 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-brand-neon text-sm font-mono mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
