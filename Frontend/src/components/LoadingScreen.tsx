import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            style={{ width: 120, height: 120 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-secondary/50"
            style={{ width: 104, height: 104 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner glow */}
          <motion.div
            className="flex items-center justify-center rounded-full bg-gradient-neon"
            style={{ width: 120, height: 120 }}
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(var(--neon-cyan) / 0.3)",
                "0 0 40px hsl(var(--neon-cyan) / 0.6)",
                "0 0 20px hsl(var(--neon-cyan) / 0.3)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.span
              className="font-display text-3xl font-bold text-primary-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AA
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Loading
          </span>
          <motion.span
            className="flex gap-1"
            initial="hidden"
            animate="visible"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1 w-1 rounded-full bg-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="h-0.5 w-48 overflow-hidden rounded-full bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-neon"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
