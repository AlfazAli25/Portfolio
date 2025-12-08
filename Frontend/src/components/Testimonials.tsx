import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    quote: "Alfaz transformed our vague ideas into a fully functional and beautiful product. His attention to detail is unmatched.",
    image: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    quote: "Exceptional technical skills and great communication. Delivered the project ahead of schedule!",
    image: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Mike Johnson",
    role: "Tech Lead",
    quote: "One of the most dedicated developers I've worked with. The code quality was top-notch.",
    image: "https://avatar.vercel.sh/mike",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="section-title mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass-card relative p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute right-8 top-8 h-8 w-8 text-primary/20" />

              <p className="mb-6 font-body text-muted-foreground italic relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/30">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
