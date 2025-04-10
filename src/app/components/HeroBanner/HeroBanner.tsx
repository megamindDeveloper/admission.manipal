"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import websitebg1 from "../../../../public/images/BannerImage1.jpg";
import websitebg2 from "../../../../public/images/BannerImage2.jpg";
import websitebg3 from "../../../../public/images/BannerImage3.jpg";
import websitebg4 from "../../../../public/images/BannerImage4.jpg";
import logo from "../../../../public/images/logo/manipalHead.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface FormData {
  studentName: string;
  parentEmail: string;
  parentPhone: string;
  class: string;
  location: string;
}

const HeroBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);
    if (result.result === "success") {
      toast.success("Form submitted successfully!");
      reset();
    } else {
      toast.error("Error submitting form.");
    }
  };

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 text-white text-sm py-2 px-4 overflow-hidden whitespace-nowrap">
        <div className="relative flex space-x-10 animate-marquee">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <p key={i}>
                Contact Admission Managers Phone:
                <Link href="tel:+919538820398" passHref legacyBehavior>
                  <a className="cursor-pointer hover:text-gray-200">+91 9538820398 / </a>
                </Link>
                <Link href="tel:+919902875329" passHref legacyBehavior>
                  <a className="cursor-pointer hover:text-gray-200 mr-1">+91 9902875329</a>
                </Link>
                | Office Telephone:
                <Link href="tel:+918244252305" passHref legacyBehavior>
                  <a className="cursor-pointer hover:text-gray-200 mx-1"> 0824-4252305</a>
                </Link>{" "}
                |
                <Link href="mailto:info@manipalschool.edu.in" passHref legacyBehavior>
                  <a className="cursor-pointer hover:text-gray-200 mx-1">info@manipalschool.edu.in</a>
                </Link>
              </p>
            ))}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Manipal School Logo" className="h-12" />
          </div>
          <div
            onClick={() => window.open("https://maps.app.goo.gl/1VF8MxuicvabAJoT9", "_blank")}
            className="md:flex hidden items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600"
          >
            <IconMapPin size={20} />
            <span>Ward 55, Behind Manipal College of Dental Sciences, Attavar, Mangalore</span>
          </div>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0 ">
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    modules={[Autoplay, Pagination]}
    autoplay={{ 
      delay: 3000, 
      disableOnInteraction: false 
    }}
    pagination={{ 
      clickable: true,
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <img 
        src={websitebg1.src} 
        alt="Banner 1" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={websitebg2.src} 
        alt="Banner 2" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={websitebg2.src} 
        alt="Banner 3" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={websitebg4.src} 
        alt="Banner 4" 
      />
    </SwiperSlide>
  </Swiper>

  {/* Inline CSS for centering pagination dots */}
  <style jsx>{`
    .swiper-pagination {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    .swiper-pagination-bullet {
      background: white;
      opacity: 0.8;
      width: 10px;
      height: 10px;
      margin: 0 5px;
    }
    .swiper-pagination-bullet-active {
      background: #007bff;
      opacity: 1;
    }
  `}</style>
</div>
        {/* Form Container - Centered */}
        <div className="relative container mx-auto mt-[30rem] md:mt-16 px-4 md:min-h-[90vh] flex justify-center md:justify-end items-start z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-[-1rem] right-[-1rem] w-20 h-20 md:top-[-2rem] md:right-[-1rem] lg:top-[-3rem] lg:right-[-2rem] lg:w-36 lg:h-36 bg-green-400 rounded-bl-full rounded-tl-full rounded-br-full opacity-100"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-[-20] left-[-2rem] md:left-[50%] w-24 h-12 md:w-32 md:h-16 xl:w-36 xl:h-18 xl:bottom-[13rem] xl:left-[57%] bg-[#FEA3CA] rotate-220 rounded-t-full opacity-100"
          ></motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="formsec bg-white rounded-lg shadow-lg px-4 md:px-6 lg:px-8 py-6 md:py-8 xl:py-16 w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] my-0 relative"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="formsec2 text-2xl md:text-3xl lg:text-[1.5rem] xl:text-[2.5rem] leading-tight pb-4 lg:pb-5 xl:pb-10 font-bold mb-4 xl:mb-6 text-gray-800 text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Ready to Nurture a Future Innovator
            </motion.h2>

            <form onSubmit={handleSubmit(onSubmit)} className="formsec4 space-y-6 md:space-y-6">
              {["studentName", "parentEmail", "parentPhone", "class", "location"].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <input
                    type={field === "parentEmail" ? "email" : field === "parentPhone" ? "tel" : "text"}
                    placeholder={field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    {...register(field as keyof FormData, {
                      required: `${field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required`,
                    })}
                    className="formsec3 w-full border-b border-black/[20%] focus:outline-none text-base md:text-lg xl:text-xl"
                  />
                  {errors[field as keyof FormData] && (
                    <p className="text-red-500 text-xs md:text-sm">{errors[field as keyof FormData]?.message}</p>
                  )}
                </motion.div>
              ))}

              <div className="justify-center flex">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FB7824] cursor-pointer text-white py-2 px-4 md:px-6 rounded-3xl font-bold text-xl md:text-2xl flex items-center justify-center"
                >
                  {loading ? <>Submitting...</> : "Submit"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HeroBanner;