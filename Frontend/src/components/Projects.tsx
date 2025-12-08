import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, X, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  category: string;
  role: string;
  problemSolved: string;
  gallery?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "LUXE - Clothing Ecommerce Platform",
    description: "Full-stack e-commerce marketplace with 3D visuals and secure checkout.",
    longDescription: `• Developed a full-featured online clothing marketplace featuring immersive 3D product visuals via Three.js.
• Implemented a responsive React-based frontend with Tailwind CSS.
• Created backend APIs with Express and NodeJS, integrating MongoDB for dynamic product listings and user features.
• Designed user authentication, session handling, order history, and checkout logic.
• Optimized database schema and API endpoints for performance.`,
    role: "Full Stack Developer",
    problemSolved: "Addressed the lack of engaging product visualization in traditional e-commerce by integrating 3D models, increasing user engagement.",
    image: "/projects/luxe/luxe-1.png",
    tags: ["MERN", "Tailwind CSS", "Three.js", "Framer Motion"],
    github: "https://github.com/AlfazAli25/luxe-fashion-marketplace",
    live: "https://luxe-fashion-marketplace.vercel.app/",
    category: "Web App",
    gallery: [
      "/projects/luxe/luxe-1.png",
      "/projects/luxe/luxe-2.png",
      "/projects/luxe/luxe-3.png",
      "/projects/luxe/luxe-4.png"
    ]
  },
  {
    id: 2,
    title: "Basic Social Media Website",
    description: "Backend-driven social platform with secure auth and posts.",
    longDescription: `• Built a backend-driven social media platform enabling secure user registration, login, and personalized profile management.
• Implemented robust authentication and authorization using JWT and bcrypt.
• Designed complete CRUD functionality for posts including creation, editing, deletion, and dynamic liking.
• Used MongoDB with Mongoose schemas to maintain structured relationships between users and posts.`,
    role: "Backend Developer",
    problemSolved: "Created a secure and scalable foundation for social networking features with focus on data integrity and user privacy.",
    image: "/projects/social-media/social-1.png",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind CSS"],
    github: "https://github.com/AlfazAli25/Basic_Social_Media_WebApplication",
    live: "/backend-project",
    category: "Web App",
    gallery: [
      "/projects/social-media/social-1.png",
      "/projects/social-media/social-2.png",
      "/projects/social-media/social-3.png"
    ]
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            A selection of my recent work spanning web development, 3D graphics,
            and creative technology.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card cursor-pointer overflow-hidden transition-all duration-200 ease-out"
                onClick={() => setSelectedProject(project)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-primary bg-primary/20 px-6 py-2 font-display text-sm uppercase tracking-wider text-primary backdrop-blur-md">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span className="text-primary">Role:</span> {project.role}
                  </div>
                  <p className="mb-4 font-body text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted/50 border border-white/5 px-3 py-1 font-body text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal content */}
            <motion.div
              className="glass-card relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto border-primary/20"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Column */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Column */}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <h3 className="mb-2 font-display text-3xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-primary" />
                      <span>{selectedProject.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-secondary" />
                      <span>{selectedProject.category}</span>
                    </div>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.problemSolved}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Key Features</h4>
                      <p className="font-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-body text-xs text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon flex-1 flex items-center justify-center gap-2 py-3 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                    {selectedProject.live.startsWith("/") ? (
                      <Link
                        to={selectedProject.live}
                        className="btn-gradient flex-1 flex items-center justify-center gap-2 py-3 text-sm"
                        onClick={() => setSelectedProject(null)}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    ) : (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient flex-1 flex items-center justify-center gap-2 py-3 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
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
