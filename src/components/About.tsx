import { motion } from "framer-motion";
import profilePic from "../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 bg-(--bg-color)" //  hapus px di sini, biar padding diatur di dalam container
    >
      {/* Tambahkan container dengan max-w-6xl biar sejajar */}
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-between gap-30 px-6 md:px-12 lg:px-20">
        
        {/* Kiri - Foto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-500">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Kanan - Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
           <span className="text-blue-600!"> Ranggah </span> Damara
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I’m <span className="font-semibold ">Rangga</span>, a{" "}
            <span className="font-bold text-blue-600!">Fullstack Developer</span> with a
            passion for creating seamless web applications using modern tools
            like{" "}
            <span className="font-medium">
             <span className="text-blue-600!"> React, TypeScript, Express, Prisma,</span> and <span className="font-medium text-blue-600!"> PostgreSQL </span>
            </span>
            <br />
            <br />
            I love building products that not only work well but also deliver
            great user experiences. I’m always exploring new technologies and
            enjoy collaborating on meaningful projects that challenge me to
            grow.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:justify-start"
          >
            <a
              href="#skills"
              className="px-6 py-3 bg-blue-600 !text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              View My Skills
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
