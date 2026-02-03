import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";
import ThreeDPhoto from "./ThreeDPhoto";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code is my passion.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Blending aesthetics with functionality for stunning user experiences.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development with quick turnaround without compromising quality.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Always exploring new technologies and pushing creative boundaries.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="section-title mb-4">
            Turning <span className="gradient-text">Ideas</span> Into Reality
          </h2>
          <p className="section-subtitle mx-auto">
            I'm a passionate MERN Stack Developer with 3+ years of experience creating digital experiences
            that make a difference.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  My Journey
                </h3>
                <motion.div
                  className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-xl border border-primary/20 bg-primary/5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src="/profile/my-journey.png"
                    alt="Alfaz Ali"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Hello! I'm Alfaz, a MERN Stack Developer based in Kolkata, India. I specialize in
                  building scalable and user-focused web applications using the MERN stack.
                </p>
                <p>
                  I am currently pursuing my Bachelor of Technology in Computer Science and Technology
                  at the University of Engineering and Management, Kolkata (2022-2026).
                </p>
                <p>
                  I have strong expertise in API design, frontend development, and database modeling.
                  I use modern tools and best practices to write clean, efficient code and love
                  solving complex problems through technology.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { number: "7.75", label: "CGPA" },
                  { number: "5+", label: "Projects" },
                  { number: "4+", label: "Programming Languages" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card group cursor-pointer p-6 transition-all duration-300 hover:border-primary/30"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Timeline Section */}
        <div className="mt-24">
          <motion.h3
            className="mb-12 text-center font-display text-2xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h3>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-transparent" />

            {[
              { year: "2022", title: "Started Coding", description: "Wrote my first line of C++ code and fell in love with problem solving." },
              { year: "2023-24", title: "Learned MERN Stack", description: "Deep dived into web development with React, Next.js, Node.js, and MongoDB." },
              { year: "2025", title: "Built Major Projects", description: "Created full-stack applications like E-commerce and Social Media platforms." },
              { year: "2025", title: "Advancing Skills", description: "Exploring Cloud Computing, DevOps, and Scalable Architecture." }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className={`mb-12 flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-5/12" />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass-card p-4 transition-transform hover:-translate-y-1 hover:border-primary/30">
                    <span className="font-display text-2xl font-bold text-primary">{item.year}</span>
                    <h4 className="mb-1 font-display text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
