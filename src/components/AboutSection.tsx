import { motion } from "framer-motion";
import { Code2, Brain, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "300+ Problems", desc: "Solved on coding platforms" },
  { icon: Brain, label: "Deep Learning", desc: "CNN & AI applications" },
  { icon: Globe, label: "Full Stack", desc: "Frontend & backend development" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
            <span className="text-primary"># </span>About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              I'm a B.Tech Computer Science student at Avanthi Institute of Engineering and Technology, passionate about building intelligent software solutions. My journey in tech spans from deep learning and medical image analysis to full-stack web development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              With a strong foundation in data structures, algorithms, and cloud technologies, I enjoy tackling complex problems and turning ideas into impactful applications. I've contributed to open-source projects and participated in multiple hackathons, building AI-powered solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              I'm driven by curiosity and a desire to leverage technology for meaningful impact—whether it's enabling multilingual communication or assisting in early disease detection through AI.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border glow-box-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
