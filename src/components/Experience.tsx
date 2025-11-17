import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Dumbways Fullstack Developer",
    company: "Internship",
    year: "2025",
    desc: "Developing fullstack web apps using React, TypeScript, Express, and PostgreSQL with AI integration. Built multiple modern web projects with clean architecture.",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Bangkit Cloud Computing",
    company: "MBKM",
    year: "2022",
    desc: "Worked on Cloud Computing using Google Cloud Platform. Implemented APIs, Docker, and CI/CD deployments for scalable cloud-native apps.",
    icon: <Rocket className="w-5 h-5 text-indigo-500" />,
  },
  {
    title: "HMIF Organization",
    company: "University",
    year: "2021",
    desc: "Active staff in Himpunan Mahasiswa Informatika, managing tech events and improving communication, leadership, and teamwork skills.",
    icon: <Briefcase className="w-5 h-5 text-emerald-500" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-(--bg-color) dark:bg-gray-900">
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white"
      >
        My <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </motion.h2>

      {/* Cards wrapper */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm">
              {exp.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {exp.year}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
