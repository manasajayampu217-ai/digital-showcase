import { motion } from "framer-motion";
import { Languages, Stethoscope, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Indian Translator Application",
    icon: Languages,
    description:
      "A web application that translates text between multiple Indian languages with voice input support and a user-friendly interface.",
    tech: ["TypeScript", "Node.js", "REST API"],
    features: [
      "Voice input for hands-free translation",
      "Multi-language support across Indian languages",
      "Seamless frontend-backend integration",
    ],
  },
  {
    title: "Multi Disease Pathology Classification",
    icon: Stethoscope,
    description:
      "A deep learning model using Convolutional Neural Networks to classify multiple chest diseases from X-ray images for early detection.",
    tech: ["Python", "CNN", "Deep Learning"],
    features: [
      "Automated medical image analysis",
      "Multi-class disease classification",
      "Early detection assistance system",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
            <span className="text-primary"># </span>Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group p-6 rounded-xl bg-card border border-border glow-box-hover transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon className="text-primary" size={24} />
                </div>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  size={20}
                />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 font-body">
                {project.description}
              </p>
              <ul className="mb-5 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-2 font-body">
                    <span className="text-primary mt-0.5">▹</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-heading font-medium"
                  >
                    {t}
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

export default ProjectsSection;
