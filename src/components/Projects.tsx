import { motion } from "framer-motion";
import { Github, Gamepad2 } from "lucide-react";
import otomodaki from "../assets/projects/otomodaki.png";
import cleveresu from "../assets/projects/cleveresu.png";
import beyondtrip from "../assets/projects/beyondtrip.png"
import tuduku from "../assets/projects/tuduku.png"

import circleapp from "../assets/projects/circleapp.png"


const projects = [
  {
    title: "Cleveresu",
    desc: "CV builder with live preview and PDF export.",
    image: cleveresu,
    github: "https://github.com/RanggahDmr/cleveresu-fe",
    demo: "https://cleveresu.vercel.app/",
  },
  {
    title: "Otomodaki",
    desc: "Telegram bot that helps users find nearby car workshops.",
    image: otomodaki,
    github: "https://github.com/RanggahDmr/otomodaki",
    demo: "https://otomodaki-aswv.vercel.app/",
  },
  {
    title: "BeyondTrip",
    desc: "AI travel route generator, find your destination and make your trip .",
    image: beyondtrip,
    github: "https://github.com/RanggahDmr/BeyondTrip-FE",
    demo: "https://beyondtrip.vercel.app/",
  },
  {
    title: "CircleApp",
    desc: "AI travel route generator powered by Supabase and Gemini.",
    image: circleapp,
    github: "https://github.com/RanggahDmr/CircleApp-FE",
    demo: "https://beyondtrip.vercel.app/",
  },
  {
    title: "TuduKu",
    desc : "A task-management app that organizes tasks by team and personal categories, with an AI generator to help users create daily activities effortlessly.",
    image : tuduku,
    demo: "https://tuduku.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-(--bg-color)">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        My Projects
      </h2>

      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12"> 

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
            >
              {/*  Gambar responsif dengan tinggi dinamis */}
              <div className="overflow-hidden h-48 sm:h-56 md:h-60 bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{p.desc}</p>
                </div>

                  
                <div className="flex gap-4 mt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    title="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    title="Live Demo"
                  >
                    <Gamepad2 className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
