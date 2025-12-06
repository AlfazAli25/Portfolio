import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alfazali499@gmail.com",
    href: "mailto:alfazali499@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "8509658357",
    href: "tel:8509658357",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setIsSuccess(true);

      toast({
        title: "Message sent!",
        description: result.message || "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form after success animation
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-display text-sm uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
              Contact Information
            </h3>
            <p className="mb-8 font-body text-muted-foreground">
              Feel free to reach out through any of these channels. I'm always open
              to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-body text-foreground">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex min-h-[400px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, delay: 0.2 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                    >
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </motion.div>
                    <h3 className="mb-2 font-display text-2xl font-semibold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground"
                        >
                          Your Name
                        </label>
                        <input
                          {...register("name")}
                          id="name"
                          type="text"
                          placeholder="e.g. Aman Ali"
                          className={`w-full rounded-lg border bg-background px-4 py-3 font-body text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? "border-destructive" : "border-border"
                            }`}
                        />
                        {errors.name && (
                          <p className="mt-1 font-body text-xs text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground"
                        >
                          Your Email
                        </label>
                        <input
                          {...register("email")}
                          id="email"
                          type="email"
                          placeholder="e.g. aman@example.com"
                          className={`w-full rounded-lg border bg-background px-4 py-3 font-body text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-destructive" : "border-border"
                            }`}
                        />
                        {errors.email && (
                          <p className="mt-1 font-body text-xs text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Subject
                      </label>
                      <input
                        {...register("subject")}
                        id="subject"
                        type="text"
                        placeholder="Project Inquiry"
                        className={`w-full rounded-lg border bg-background px-4 py-3 font-body text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.subject ? "border-destructive" : "border-border"
                          }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 font-body text-xs text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        className={`w-full resize-none rounded-lg border bg-background px-4 py-3 font-body text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.message ? "border-destructive" : "border-border"
                          }`}
                      />
                      {errors.message && (
                        <p className="mt-1 font-body text-xs text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gradient flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
