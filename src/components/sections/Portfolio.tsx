import { useState } from "react";
import { useInView } from "react-intersection-observer";

const categories = [
  "All",
  "Fashion",
  "Real Estate",
  "Automobiles",
  "Lifestyle",
];

const portfolioImages = [
  {
    id: 1,
    src: "/lovable-uploads/62833b07-8056-456d-bbad-8c9c8d121f47.png",
    alt: "Fashion Photoshoot",
    category: "Fashion",
  },
  {
    id: 2,
    src: "/lovable-uploads/4e468635-bb14-4ba5-be13-e9d456535bb0.png",
    alt: "Luxury Interior",
    category: "Real Estate",
  },
  {
    id: 3,
    src: "/lovable-uploads/36cd70dd-a742-4ec2-84b5-0f847f508942.png",
    alt: "Fashion Editorial",
    category: "Fashion",
  },
  {
    id: 4,
    src: "/lovable-uploads/32b9f149-88ed-47e0-8869-a0b8d7957b02.png",
    alt: "Lifestyle Shoot",
    category: "Lifestyle",
  },
  {
    id: 5,
    src: "/lovable-uploads/bc028830-e659-4223-9b10-194a5240a89b.png",
    alt: "Real Estate Campaign",
    category: "Real Estate",
  },
  {
    id: 6,
    src: "/lovable-uploads/5b642732-be04-4b94-aa3b-65416fe5f384.png",
    alt: "Automobile Campaign",
    category: "Automobiles",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((image) => image.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-lightgray dark:bg-darkgray">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Portfolio</h2>
        <p className="section-subheading text-center">
          Showcasing a collection of high-end campaigns and collaborations
          across various luxury industries.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-white"
                  : "bg-white dark:bg-black/20 hover:bg-gold/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden group relative cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-playfair text-xl">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gold"
              onClick={() => setLightboxImage(null)}
            >
              Close
            </button>
            <img
              src={lightboxImage}
              alt="Portfolio Enlarged View"
              className="max-h-[85vh] max-w-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
