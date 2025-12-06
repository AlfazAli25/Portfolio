import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30, // 30 seconds for a full rotation
          ease: "linear",
        }}
        className="absolute -inset-[50%] opacity-30"
        style={{
          background: "radial-gradient(circle at center, hsla(var(--primary) / 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, hsla(var(--secondary) / 0.1) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
    </div>
  );
};

export default Background;
