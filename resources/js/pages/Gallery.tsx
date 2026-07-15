import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/section-header';
import HorizontalLine from '@/components/ui/horizontal-line';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    { id: 1, src: '/gallery1.jpg', alt: 'Church Service', category: 'Services' },
    { id: 2, src: '/gallery2.jpg', alt: 'Worship Session', category: 'Worship' },
    { id: 3, src: '/gallery3.jpg', alt: 'Community Outreach', category: 'Outreach' },
    { id: 4, src: '/gallery4.jpg', alt: 'Youth Program', category: 'Youth' },
    { id: 5, src: '/gallery5.jpg', alt: 'Special Event', category: 'Events' },
    { id: 6, src: '/gallery6.jpg', alt: 'Prayer Meeting', category: 'Prayer' },
    { id: 7, src: '/gallery7.jpg', alt: 'Bible Study', category: 'Study' },
    { id: 8, src: '/gallery8.jpg', alt: 'Fellowship', category: 'Fellowship' },
    { id: 9, src: '/gallery9.jpg', alt: 'Music Ministry', category: 'Music' },
    { id: 10, src: '/gallery10.jpg', alt: 'Children Church', category: 'Children' },
    { id: 11, src: '/gallery11.jpg', alt: 'Conference', category: 'Events' },
    { id: 12, src: '/gallery12.jpg', alt: 'Thanksgiving', category: 'Services'},
];

const categories = ['All', 'Services', 'Worship', 'Outreach', 'Youth', 'Events', 'Prayer', 'Study', 'Fellowship', 'Music', 'Children'];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const handleImageClick = (image: typeof galleryImages[0]) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <PublicLayout>
            <Head title="Gallery" />

            <main>
                <PageHero
                    title='Gallery'
                    description='Explore moments of worship, fellowship, and community life at RPC Assembly'
                />

                <div className="flex flex-col bg-white text-[#1b1b18] py-12 lg:py-16">
                    <div className="w-full max-w-7xl mx-auto px-6">
                        <SectionHeader className="text-center mb-12">
                            Our <span className="text-royal-purple font-serif italic">Moments</span>
                            <HorizontalLine className="mx-auto" />
                        </SectionHeader>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 font-sans ${
                                        selectedCategory === category
                                            ? 'bg-royal-purple text-white shadow-lg scale-105'
                                            : 'bg-warm-cream text-deep-navy hover:bg-royal-purple hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {filteredImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%23f5f0e8' width='400' height='400'/%3E%3Ctext fill='%236c2bd9' font-family='serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${image.alt}%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-medium font-sans">{image.alt}</p>
                                        <p className="text-white/80 text-sm font-sans">{image.category}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                            <ZoomIn className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredImages.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-500 text-lg font-sans">No images found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white hover:text-royal-purple transition-colors duration-300"
                        >
                            <X size={32} />
                        </button>
                        <div className="relative max-w-5xl max-h-[90vh]">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23f5f0e8' width='800' height='600'/%3E%3Ctext fill='%236c2bd9' font-family='serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${selectedImage.alt}%3C/text%3E%3C/svg%3E";
                                }}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                                <p className="text-white font-semibold text-lg font-serif">{selectedImage.alt}</p>
                                <p className="text-white/80 font-sans">{selectedImage.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </PublicLayout>
    );
}
