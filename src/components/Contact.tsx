import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-(--bg-color) text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8"
      >
        Get In Touch
      </motion.h2>
      <div className="flex justify-center gap-6">
        <a href="mailto:rangga@example.com" className="hover:text-blue-500">
          <Mail />
        </a>
        <a href="https://github.com/rangga" target="_blank" className="hover:text-blue-500">
          <Github />
        </a>
        <a href="https://linkedin.com/in/rangga" target="_blank" className="hover:text-blue-500">
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
