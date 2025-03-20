"use client"; // Required for using hooks in Next.js 13+ App Router

import Image from "next/image";
import { useForm } from "react-hook-form";
import websitebg from "../../../../public/images/Manipal School - Website Cover 1.png";
import logo from "../../../../public/images/logo/manipalHead.svg"
interface FormData {
  studentName: string;
  parentEmail: string;
  parentPhone: string;
  class: string;
  location: string;
}

const HeroBanner = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
          <Image src={websitebg} alt="Students" className="w-full h-full object-cover" />
        </div>

        {/* Form Container - Centered */}

        <div className="relative container mx-auto px-4 py-12 min-h-[80vh] flex justify-end  items-start">
          {/* Form Card */}
          <div className="bg-white rounded-lg  shadow-lg px-8 py-16 w-full max-w-[40vw] xl:max-w-[30vw]  xl:my-auto my-0 relative ">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-50"></div>

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
                  {...register("studentName")}
                  className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Parent Email"
                  {...register("parentEmail")}
                  className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Parent Phone Number"
                  {...register("parentPhone")}
                  className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Class Name"
                  {...register("class")}
                  className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Located in"
                  {...register("location")}
                  className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
                />
              </div>
              <div className="justify-center flex">
                <button
                  type="submit"
                  className="w-full bg-[#FB7824] text-white py-2 mt-8 px-6 rounded-3xl font-bold text-2xl transition-colors duration-200 max-w-[10vw] "
                >
                  Submit
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
