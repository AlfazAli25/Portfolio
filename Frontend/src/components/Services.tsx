import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Layout, Server, Zap } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    description: "Building end-to-end web applications with modern frameworks and robust backends.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "Designing RESTful APIs ensuring secure and efficient data exchange.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting scalable database schemas for optimal data management and performance.",
  },
  {
    icon: Code,
    title: "Frontend Architecture",
    description: "Creating reusable component libraries and clean, maintainable frontend codebases.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing application speed and responsiveness for superior user experience.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            What I Do
          </span>
          <h2 className="section-title mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Delivering high-quality solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card group relative overflow-hidden p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
