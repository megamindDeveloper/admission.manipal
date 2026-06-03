"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import type { LeafletMouseEvent, Map } from "leaflet";
import logo from "../../../../public/images/logo/manipalBottom.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";
const MAPBOX_STYLE_ID = "streets-v12";
const center: [number, number] = [12.856377057438442, 74.84633878650929];

interface FormData {
  studentName: string;
  parentEmail: string;
  parentPhone: string;
  classApplied: string;
  location: string;
}

const CounsellingForm = () => {
  const mapRef = useRef<Map | null>(null);
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    parentEmail: "",
    parentPhone: "",
    classApplied: "",
    location: "",
  });
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>(center);
  const [popupContent, setPopupContent] = useState("Selected Location");

  useEffect(() => {
    const handleMapClickEvent = (e: LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      setSelectedLocation([lat, lng]);
      const locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
      setPopupContent(locationText);
      setFormData({ ...formData, location: locationText });
    };

    const mapElement = document.querySelector(".leaflet-container");
    if (mapElement) {
      mapElement.addEventListener("click", handleMapClickEvent as unknown as EventListener);
      return () => {
        mapElement.removeEventListener("click", handleMapClickEvent as unknown as EventListener);
      };
    }
  }, [formData, setFormData]);

  const handleLocationClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/1VF8MxuicvabAJoT9`;
    window.open(googleMapsUrl, "_blank");
  };
  
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      router.push("/thank-you");

      const formBody = new URLSearchParams(data as unknown as Record<string, string>).toString();

      const response = await fetch("https://script.google.com/macros/s/AKfycbzCpUWm4UM8o7xu4Vr7tpdv_oN8IPcfGO8eHz5cQRkTLIMPmEqWDlmtn-U5yJKkLB1WKA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      const result = await response.json();

      if (result.result === "success") {
        // Success logic
      } else {
        toast.error("Error submitting form.");
      }
    } catch (error) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      studentName: "",
      parentEmail: "",
      parentPhone: "",
      classApplied: "",
      location: "",
    },
  });

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#1A1A1A] overflow-hidden">
      
      {/* 1. Map Section */}
      <div className="relative w-full h-[60vh] lg:h-[85vh] z-0">
        <MapContainer
          ref={mapRef}
          center={center}
          zoom={17}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={false}
          zoomControl={false}
          minZoom={17}
          maxZoom={17}
          className="pointer-events-none"
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/${MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
            attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
            tileSize={512}
            zoomOffset={-1}
          />
        </MapContainer>

        {/* Pink Blob (Moved to be relative to the map container) */}
        <div className="absolute hidden lg:block z-10 bottom-0 right-[8%] translate-y-1/4">
          <svg width="315" height="314" viewBox="0 0 315 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.833984 157C0.833984 70.507 70.9504 0.390625 157.443 0.390625C243.936 0.390625 314.053 70.507 314.053 157V313.609H157.443C70.9504 313.609 0.833984 243.493 0.833984 157Z"
              fill="#FEA3CA"
            />
          </svg>
        </div>

        {/* Pulsing Target (Centered robustly) */}
        <div 
          onClick={handleLocationClick} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-36 h-36 z-[1000] flex items-center justify-center"
        >
          <div className="absolute w-24 h-24 rounded-full bg-[#FB7824] animate-ping opacity-75" />
          <div className="absolute w-24 h-24 rounded-full bg-[#FB7824] animate-pulse" />
        </div>
      </div>

      {/* 2. Form Section (Pulled up over the map) */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-32 md:-mt-48 lg:-mt-64 mb-16 lg:mb-32">
        <div className="bg-white relative p-6 sm:p-8 md:p-12 lg:py-24 rounded-xl shadow-2xl w-full">
          
          {/* Yellow Star (Hidden on mobile to prevent overflow/scrolling issues) */}
          <div className="absolute -top-12 -right-12 hidden lg:block z-50">
            <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M85.5001 0.511719C73.7078 41.7387 41.4828 73.9637 0.255859 85.756C41.4828 97.5482 73.7078 129.773 85.5001 171C97.2894 129.773 129.517 97.5482 170.744 85.756C129.517 73.9637 97.2923 41.7358 85.5001 0.511719Z"
                fill="#FBE360"
              />
            </svg>
          </div>

          <h2 className="text-center text-orange-600 font-semibold xl:text-[2.5rem] text-2xl md:text-3xl lg:text-[2rem] leading-tight">
            Admissions Open
            <br /> Now For {new Date().getFullYear()}
          </h2>
          <h3 className="text-center text-gray-800 font-bold text-lg sm:text-xl md:text-3xl pb-8 md:pb-12 mt-2">
            Book Your Counselling Session Today!
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Student Name"
                {...register("studentName", { required: "Student Name is required" })}
                className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-lg md:text-xl"
              />
              {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Parent Email"
                {...register("parentEmail", { required: "Parent Email is required" })}
                className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-lg md:text-xl"
              />
              {errors.parentEmail && <p className="text-red-500 text-sm mt-1">{errors.parentEmail.message}</p>}
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                placeholder="Parent Phone Number"
                {...register("parentPhone", { required: "Parent Phone is required" })}
                className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-lg md:text-xl"
              />
              {errors.parentPhone && <p className="text-red-500 text-sm mt-1">{errors.parentPhone.message}</p>}
            </div>

            <div className="flex flex-col">
              <select
                {...register("classApplied", { required: "Class is required" })}
                className="w-full px-1 pb-[7px] text-gray-400 bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-lg md:text-xl"
                defaultValue=""
              >
                <option value="" disabled>Class Being Applied For</option>
                <option className="text-black" value="Nursery">Nursery</option>
                <option className="text-black" value="PP I">PP I</option>
                <option className="text-black" value="PP II">PP II</option>
                <option className="text-black" value="I">I</option>
                <option className="text-black" value="II">II</option>
                <option className="text-black" value="III">III</option>
                <option className="text-black" value="IV">IV</option>
                <option className="text-black" value="V">V</option>
                <option className="text-black" value="VI">VI</option>
                <option className="text-black" value="VII">VII</option>
                <option className="text-black" value="VIII">VIII</option>
                <option className="text-black" value="IX">IX</option>
                <option className="text-black" value="X">X</option>
                <option className="text-black" value="XI">XI</option>
                <option className="text-black" value="XII">XII</option>
              </select>
              {errors.classApplied && <p className="text-red-500 text-sm mt-1">{errors.classApplied.message}</p>}
            </div>

            <div className="md:col-span-2 flex flex-col">
              <input
                type="text"
                placeholder="Located in"
                {...register("location", { required: "Location is required" })}
                className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-lg md:text-xl"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div className="md:col-span-2 flex justify-center mt-4 md:mt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Submit application form"
                className="bg-[#FB7824] cursor-pointer text-white py-3 px-6 md:px-8 rounded-3xl font-bold text-xl md:text-2xl flex items-center justify-center min-w-[150px] shadow-lg transition-shadow"
              >
                {loading ? <ClipLoader size={24} color="#fff" /> : "Apply Now"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      {/* 3. Footer Section (Standard flow) */}
      <footer className="w-full bg-[#1A1A1A] text-white z-10  pb-6 px-4">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-6">
              <Image src={logo} alt="Manipal School" className="h-12 w-auto" />
            </div>
            <div className="text-sm text-gray-300 max-w-xl mx-auto space-y-1">
              <p className="text-white font-medium">A Unit of Academy of General Education</p>
              <p>Affiliated to CBSE New Delhi vide AFF.No 830486</p>
              <p>Ward 55, Behind Manipal College Of Dental Sciences, Attavar, Mangalore DK District,</p>
              <p>Karnataka, India - 575 001</p>
            </div>
          </div>

          <div className="bg-[#FB7824] rounded-xl p-6 lg:p-8 max-w-5xl mx-auto mb-12 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">For Admission Enquiries</h3>
                <p className="text-sm md:text-base text-white/90 mt-1">You can also Get in Touch</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={20} className="text-white" />
                  <Link href="tel:+919538820398" className="hover:underline text-lg font-medium">
                    +91 9538820398
                  </Link>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-white" />
                    <Link href="mailto:Info@manipalschool.edu.in" className="hover:underline text-sm md:text-base">
                      Info@manipalschool.edu.in
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 pl-[32px]">
                    <Link href="mailto:Admissions@manipalschool.edu.in" className="hover:underline text-sm md:text-base">
                      Admissions@manipalschool.edu.in
                    </Link>
                  </div>
                </div>

                <p className="text-sm md:text-base pt-1">
                  Office Telephone:{" "}
                  <Link href="tel:+08244252305" className="hover:underline font-medium">
                    0824-4252305
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-white text-center font-bold pb-6 text-lg">Follow Us</h2>
            <div className="flex gap-6 mb-8">
              {/* Note: I've kept your exact SVGs, just wrapped them in cleaner anchor tags */}
              <a href="https://www.instagram.com/manipal_school_mangaluru/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <span className="sr-only">Instagram</span>
                {/* SVG 1 */}
              </a>
              <a href="https://www.facebook.com/manipalschool/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <span className="sr-only">Facebook</span>
                {/* SVG 2 */}
              </a>
              <a href="https://www.youtube.com/@manipalschool-attavarmanga1986" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <span className="sr-only">YouTube</span>
                {/* SVG 3 */}
              </a>
            </div>

            <hr className="border-t border-white/20 w-full mb-6" />

            <div className="text-sm text-white/60 text-center w-full">
              <p>© Manipal School {new Date().getFullYear()} | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CounsellingForm;