import { useEffect } from 'react';
import GooeyNav from '../components/GooeyNav';
import Hero from '../components/Hero';
import About from '../components/About';
import DesignsGallery from '../components/DesignsGallery';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import ServicesCarousel from '../components/ServicesCarousel';
import MagicBento from '../components/MagicBento';

const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' }
];

const Home = () => {
    useEffect(() => {
        console.log('🏠 Home component mounted');
        window.scrollTo(0, 0);
        return () => console.log('🏠 Home component unmounted');
    }, []);

    return (
        <div className="bg-black text-white font-sans selection:bg-brand-neon selection:text-black">
            <GooeyNav items={navItems} />
            <Hero />

            {/* Projects Section */}
            <section id="projects" className="py-20 flex flex-col justify-center items-center min-h-screen bg-black/40">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    Meus <span className="text-gradient">Projetos</span>
                </h2>
                <MagicBento />
            </section>

            {/* Services Carousel Section - O QUE EU FAÇO */}
            <ServicesCarousel />

            {/* About Section with FaultyTerminal Background */}
            <About />

            {/* Gallery Section - Designs with Masonry */}
            <section id="gallery" className="py-24 bg-black/20 min-h-screen flex flex-col items-center justify-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">Galeria de <span className="text-gradient">Designs</span></h2>
                    <p className="text-gray-400 mt-4">Explorando criatividade visual e conceitos gráficos</p>
                </div>
                <div className="flex-1 w-full relative min-h-[100vh]">
                    <DesignsGallery />
                </div>
            </section>

            <Tools />
            <Contact />
        </div>
    );
};

export default Home;
