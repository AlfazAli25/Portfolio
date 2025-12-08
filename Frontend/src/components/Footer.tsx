import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/AlfazAli25", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/alfaz-ali-5a0562289/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/_alfazali_/", label: "Instagram" },
  { icon: Mail, href: "mailto:alfazali2002@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold tracking-wider">
              <span className="gradient-text">AA</span>
              <span className="text-foreground">.</span>
            </a>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Building the future, one pixel at a time.
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 font-body text-sm text-muted-foreground">
            <span>© {currentYear} Alfaz Ali. Made with</span>
            <Heart className="h-4 w-4 text-destructive" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
