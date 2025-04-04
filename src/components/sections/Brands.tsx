
import { useInView } from 'react-intersection-observer';

const brandLogos = [
  { name: "iLotus Homes", width: "120px" },
  { name: "Range Rover", width: "150px" },
  { name: "Zara", width: "100px" },
  { name: "Luxury Hotels", width: "140px" },
  { name: "Fashion Week", width: "130px" }
];

const testimonial = {
  quote: "Working with Lola was an absolute pleasure. Her professionalism, creativity, and connection with our audience elevated our campaign to new heights. The engagement metrics exceeded our expectations.",
  author: "Sarah Johnson",
  position: "Marketing Director, Luxury Brand"
};

const Brands = () => {
  const { ref: brandsRef, inView: brandsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-softpink/30 dark:bg-black/80">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Brand Collaborations</h2>
        <p className="section-subheading text-center">
          A selection of prestigious brands that have partnered with Lola
        </p>

        {/* Brand Logos */}
        <div 
          ref={brandsRef}
          className={`flex flex-wrap justify-center items-center gap-12 my-16 transition-all duration-700 ${
            brandsInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {brandLogos.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-white dark:bg-darkgray p-6 rounded-md shadow-md min-w-[150px] h-20"
              style={{ width: brand.width }}
            >
              <span className="font-playfair text-lg font-medium dark:text-gray-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div 
          ref={testimonialRef}
          className={`max-w-3xl mx-auto mt-20 transition-all duration-700 ${
            testimonialInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="glass-card rounded-xl p-8 md:p-10 text-center">
            <svg 
              className="w-10 h-10 mx-auto mb-4 text-gold" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M10 11l-2 2-3-2v5h7v-6h-2v1zm11 0l-2 2-3-2v5h7v-6h-2v1z" transform="rotate(180 12 12)"></path>
            </svg>
            <blockquote className="text-lg md:text-xl font-light italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-4">
              <p className="font-playfair font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
