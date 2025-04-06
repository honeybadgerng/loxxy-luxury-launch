import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="about" className="section bg-white dark:bg-black">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="order-2 md:order-1">
            <h2 className="section-heading">
              About <span className="gold-gradient">Lola</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              With an innate elegance and a natural flair for captivating
              audiences, Lola has established herself as a premium influencer in
              the luxury lifestyle space. Her sophisticated aesthetic and
              authentic approach have made her a sought-after partner for
              high-end brands across multiple industries.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Specializing in real estate, automobiles, fashion, and lifestyle
              campaigns, Lola brings a unique blend of refinement and
              relatability to every collaboration. Her portfolio showcases
              partnerships with prestigious brands that value quality,
              exclusivity, and impeccable taste.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond her striking presence, Lola offers exceptional brand
              alignment and audience engagement, delivering measurable results
              through meticulously curated content that resonates with
              discerning consumers in the luxury market.
            </p>
          </div>

          <div className="order-1 md:order-2 h-[500px] overflow-hidden">
            <div className="relative h-full">
              <img
                src="/lovable-uploads/32b9f149-88ed-47e0-8869-a0b8d7957b02.png"
                alt="Lola Portrait"
                className="w-full h-full object-cover object-center shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-playfair">its_loxxy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
