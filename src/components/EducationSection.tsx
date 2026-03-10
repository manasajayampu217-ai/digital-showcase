import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Avanthi Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science",
    location: "Nellore, India",
    detail: "CGPA: 7.5/10",
    coursework: "Data Structures & Algorithms, DBMS, Operating Systems",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    location: "",
    detail: "568 Marks",
    coursework: "",
  },
  {
    institution: "Oxford High School",
    degree: "SSC",
    location: "",
    detail: "10 CGPA",
    coursework: "",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
            <span className="text-primary"># </span>Education
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border glow-box-hover transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground font-body">{edu.institution}{edu.location && ` — ${edu.location}`}</p>
                <p className="text-sm text-primary font-heading font-medium mt-1">{edu.detail}</p>
                {edu.coursework && (
                  <p className="text-xs text-muted-foreground mt-2 font-body">
                    <span className="text-secondary-foreground">Coursework:</span> {edu.coursework}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
