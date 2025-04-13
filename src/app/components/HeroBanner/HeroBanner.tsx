"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import websitebg1 from "../../../../public/images/BannerImage1.jpg";
import websitebg2 from "../../../../public/images/BannerImage2.jpg";
import websitebg3 from "../../../../public/images/BannerImage3.jpg";
import websitebg4 from "../../../../public/images/BannerImage4.jpg";
import logo from "../../../../public/images/logo/manipalHead.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
    try {
      setLoading(true);
      const response = await fetch("https://admission-manipal.onrender.com/api/submit-form/", {
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
        reset(); // Clear the form fields after submission
      } else {
        toast.error("Error submitting form.");
      }
    } catch (error) {
      console.log(error);
      
    }
    finally{
      setLoading(false);
    }
   
  };

  // Reference for scroll detection
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 text-white text-sm py-4 px-4 overflow-hidden whitespace-nowrap">
        <div className="relative flex space-x-10 animate-marquee">
          {/* Repeated contact info */}
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
        <div className=" mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Manipal School Logo" className="h-12" />
          </div>
          <div
            onClick={() => window.open("https://maps.app.goo.gl/1VF8MxuicvabAJoT9", "_blank")}
            className="md:flex hidden items-center  gap-2 cursor-pointer text-gray-600 hover:text-[#FB7824]"
          >
            <IconMapPin size={20} />
            <span>Behind KMC Hospital, Attavar, Mangalore</span>
          </div>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <main className="relative min-h-screen flex  items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {/* <Swiper
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="transition-all duration-700 ease-in-out w-full h-full"
            spaceBetween={10}
            centeredSlides={false}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            on={{
              init: (swiper) => {
                const bullets = document.querySelectorAll(".swiper-pagination-bullet");
                bullets.forEach((bullet, index) => {
                  bullet.addEventListener("click", () => {
                    swiper.slideToLoop(index);
                  });
                });
              },
            }}
          > */}
          <Swiper
            className={`transition-all duration-700 ease-in-out w-full h-full`}
            spaceBetween={10}
            centeredSlides={false}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Image
                src={websitebg1}
                alt="Banner "
                className="h-[50vh] md:h-[89vh] md:object-cover object-cover sm:object-[30%_center] object-[10%_center]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={websitebg2}
                alt="Students 2"
                className="w-full h-[50vh] md:h-[89vh] md:object-cover object-cover scale-x-[-1] sm:object-[30%_center] object-[85%_center]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={websitebg3}
                alt="Students 3"
                className="w-full h-[50vh] md:h-[89vh] md:object-cover object-cover scale-x-[-1] sm:object-[30%_center] object-[90%_center]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={websitebg4}
                alt="Students 3"
                className="w-full h-[50vh] md:h-[89vh] md:object-cover object-cover scale-x-[-1] sm:object-[30%_center] object-[80%_center]"
              />
            </SwiperSlide>
            <div className="swiper-pagination" />
          </Swiper>
        </div>

        {/* Form Container - Centered */}
        <div className="relative w-[100vw] mx-auto mt-[30rem] md:mt-16 px-4 md:min-h-[90vh] flex justify-center md:justify-end items-start z-10">
          {/* Decorative Elements with Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-[-1rem] right-[-1rem] w-20 h-20 md:top-[-2rem] md:right-[-1rem] lg2:top-[-3rem] lg2:right-[-2rem] lg2:w-36 lg2:h-36 bg-green-400 rounded-bl-full rounded-tl-full rounded-br-full opacity-100"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-[-20] left-[-2rem] md:top-[440] md:left-[210] lg2:left-[65%] !lg2:bottom-[10%] w-24 h-12 md:w-32 md:h-16 xl:w-36 xl:h-18 xl:bottom-[13rem] xl:left-[57%] bg-[#FEA3CA] rotate-220 rounded-t-full opacity-100"
          ></motion.div>

          {/* Form Card with Scroll-Triggered Animation */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg2 shadow-lg2 px-4 md:px-6 lg2:px-8 py-6  w-full 
                       max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg2:max-w-[30vw] xl:max-w-[30vw] 
                       my-0 relative"
          >
            {/* Animated Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg2:text-[1.8rem] xl:text-[3.5rem]  leading-tight 
                         font-bold  text-[#FB7824] text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Admissions Open
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg2:text-[1.5rem] xl:text-[2.5rem] leading-tight 
                         pb-4 lg2:pb-5  font-bold text-gray-800 text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Now For 2025
            </motion.h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
              {/* Student Name */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <input
                  type="text"
                  placeholder="Student Name"
                  {...register("studentName", { required: "Student Name is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-base md:text-lg2 xl:text-xl"
                />
                {errors.studentName && <p className="text-red-500 text-xs md:text-sm">{errors.studentName.message}</p>}
              </motion.div>

              {/* Parent Email */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <input
                  type="email"
                  placeholder="Parent Email"
                  {...register("parentEmail", { required: "Parent Email is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-base md:text-lg2 xl:text-xl"
                />
                {errors.parentEmail && <p className="text-red-500 text-xs md:text-sm">{errors.parentEmail.message}</p>}
              </motion.div>

              {/* Parent Phone */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <input
                  type="tel"
                  placeholder="Parent Phone"
                  {...register("parentPhone", { required: "Parent Phone is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-base md:text-lg2 xl:text-xl"
                />
                {errors.parentPhone && <p className="text-red-500 text-xs md:text-sm">{errors.parentPhone.message}</p>}
              </motion.div>

              {/* Class Dropdown */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <select
                  {...register("class", { required: "Class is required" })}
                  defaultValue=""
                  className="w-full border-b border-black/[20%] focus:outline-none bg-transparent text-black/70 placeholder:text-black/70 text-base md:text-lg2 xl:text-xl appearance-none"
                >
                  <option value="" disabled className="!text-gray-400 text-base md:text-lg2 xl:text-xl placeholder:text-white">
                    Class Being Applied For
                  </option>
                  <option className="text-black" value="Nursery">
                    Nursery
                  </option>
                  <option className="text-black" value="PP I">
                    PP I
                  </option>
                  <option className="text-black" value="PP II">
                    PP II
                  </option>
                  <option className="text-black" value="I">
                    I
                  </option>
                  <option className="text-black" value="II">
                    II
                  </option>
                  <option className="text-black" value="III">
                    III
                  </option>
                  <option className="text-black" value="IV">
                    IV
                  </option>
                  <option className="text-black" value="V">
                    V
                  </option>
                  <option className="text-black" value="VI">
                    VI
                  </option>
                  <option className="text-black" value="VII">
                    VII
                  </option>
                  <option className="text-black" value="VIII">
                    VIII
                  </option>
                  <option className="text-black" value="IX">
                    IX
                  </option>
                  <option className="text-black" value="X">
                    X
                  </option>
                  <option className="text-black" value="XI">
                    XI
                  </option>
                  <option className="text-black" value="XII">
                    XII
                  </option>
                
                </select>
                {errors.class && <p className="text-red-500 text-xs md:text-sm">{errors.class.message}</p>}
              </motion.div>

              {/* Location */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <input
                  type="text"
                  placeholder="Location"
                  {...register("location", { required: "Location is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-base md:text-lg2 xl:text-xl"
                />
                {errors.location && <p className="text-red-500 text-xs md:text-sm">{errors.location.message}</p>}
              </motion.div>

              {/* Submit Button */}
              <div className="justify-center flex">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FB7824] cursor-pointer text-white py-2 px-4 md:px-6 rounded-3xl 
     font-bold text-xl lg2:text-xl xl:text-2xl flex items-center justify-center min-w-[150px]"
                >
                  {loading ? <ClipLoader size={24} color="#fff" /> : "Apply Now"}
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
