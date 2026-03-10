import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative section-padding pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="text-center relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-primary font-heading text-sm mb-4 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-gradient">Jayampu Manasa</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Computer Science Student & Software Developer
        </motion.p>
        <motion.p
          className="text-muted-foreground max-w-lg mx-auto mb-10 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Crafting intelligent applications with deep learning, modern web technologies, and a passion for clean code.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-heading text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
