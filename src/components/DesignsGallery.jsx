import React, { useMemo } from 'react';
import Masonry from './Masonry';

const DesignsGallery = () => {
    // Moved designs folder to public/designs.
    // Filenames have double spaces: "design  (1).png"
    // Found 8 PNG files.

    const items = useMemo(() => {
        const totalImages = 8;

        return Array.from({ length: totalImages }, (_, i) => {
            const id = i + 1;
            return {
                id: `design-${id}`,
                // Updated path to reflect public/designs location and double-space filename pattern
                // Prepend BASE_URL to handle GitHub Pages subdirectory
                img: `${import.meta.env.BASE_URL}designs/design  (${id}).png`,
                url: '#' // Placeholder link
            };
        });
    }, []);

    return (
        <div className="w-full min-h-screen bg-transparent py-20">
            <div className="max-w-[1600px] mx-auto px-4 w-full h-full min-h-[800px]">
                <Masonry
                    items={items}
                    animateFrom="bottom"
                    stagger={0.1}
                    glowColor="#8400ff"
                />
            </div>
        </div>
    );
};

export default DesignsGallery;
