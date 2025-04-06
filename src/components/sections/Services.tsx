import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Brand Ambassadorships",
    description:
      "Long-term partnerships representing your brand with authentic engagement and consistent promotion across multiple channels.",
    image: "/lovable-uploads/bc028830-e659-4223-9b10-194a5240a89b.png",
  },
  {
    title: "Modeling for Luxury Brands",
    description:
      "Professional modeling services for fashion campaigns, product launches, real estate marketing, and automotive promotions.",
    image: "/lovable-uploads/32b9f149-88ed-47e0-8869-a0b8d7957b02.png",
  },
  {
    title: "Social Media Promotions",
    description:
      "Strategic content creation and promotion across Instagram, TikTok and other platforms, tailored to reach and engage your target audience.",
    image: "/lovable-uploads/62833b07-8056-456d-bbad-8c9c8d121f47.png",
  },
  {
    title: "Event Hosting & Appearances",
    description:
      "Professional hosting services and appearances at product launches, store openings, and exclusive industry events.",
    image: "/lovable-uploads/36cd70dd-a742-4ec2-84b5-0f847f508942.png",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Services & Packages</h2>
        <p className="section-subheading text-center">
          Premium collaboration opportunities for luxury brands
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-white dark:bg-darkgray dark:hover:bg-black/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white text-xl md:text-2xl font-playfair">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-block text-gold hover:underline"
                >
                  <span>Learn More</span>
                  <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
