"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function Skill() {
  const skills = [
    { name: "HTML5", image: "https://img.icons8.com/?size=100&id=owWiEaAJmGKK&format=png&color=000000" },
    { name: "CSS3", image: "https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000" },
    { name: "JavaScript", image: "https://img.icons8.com/?size=100&id=YX2eDFImIaWh&format=png&color=000000" },
    { name: "TypeScript", image: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
    { name: "React", image: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
    { name: "NextJS", image: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
    { name: "TailwindCSS", image: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" },
    { name: "Node.js", image: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
    { name: "Express", image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
    { name: "Prisma", image: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000" },
    { name: "Supabase", image: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000" },
    { name: "PostgreSQL", image: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000" },
  ];

  return (
    <section id="skills" className="py-16 bg-(--bg-color)">
     
       <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Tech & Tools I Use
        </h2>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 md:px-10 lg:px-12 overflow-hidden rounded-xl p-4">
         
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white dark:from-gray-900 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white dark:from-gray-900 to-transparent z-20" />

    

     
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          centeredSlides={false}
          loop={true}
          slidesPerView="auto"
          spaceBetween={30}
          grabCursor={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="!overflow-visible"
        >
          {skills.concat(skills).map((skill, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="flex flex-col items-center justify-center w-24 sm:w-28 md:w-32">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
