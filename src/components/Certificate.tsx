"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import dicoding from "../assets/sertifikat/dicoding.png";
import dicoding1 from "../assets/sertifikat/dicoding1.png";
import dicoding2 from "../assets/sertifikat/dicoding2.png";
import dicoding3 from "../assets/sertifikat/dicoding3.png";
import dicoding4 from "../assets/sertifikat/dicoding4.png";
import dw from "../assets/sertifikat/sertifikatDw.png";
import organisasi from "../assets/sertifikat/sertifikat-organisasi.png";
import bangkit from "../assets/sertifikat/sertifikat bangkit.png";
import cept from "../assets/sertifikat/cept.jpg";

const certificates = [
  { title: "Fullstack Web Developer Bootcamp", platform: "Dumbways.id", image: dw },
  { title: "Cloud Computing Path", platform: "Bangkit Academy", image: bangkit },
  { title: "Learning core programming fundamentals for software development.", platform: "Dicoding", image: dicoding },
  { title: "Learning basic web programming", platform: "Dicoding", image: dicoding1 },
  { title: "Learning beginner-level backend development with Google Cloud", platform: "Dicoding", image: dicoding2 },
  { title: "Becoming a Google Cloud Engineer", platform: "Dicoding", image: dicoding3 },
  { title: "Learning the basics of JavaScript programming", platform: "Dicoding", image: dicoding4 },
  { title: "Staff of the BIRUS Organization", platform: "HMIF", image: organisasi },
  { title: "English Proficiency Test (CEPT)", platform: "Cilacs", image: cept },
];

export default function Certificate() {
  return (
    <section id="certificate" className="py-20 bg-(--bg-color)">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        My <span className="text-(--accent-color)">Certificates</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex flex-col bg-(--card-color) border border-(--border-color) rounded-2xl shadow-sm hover:shadow-md overflow-hidden h-[380px]"
              >
                <div className="shrink-0 h-[220px] bg-(--card-color)">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full  transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="grow flex flex-col justify-center p-5 text-center">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-(--muted-color) mt-1">{cert.platform}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
