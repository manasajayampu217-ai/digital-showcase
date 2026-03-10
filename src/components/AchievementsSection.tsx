import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  "Solved 300+ problems on coding platforms focusing on algorithms and data structures.",
  "Contributed to open-source projects and collaborated through code reviews and pull requests.",
  "Finalist in multiple university hackathons for building AI-based applications.",
];

const certifications = ["Core Java", "C Programming Language", "AWS"];

const AchievementsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
              <span className="text-primary"># </span>Achievements
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Trophy className="text-primary shrink-0 mt-1" size={16} />
                  <span className="text-sm text-muted-foreground font-body">{a}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
              <span className="text-primary"># </span>Certifications
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <div className="flex flex-wrap gap-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border glow-box-hover transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Award className="text-primary" size={16} />
                  <span className="text-sm font-heading font-medium text-foreground">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
