import { useInView } from "react-intersection-observer";
import { Download, Users, BarChart2, Globe } from "lucide-react";

const stats = [
  {
    name: "Followers",
    value: "350K+",
    icon: Users,
    description: "Across platforms",
  },
  {
    name: "Engagement",
    value: "4.8%",
    icon: BarChart2,
    description: "Average rate",
  },
  {
    name: "Reach",
    value: "Global",
    icon: Globe,
    description: "Worldwide audience",
  },
];

const MediaKit = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gradient-to-b from-white to-softpink/30 dark:from-black dark:to-darkgray">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div>
            <h2 className="section-heading">
              Media <span className="gold-gradient">Kit</span>
            </h2>
            <p className="text-lg mb-8">
              Get detailed insights into Lola's audience demographics,
              engagement metrics, and past campaign results in her comprehensive
              media kit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/50 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair">
                    {stat.value}
                  </h3>
                  <p className="font-medium mb-1">{stat.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                <Download size={18} />
                <span>Download Lola's Media Kit</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/36cd70dd-a742-4ec2-84b5-0f847f508942.png"
              alt="Media Kit Preview"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-black p-4 rounded-lg shadow-lg transform rotate-3">
              <p className="font-bold">2024-25</p>
              <p className="text-sm">Media Kit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
