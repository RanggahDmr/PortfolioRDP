import { motion } from "framer-motion";
import { Download } from "lucide-react";
import car1 from "../assets/car1.png"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 bg-(--bg-color) overflow-hidden"
       style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Kiri - Deskripsi */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center md:text-left pl-50"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Hi, I’m <span className="text-blue-600">Rangga</span> 
        </h1>
        <p className="text-gray-600 text-lg md:max-w-md">
          A passionate <span className="font-semibold">Fullstack Developer</span> crafting modern,
          responsive web applications with React, TypeScript, and Express.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/Rangga-CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border rounded-full text-blue-600 hover:bg-blue-50 transition"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Kanan - Foto dengan blob SVG */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative pr-50"
      >
        <svg
          className="w-[320px] md:w-[420px]"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="#155dfc"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="#155dfc"
            />
            {/*  Gambar diambil dari import */}
           <image
            href={car1}
            x="70"
            y="110"
            width="280"
            height="330"
            style={{ transform: "translateY(25px)" }}
            preserveAspectRatio="xMidYMid slice"
            />

          </g>
        </svg>
      </motion.div>
    </section>
  );
}
