import { motion } from "framer-motion";
import { Code, Server, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["TypeScript", "Python", "C++", "Java"],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    skills: ["Node.js", "SQL"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Google Cloud"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Deep Learning (CNN)", "REST APIs"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
            <span className="text-primary"># </span>Skills
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-xl bg-card border border-border glow-box-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-4 text-foreground">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
