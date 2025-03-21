"use client"; // Required for using hooks in Next.js 13+ App Router

import Image from "next/image";
import { useForm } from "react-hook-form";
import websitebg1 from "../../../../public/images/Manipal1.png";
import websitebg2 from "../../../../public/images/Manipal1.png";
import websitebg3 from "../../../../public/images/Manipal1.png";
import logo from "../../../../public/images/logo/manipalHead.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-hot-toast"; // Import toast
import { useState } from "react";

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
      reset(); // Clear the form fields after submission
    } else {
      toast.error("Error submitting form.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 text-white text-sm py-2 px-4">
        <div className="container mx-auto">
          Contact Ms. XYZ Sample Name Phone: +91 9538820398 | Office Telephone: +91 824 4252305 / 4252307 feedback@manipal.edu
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Manipal School Logo" className="h-12" />
          </div>
          <div className="text-right text-sm text-gray-600">
            Ward 55, Behind Manipal College of Dental Sciences, Attavar,
            <br />
            Mangalore DK District Karnataka, India - 575 001
          </div>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Carousel autoPlay interval={5000} transitionTime={1000} infiniteLoop showThumbs={false} showStatus={false}>
            <div>
              <Image src={websitebg1} alt="Students 1" className="w-full h-[89vh] object-cover" />
            </div>
            <div>
              <Image src={websitebg2} alt="Students 2" className="w-full h-[89vh] object-cover" />
            </div>
            <div>
              <Image src={websitebg3} alt="Students 3" className="w-full h-[89vh] object-cover" />
            </div>
          </Carousel>
        </div>

        {/* Form Container - Centered */}

        <div className="relative container mx-auto px-4 min-h-[80vh] flex justify-end  items-start">
          {/* Form Card */}
          <div className="absolute top-[-3rem] right-[-2rem] w-36 h-36 bg-green-400 rounded-bl-full rounded-tl-full rounded-br-full rotate-"></div>
          <div className="absolute bottom-[8rem] right-[34%] w-36 h-18 bg-pink-400 rotate-220 rounded-t-full opacity-50"></div>

          <div className="bg-white rounded-lg  shadow-lg px-8 py-16 w-full max-w-[40vw] xl:max-w-[30vw]  my-0 relative ">

            <h2
              className="text-3xl xl:text-4xl font-bold mb-6 text-gray-800 text-center pb-10"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Ready to Nurture a Future Innovator
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Student Name"
                  {...register("studentName", { required: "Student Name is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-xl"
                />
                {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Parent Email"
                  {...register("parentEmail", { required: "Email is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-xl"
                />
                {errors.parentEmail && <p className="text-red-500 text-sm">{errors.parentEmail.message}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Parent Phone Number"
                  {...register("parentPhone", { required: "Phone number is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-xl"
                />
                {errors.parentPhone && <p className="text-red-500 text-sm">{errors.parentPhone.message}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Class Name"
                  {...register("class", { required: "Class is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-xl"
                />
                {errors.class && <p className="text-red-500 text-sm">{errors.class.message}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Located in"
                  {...register("location", { required: "Location is required" })}
                  className="w-full border-b border-black/[20%] focus:outline-none text-xl"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
              </div>

              <div className="justify-center flex">
                <button
                  type="submit"
                  className="bg-[#FB7824] cursor-pointer text-white py-2 px-6 rounded-3xl font-bold text-2xl flex items-center justify-center"
                >
                  {loading ? <>Submitting...</> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroBanner;
