import Carousel from './Carousel';
import { FaPaintBrush, FaVideo, FaImage, FaCode } from 'react-icons/fa';

const servicesData = [
    {
        icon: <FaPaintBrush className="carousel-icon" />,
        title: "Design",
        description: "Identidade visual e artes",
        id: 1
    },
    {
        icon: <FaVideo className="carousel-icon" />,
        title: "Vídeo",
        description: "Edição e motion design",
        id: 2
    },
    {
        icon: <FaImage className="carousel-icon" />,
        title: "Imagem",
        description: "Fotografia e edição",
        id: 3
    },
    {
        icon: <FaCode className="carousel-icon" />,
        title: "Coding",
        description: "Desenvolvimento web",
        id: 4
    }
];

export default function ServicesCarousel() {
    return (
        <section id="services" className="py-24 px-6 relative min-h-screen flex flex-col items-center justify-center">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 italic text-white">O QUE EU FAÇO</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Soluções criativas do conceito à entrega final.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Carousel
                    items={servicesData}
                    baseWidth={350}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </section>
    );
}
