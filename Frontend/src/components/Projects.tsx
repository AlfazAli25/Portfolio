import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  role: string;
  problemSolved: string;
  tech: string[];
  features: string[];
  images: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxe",
    category: "Full Stack E-commerce",
    description: "A premium e-commerce platform built for high-end retail with real-time inventory management.",
    role: "Lead Full Stack Developer",
    problemSolved: "Solved the issue of high-traffic concurrency during flash sales by implementing Redis caching and optimistic locking, reducing server load by 40%.",
    tech: ["MERN", "JavaScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
    features: [
      "Developed a full-featured online clothing marketplace featuring immersive 3D product visuals via Three.js.",
      "Dummy Secure payment processing via Stripe integration",
      "Admin dashboard for order and product management",
      "Created backend APIs with Express and NodeJS, integrating MongoDB for dynamic product listings and user features.",
      "Responsive design with mobile-first approach"
    ],
    images: [
      "/projects/luxe/luxe-1.png",
      "/projects/luxe/luxe-2.png",
      "/projects/luxe/luxe-3.png",
      "/projects/luxe/luxe-4.png"
    ],
    github: "https://github.com/AlfazAli25",
    demo: "https://luxe-market.vercel.app",
  },
  {
    id: 2,
    title: "AuraLink",
    category: "Social Media Platform",
    description: "A Backend-driven social media platform enabling secure user registration, login, and personalized profile management.",
    role: "Backend Architect",
    problemSolved: "Secure user registration, login, and personalized profile management using JWT Auth and bcrypt.",
    tech: ["Node.js", "MongoDB", "Express", "Tailwind CSS", "EJS"],
    features: [
      "Secure user registration, login, and personalized profile management",
      "Interactive posts (Like, Comment, Share)",
      "User authentication and profile management",
      "Image upload"
    ],
    images: [
      "/projects/social-media/social-1.png",
      "/projects/social-media/social-2.png",
      "/projects/social-media/social-3.png"
    ],
    github: "https://github.com/AlfazAli25",
    demo: "https://connect-share.vercel.app",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 3D Tilt Effect Helpers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Reduced rotation intensity for better performance
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    requestAnimationFrame(() => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work focusing on performance, user experience, and modern architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card cursor-pointer overflow-hidden transition-all duration-200 ease-out"
              onClick={() => openModal(project)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0" />
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Content */}
              <div className="relative p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-secondary/10 p-2 text-secondary transition-colors hover:bg-secondary hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <span className="text-primary">Role:</span> {project.role}
                </div>
                <p className="mb-4 font-body text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card relative max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-2xl border-primary/20 bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/50 p-2 text-muted-foreground backdrop-blur-md transition-colors hover:bg-destructive hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Gallery / Carousel */}
              <div className="relative h-64 w-full bg-black/50 sm:h-80 md:h-96">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                  className="h-full w-full object-contain"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-white hover:bg-primary transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-white hover:bg-primary transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-all ${idx === activeImageIndex ? "bg-primary w-4" : "bg-white/50 hover:bg-white"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-1 font-display text-3xl font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-primary">{selectedProject.category}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-basic flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:bg-secondary/10 hover:text-secondary hover:border-secondary"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon flex items-center gap-2 px-6 py-2 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                        Problem Solved
                      </h4>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {selectedProject.problemSolved}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                        Key Features
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground font-body">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="glass-card p-5 h-fit">
                    <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-secondary/10 px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                        My Role
                      </h4>
                      <p className="text-sm text-foreground">{selectedProject.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
