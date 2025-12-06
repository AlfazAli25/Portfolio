import { motion } from "framer-motion";
import { ArrowLeft, Database, Server, Code, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const BackendProject = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <motion.div
        className="max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, delay: 0.2 }}
        >
          <Server className="h-12 w-12 text-primary" />
        </motion.div>

        <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">
          Backend <span className="gradient-text">Masterpiece</span>
        </h1>

        <p className="mb-8 font-body text-lg text-muted-foreground">
          This project is a backend-intensive application focused on secure authentication,
          robust API design, and database management. While there isn't a visual interface
          to demo, the code speaks for itself!
        </p>

        <div className="mb-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="glass-card p-4">
            <Database className="mb-2 h-6 w-6 text-secondary" />
            <h3 className="mb-1 font-display font-semibold">MongoDB Database</h3>
            <p className="text-xs text-muted-foreground">Complex schemas & efficiency</p>
          </div>
          <div className="glass-card p-4">
            <Code className="mb-2 h-6 w-6 text-secondary" />
            <h3 className="mb-1 font-display font-semibold">Clean Architecture</h3>
            <p className="text-xs text-muted-foreground">MVC pattern & separation</p>
          </div>
          <div className="glass-card p-4">
            <Terminal className="mb-2 h-6 w-6 text-secondary" />
            <h3 className="mb-1 font-display font-semibold">RESTful APIs</h3>
            <p className="text-xs text-muted-foreground">Secure endpoints & auth</p>
          </div>
          <div className="glass-card p-4">
            <Server className="mb-2 h-6 w-6 text-secondary" />
            <h3 className="mb-1 font-display font-semibold">Node.js Power</h3>
            <p className="text-xs text-muted-foreground">Scalable server logic</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-body text-sm transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <a
            href="https://github.com/AlfazAli25/Basic_Social_Media_WebApplication"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
          >
            View Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default BackendProject;
