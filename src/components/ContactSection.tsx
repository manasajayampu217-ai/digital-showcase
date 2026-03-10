import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
            <span className="text-primary"># </span>Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground max-w-md mx-auto mb-8 font-body">
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>

          <motion.a
            href="mailto:manasajayampu217@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-card border border-border glow-box glow-box-hover transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="text-primary" size={22} />
            <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              manasajayampu217@gmail.com
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
