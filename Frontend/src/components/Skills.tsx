import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Ecosystem",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Three.js"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "JWT Auth"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "AWS", "Postman", "VS Code", "Vercel"]
  },
  {
    title: "Computer Science",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Computer Networks", "OS"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            My Skills
          </span>
          <h2 className="section-title mb-4">
            <span className="gradient-text">Technologies</span> I Work With
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit of modern technologies for building
            exceptional digital products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 hover:border-primary/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="mb-6 font-display text-xl font-bold text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="cursor-default rounded-md bg-secondary/10 px-3 py-1.5 font-body text-sm text-secondary-foreground transition-all hover:bg-secondary hover:text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 text-center hover:border-primary/50 transition-colors">
            <div className="mb-2 font-display text-4xl font-bold text-primary">100+</div>
            <div className="font-body text-sm text-muted-foreground">
              DSA Problems Solved
            </div>
          </div>
          <div className="glass-card p-8 text-center hover:border-secondary/50 transition-colors">
            <div className="mb-2 font-display text-4xl font-bold text-secondary">15+</div>
            <div className="font-body text-sm text-muted-foreground">
              Technologies Mastered
            </div>
          </div>
          <div className="glass-card p-8 text-center hover:border-neon-pink/50 transition-colors">
            <div className="mb-2 font-display text-4xl font-bold text-[#ff0080]">3+</div>
            <div className="font-body text-sm text-muted-foreground">
              Years of Coding Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
