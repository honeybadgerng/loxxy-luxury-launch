import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

const videoPreviews = [
  {
    id: 1,
    thumbnail: "/lovable-uploads/965dfd22-a219-483c-ab6f-1fff56bb9467.png",
    title: "Fashion Week Highlights",
    duration: "2:45",
  },
  {
    id: 2,
    thumbnail: "/lovable-uploads/88013195-8d26-4771-a58b-5268f8f1ebbd.png",
    title: "Luxury Car Campaign",
    duration: "1:30",
  },
  {
    id: 3,
    thumbnail: "/lovable-uploads/5b642732-be04-4b94-aa3b-65416fe5f384.png",
    title: "Penthouse Tour",
    duration: "3:20",
  },
];

const Videos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          Behind the <span className="gold-gradient">Glam</span>
        </h2>
        <h3 className="text-xl md:text-2xl text-center mb-12 text-muted-foreground">
          Campaign Highlights
        </h3>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {videoPreviews.map((video) => (
            <div key={video.id} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-md">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/80 text-white transition-transform duration-300 group-hover:scale-110">
                  <Play size={24} fill="white" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>

              {/* Video Title */}
              <h4 className="mt-4 text-lg font-medium">{video.title}</h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/its_loxxy"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>View More on Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
