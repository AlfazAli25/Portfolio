import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import ParticleField from "./ParticleField";
import ThreeDPhoto from "./ThreeDPhoto";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <ParticleField />

      {/* Hero Glow Effect */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] filter" />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-background/20 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-display text-xs uppercase tracking-widest text-primary">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-foreground">I'm </span>
              <span className="gradient-text">Alfaz Ali</span>
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2 className="font-body text-xl text-muted-foreground md:text-2xl lg:text-3xl">
                <span className="text-foreground">MERN Stack Developer</span>
                <span className="mx-3 text-primary hidden lg:inline">•</span>
                <span className="block lg:inline">Software Developer</span>
              </h2>
            </motion.div>

            <motion.p
              className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground lg:mx-0"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              A passionate MERN Stack & Software Developer building responsive websites and user-friendly applications.
              I love turning ideas into reality through code and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-neon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6 lg:justify-start"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { icon: Github, href: "https://github.com/AlfazAli25", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/alfaz-ali-5a0562289/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/_alfazali_/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* 3D Image - Right Column */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ThreeDPhoto src="/profile/hero-image.png" alt="Alfaz Ali" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="font-display text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
