import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                className="group glass-card cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -15, scale: 1.03, rotateZ: 1 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm uppercase tracking-wider text-primary">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 font-body text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground"
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
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal content */}
            <motion.div
              className="glass-card relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="mb-4 font-display text-3xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 font-body text-muted-foreground whitespace-pre-line">
                  {selectedProject.longDescription}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-4 py-1 font-body text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Gallery */}
                {selectedProject.gallery && (
                  <div className="mb-8 grid gap-4 sm:grid-cols-2">
                    {selectedProject.gallery.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border border-border bg-muted">
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                  {selectedProject.live.startsWith("/") ? (
                    <Link
                      to={selectedProject.live}
                      className="btn-gradient flex items-center gap-2"
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
                      className="btn-gradient flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
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
