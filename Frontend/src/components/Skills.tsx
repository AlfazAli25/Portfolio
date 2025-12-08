import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Expert In",
    skills: [
      { name: "React", level: 95, color: "hsl(var(--neon-cyan))" },
      { name: "Node.js", level: 90, color: "hsl(var(--neon-purple))" },
      { name: "Express", level: 90, color: "hsl(var(--neon-pink))" },
      { name: "MongoDB", level: 85, color: "hsl(var(--neon-cyan))" },
    ]
  },
  {
    title: "Intermediate",
    skills: [
      { name: "Next.js", level: 80, color: "hsl(var(--neon-purple))" },
      { name: "TypeScript", level: 85, color: "hsl(var(--neon-pink))" },
      { name: "Redux", level: 75, color: "hsl(var(--neon-cyan))" },
      { name: "Tailwind CSS", level: 90, color: "hsl(var(--neon-purple))" },
    ]
  },
  {
    title: "Learning",
    skills: [
      { name: "Docker", level: 60, color: "hsl(var(--neon-pink))" },
      { name: "AWS", level: 50, color: "hsl(var(--neon-cyan))" },
      { name: "DevOps", level: 55, color: "hsl(var(--neon-purple))" },
      { name: "Three.js", level: 70, color: "hsl(var(--neon-pink))" },
    ]
  }
];

const technologies = [
  "C++", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "MongoDB", "MySQL", "Tailwind CSS", "Three.js", "Framer Motion", "EJS",
  "Git", "GitHub", "Postman", "VS Code", "GitHub Copilot", "Computer Networks",
  "DBMS"
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skill Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <div key={category.title}>
                <motion.h3
                  className="mb-6 font-display text-xl font-semibold text-foreground underline decoration-primary/50 underline-offset-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-body text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-display text-sm text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                            boxShadow: `0 0 10px ${skill.color}40`,
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology tags & Stats */}
          <div>
            <motion.h3
              className="mb-8 font-display text-xl font-semibold text-foreground"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tech Stack & Tools
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="cursor-default rounded-full border border-border bg-card/50 px-4 py-2 font-body text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -5, borderColor: "hsl(var(--primary))" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Experience cards */}
            <motion.div
              className="mt-12 grid gap-6 sm:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="glass-card p-6 text-center hover:border-primary/50 transition-colors">
                <div className="mb-2 font-display text-4xl font-bold text-primary">100+</div>
                <div className="font-body text-sm text-muted-foreground">
                  DSA Problems Solved
                </div>
              </div>
              <div className="glass-card p-6 text-center hover:border-secondary/50 transition-colors">
                <div className="mb-2 font-display text-4xl font-bold text-secondary">15+</div>
                <div className="font-body text-sm text-muted-foreground">
                  Technologies Mastered
                </div>
              </div>
              <div className="glass-card p-6 text-center hover:border-neon-pink/50 transition-colors sm:col-span-2">
                <div className="mb-2 font-display text-4xl font-bold text-[#ff0080]">2+</div>
                <div className="font-body text-sm text-muted-foreground">
                  Years of Coding Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
