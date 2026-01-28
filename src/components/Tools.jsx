import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    SiCanva, SiAdobephotoshop, SiBlender,
    SiFirebase, SiGithub, SiUnity, SiHtml5, SiCss3, SiJavascript,
    SiPython, SiMysql, SiReact, SiNodedotjs, SiTailwindcss, SiGooglechrome, SiLua
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaCode, FaImage, FaVideo } from 'react-icons/fa';
import LiquidEther from './LiquidEther';

console.log('🛠️ Tools component loaded');

const tools = [
    {
        category: "Design & Imagem",
        icons: [
            { Icon: SiCanva, name: "Canva" },
            { Icon: SiAdobephotoshop, name: "Adobe Photoshop" },
            { Icon: FaImage, name: "Affinity Suite" },
            { Icon: FaImage, name: "Adobe Lightroom" },
            { Icon: SiBlender, name: "Blender" },
            { Icon: FaImage, name: "PicsArt" }
        ]
    },
    {
        category: "Vídeo",
        icons: [
            { Icon: FaVideo, name: "CapCut (Desktop)" }
        ]
    },
    {
        category: "Programação & Plataformas",
        icons: [
            { Icon: VscCode, name: "VS Code" },
            { Icon: VscCode, name: "Visual Studio" },
            { Icon: VscCode, name: "CodePen" },
            { Icon: SiFirebase, name: "Firebase" },
            { Icon: SiGithub, name: "GitHub" },
            { Icon: SiUnity, name: "Unity" },
            { Icon: SiGooglechrome, name: "DevTools" }
        ]
    },
    {
        category: "Linguagens",
        icons: [
            { Icon: SiHtml5, name: "HTML" },
            { Icon: SiCss3, name: "CSS" },
            { Icon: SiJavascript, name: "JavaScript" },
            { Icon: SiPython, name: "Python" },
            { Icon: SiLua, name: "Lua" },
            { Icon: SiMysql, name: "SQL" }
        ]
    }
];

const Tools = () => {
    const [hoveredTool, setHoveredTool] = useState(null);
    console.log('🛠️ Tools component rendering');

    return (
        <section id="tools" className="relative py-20 px-6 overflow-hidden min-h-screen">
            {/* LiquidEther Background */}
            <div className="absolute inset-0 z-0">
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    resolution={0.5}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16"
                >
                    Ferramentas & <span className="text-gradient">Stack</span>
                </motion.h2>

                <div className="space-y-12">
                    {tools.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-sm font-mono text-brand-neon mb-6 uppercase tracking-wider">{group.category}</h3>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {group.icons.map((tool, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                        onHoverStart={() => setHoveredTool(`${index}-${i}`)}
                                        onHoverEnd={() => setHoveredTool(null)}
                                    >
                                        <tool.Icon className="text-4xl md:text-5xl text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,247,255,0.6)]" />

                                        {/* Tooltip */}
                                        {hoveredTool === `${index}-${i}` && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-white/20"
                                            >
                                                {tool.name}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;

