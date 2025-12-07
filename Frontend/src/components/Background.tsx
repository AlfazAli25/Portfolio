import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Background = () => {
  const [stars, setStars] = useState("");
  const [glowingStars, setGlowingStars] = useState("");

  useEffect(() => {
    const generateStars = (count: number) => {
      let shadow = "";
      for (let i = 0; i < count; i++) {
        shadow += `${Math.random() * 100}vw ${Math.random() * 100}vh ${Math.random() > 0.5 ? '#fff' : '#ffffff80'}, `;
      }
      return shadow.slice(0, -2);
    };

    const generateGlowingStars = (count: number) => {
      let shadow = "";
      for (let i = 0; i < count; i++) {
        shadow += `${Math.random() * 100}vw ${Math.random() * 100}vh 2px #fff, `;
      }
      return shadow.slice(0, -2);
    };

    setStars(generateStars(200));
    setGlowingStars(generateGlowingStars(50));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014] text-white pointer-events-none">
      {/* Stars Layer */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: stars,
          width: '1px',
          height: '1px',
          background: 'transparent',
          opacity: 0.6
        }}
      />
      <div
        className="absolute inset-0 animate-pulse-glow"
        style={{
          boxShadow: glowingStars,
          width: '2px',
          height: '2px',
          background: 'transparent',
          opacity: 0.8
        }}
      />

      {/* Main Galaxy/Nebula Gradient */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
        }}
        className="absolute -inset-[50%] opacity-40 blur-[100px]"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, #030014 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, hsla(var(--neon-purple) / 0.5) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, hsla(var(--neon-cyan) / 0.5) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, hsla(var(--neon-pink) / 0.5) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, hsla(var(--neon-purple) / 0.5) 0%, transparent 50%)
          `
        }}
      />

      {/* Secondary Moving Nebula Layer for depth */}
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          rotate: { duration: 180, repeat: Infinity, ease: "linear" },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
        }}
        className="absolute -inset-[20%] opacity-30 blur-[80px]"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsla(var(--neon-cyan) / 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 50%, hsla(var(--neon-pink) / 0.4) 0%, transparent 40%)
          `
        }}
      />

      {/* Subtle overlay to blend it all */}
      <div className="absolute inset-0 bg-[#030014]/20 mix-blend-overlay" />
    </div>
  );
};

export default Background;
