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
import { motion, useInView } from "framer-motion";
import { ClipLoader } from "react-spinners";
// Correct dynamic imports for Leaflet components

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MAPBOX_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoiamFtc2hhZDEiLCJhIjoiY2xrOXNsdTR0MDBoZDNkbXcxNXc1YnYybCJ9.7mKn2TGyJPQ5p1cIIss9ow";
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

    const mapElement = document.querySelector('.leaflet-container');
    if (mapElement) {
      mapElement.addEventListener('click', handleMapClickEvent as unknown as EventListener);
      return () => {
        mapElement.removeEventListener('click', handleMapClickEvent as unknown as EventListener);
      };
    }
  }, [formData, setFormData]);

  const handleLocationClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/1VF8MxuicvabAJoT9`;
    window.open(googleMapsUrl, "_blank");
  };
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("https://admissionmanipal.vercel.app/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      studentName: "",
      parentEmail: "",
      parentPhone: "",
      classApplied: "",
      location: "",
    },
  });
  return (
    <div className="relative flex bg-[#1A1A1A] flex-col items-center ">
      <MapContainer
        ref={mapRef}
        center={center}
        zoom={17}
        style={{ width: "100%", height: "100vh", position: "relative" }}
        scrollWheelZoom={false}
        zoomControl={false}
        minZoom={17}
        maxZoom={17}
        className="pointer-events-none"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={selectedLocation}>
          <Popup>{popupContent}</Popup>
        </Marker>
      </MapContainer>
      <div className="absolute  opacity-100 z-1000 top-[30rem] right-[8%]">
        <svg width="315" height="314" viewBox="0 0 315 314" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.833984 157C0.833984 70.507 70.9504 0.390625 157.443 0.390625C243.936 0.390625 314.053 70.507 314.053 157V313.609H157.443C70.9504 313.609 0.833984 243.493 0.833984 157Z"
            fill="#FEA3CA"
          />
        </svg>
      </div>
      <div onClick={handleLocationClick} className="absolute cursor-pointer top-[46vh] left-[46%] w-36 h-36 z-[1000]">
        {/* <Lottie options={lottieOptions} /> */}
        <div className="absolute inset-0">
          <div className="w-24 h-24 rounded-full bg-[#FB7824] animate-ping" />
        </div>
        <div className="absolute inset-0">
          <div className="w-24 h-24 rounded-full bg-[#FB7824] animate-pulse" />
        </div>
      </div>
      {/* <div className="absolute z-1000 p-8 py-24 mt-[40rem] rounded-lg shadow-lg max-w-7xl w-full"> */}
      <div className="bg-white absolute z-1000 p-8 py-24 mt-[40rem] rounded-lg shadow-lg xl:max-w-7xl w-full  lg:max-w-4xl">
        <h2 className="text-center text-orange-600 font-semibold xl:text-[2.5rem] lg:text-[2rem]">Ready to Nurture a Future Innovator</h2>
        <h3 className="text-center text-gray-800 font-bold text-xl pb-12">Book Your Counselling Session Today!</h3>

        <div className="absolute top-[-15%] opacity-100 z-50 right-[-7%]">
          <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M85.5001 0.511719C73.7078 41.7387 41.4828 73.9637 0.255859 85.756C41.4828 97.5482 73.7078 129.773 85.5001 171C97.2894 129.773 129.517 97.5482 170.744 85.756C129.517 73.9637 97.2923 41.7358 85.5001 0.511719Z"
              fill="#FBE360"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-7">
          <input
            type="text"
            placeholder="Student Name"
            {...register("studentName", { required: "Student Name is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
          
          <input
            type="email"
            placeholder="Parent Email"
            {...register("parentEmail", { required: "Parent Email is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.parentEmail && <p className="text-red-500 text-sm">{errors.parentEmail.message}</p>}
          
          <input
            type="tel"
            placeholder="Parent Phone Number"
            {...register("parentPhone", { required: "Parent Phone is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.parentPhone && <p className="text-red-500 text-sm">{errors.parentPhone.message}</p>}
          
          <input
            type="text"
            placeholder="Class Being Applied For"
            {...register("classApplied", { required: "Class is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.classApplied && <p className="text-red-500 text-sm">{errors.classApplied.message}</p>}
          
          <input
            type="text"
            placeholder="Located in"
            {...register("location", { required: "Location is required" })}
            className="md:col-span-2 px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          
          <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FB7824] cursor-pointer text-white py-2 px-4 md:px-6 rounded-3xl 
             font-bold text-xl md:text-2xl flex items-center justify-center min-w-[150px]"
                >
                  {loading ? <ClipLoader size={24} color="#fff" /> : "Submit"}
                </motion.button>
        </form>
      </div>
      {/* </div> */}
      <footer className="bg-[#1A1A1A] text-white w-full xl:mt-32">
        <div className="container mx-auto px-4 md:pt-72 pt-[40rem]">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center text-center mb-8 lg:mt-96 xl:mt-0">
            <div className="mb-4">
              <Image src={logo} alt="Manipal School" className="h-12" />
            </div>
            <div className="text-sm text-gray-300 max-w-xl mx-auto">
              <p className="text-white">A Unit of Academy of General Education</p>
              <p>Affiliated to CBSE New Delhi vide AFF.No 830486</p>
              <p>Ward 55, Behind Manipal College Of Dental Sciences, Attavar, Mangalore DK District,</p>
              <p>Karnataka, India - 575 001</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#FB7824] rounded-lg p-6 max-w-7xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">For Admission Enquiries</h3>
                <p className="text-sm">You can also Get in Touch</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} />
                  <Link href="tel:+919538820398" className="hover:underline">
                    +91 9538820398
                  </Link>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} />
                  <Link href="mailto:feedback@manipalschool.edu.in" className="hover:underline">
                    feedback@manipalschool.edu.in
                  </Link>
                </div>
                <p className="text-sm">
                  Office Telephone:{" "}
                  <Link href="tel:+918244252305" className="hover:underline">
                    +91 824 4252305
                  </Link>{" "}
                  /{" "}
                  <Link href="tel:+918244252307" className="hover:underline">
                    4252307
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Social Links and Copyright */}
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center font-bold pb-4">Follow Us</h2>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-[#FB7824] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.88">
                    <path
                      opacity="0.4"
                      d="M25.0049 12.8547C25.0049 19.4272 19.5147 24.7739 12.7188 24.7739C5.92284 24.7739 0.432617 19.4272 0.432617 12.8547C0.432617 6.28226 5.92284 0.935547 12.7188 0.935547C19.5147 0.935547 25.0049 6.28226 25.0049 12.8547Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.75"
                    />
                    <path
                      d="M19.1933 10.1706C19.1628 9.47861 19.0509 9.00289 18.8906 8.59068C18.7253 8.15313 18.4709 7.76139 18.1376 7.43573C17.8119 7.10501 17.4176 6.84802 16.9851 6.68524C16.5705 6.52495 16.0973 6.41305 15.4053 6.38254C14.7082 6.34945 14.4869 6.3418 12.7188 6.3418C10.9507 6.3418 10.7294 6.34945 10.0348 6.37996C9.34287 6.41047 8.86715 6.52246 8.45504 6.68266C8.01739 6.84802 7.62564 7.10242 7.29999 7.43573C6.96926 7.76139 6.71238 8.15571 6.5495 8.5882C6.38921 9.00289 6.27731 9.47603 6.2468 10.168C6.21371 10.8651 6.20605 11.0864 6.20605 12.8545C6.20605 14.6226 6.21371 14.8439 6.24422 15.5385C6.27472 16.2304 6.38672 16.7061 6.54701 17.1184C6.71238 17.5559 6.96926 17.9477 7.29999 18.2733C7.62564 18.604 8.01997 18.861 8.45246 19.0238C8.86715 19.1841 9.34028 19.296 10.0323 19.3265C10.7268 19.3571 10.9482 19.3647 12.7163 19.3647C14.4844 19.3647 14.7057 19.3571 15.4002 19.3265C16.0922 19.296 16.5679 19.1841 16.98 19.0238C17.8552 18.6854 18.5472 17.9935 18.8856 17.1184C19.0458 16.7037 19.1578 16.2304 19.1883 15.5385C19.2188 14.8439 19.2264 14.6226 19.2264 12.8545C19.2264 11.0864 19.2238 10.8651 19.1933 10.1706ZM18.0206 15.4876C17.9926 16.1236 17.8857 16.467 17.7967 16.696C17.5779 17.2633 17.1276 17.7136 16.5603 17.9324C16.3313 18.0215 15.9854 18.1283 15.3519 18.1562C14.665 18.1869 14.459 18.1944 12.7214 18.1944C10.9838 18.1944 10.7752 18.1869 10.0908 18.1562C9.45476 18.1283 9.11132 18.0215 8.88236 17.9324C8.60003 17.8281 8.34304 17.6627 8.13445 17.4465C7.91821 17.2353 7.75285 16.9809 7.6485 16.6986C7.55946 16.4696 7.45263 16.1236 7.42471 15.4902C7.3941 14.8033 7.38655 14.5972 7.38655 12.8596C7.38655 11.122 7.3941 10.9134 7.42471 10.2291C7.45263 9.59309 7.55946 9.24965 7.6485 9.02068C7.75285 8.73826 7.91821 8.48137 8.13703 8.27268C8.34811 8.05644 8.60251 7.89107 8.88494 7.78683C9.1139 7.69779 9.45993 7.59096 10.0934 7.56293C10.7802 7.53242 10.9864 7.52477 12.7238 7.52477C14.464 7.52477 14.67 7.53242 15.3544 7.56293C15.9904 7.59096 16.3339 7.69779 16.5628 7.78683C16.8452 7.89107 17.1022 8.05644 17.3108 8.27268C17.527 8.48385 17.6924 8.73826 17.7967 9.02068C17.8857 9.24965 17.9926 9.59557 18.0206 10.2291C18.0511 10.916 18.0588 11.122 18.0588 12.8596C18.0588 14.5972 18.0511 14.8007 18.0206 15.4876Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                    <path
                      d="M10.0326 6.33001L10.0326 6.33001C10.7283 6.29945 10.9504 6.2918 12.7188 6.2918C14.4871 6.2918 14.7094 6.29945 15.4076 6.33259C15.4076 6.33259 15.4077 6.3326 15.4077 6.3326L15.4053 6.38254C16.0973 6.41305 16.5705 6.52495 16.9851 6.68524L10.0326 6.33001ZM10.0326 6.33001C9.33591 6.36072 8.8548 6.47364 8.43714 6.63597M10.0326 6.33001L8.43714 6.63597M6.19426 15.5407L6.19426 15.5407C6.16371 14.845 6.15605 14.6229 6.15605 12.8545C6.15605 11.0862 6.16371 10.8639 6.19685 10.1657C6.19685 10.1657 6.19685 10.1656 6.19686 10.1656L6.2468 10.168L6.19426 15.5407ZM6.19426 15.5407C6.22498 16.2374 6.3379 16.7185 6.50032 17.1362M6.19426 15.5407L6.50032 17.1362M8.43714 6.63597C7.99303 6.80381 7.59528 7.06206 7.26456 7.40044C6.92892 7.73104 6.66818 8.1313 6.50278 8.57037L8.43714 6.63597ZM6.50032 17.1362C6.66822 17.5804 6.92901 17.9781 7.26465 18.3087C7.59524 18.6443 7.99553 18.9052 8.43464 19.0705C8.85479 19.2329 9.33327 19.3457 10.0301 19.3765C10.7257 19.4071 10.9479 19.4147 12.7163 19.4147C14.4847 19.4147 14.7068 19.4071 15.4024 19.3765C16.0993 19.3457 16.5804 19.2329 16.9982 19.0704L6.50032 17.1362ZM8.13445 17.4465C8.34304 17.6627 8.60003 17.8281 8.88236 17.9324C9.11132 18.0215 9.45476 18.1283 10.0908 18.1562L8.13445 17.4465ZM8.13445 17.4465C7.91821 17.2353 7.75285 16.9809 7.6485 16.6986L8.13445 17.4465ZM18.1729 7.40031C17.8423 7.06467 17.442 6.80382 17.0029 6.63852L18.8906 8.59068L18.9374 8.57301C18.9374 8.57293 18.9374 8.57286 18.9373 8.57279C18.7695 8.12877 18.5112 7.73102 18.1729 7.40031ZM17.9707 15.4854L17.9706 15.4854C17.9429 16.1158 17.8372 16.4539 17.7501 16.6779L17.7501 16.678C17.5363 17.2322 17.0964 17.6721 16.5423 17.8858L16.5421 17.8858C16.3181 17.973 15.9776 18.0786 15.3496 18.1063L15.3496 18.1063C14.6638 18.1369 14.4587 18.1444 12.7214 18.1444C10.984 18.1444 10.7763 18.1369 10.093 18.1063L10.093 18.1063C9.46258 18.0786 9.12451 17.973 8.90048 17.8858L8.89969 17.8855C8.62418 17.7837 8.37363 17.6224 8.17044 17.4118L8.17045 17.4118L8.16938 17.4107C7.95842 17.2047 7.79716 16.9566 7.6954 16.6813L7.69541 16.6813L7.6951 16.6805C7.60799 16.4565 7.50234 16.1158 7.47466 15.488L7.47466 15.488C7.4441 14.8022 7.43655 14.5969 7.43655 12.8596C7.43655 11.1223 7.4441 10.9145 7.47466 10.2313L7.47466 10.2313C7.50234 9.60091 7.60798 9.26284 7.6951 9.03881L7.69511 9.03881L7.6954 9.03801C7.79722 8.76243 7.95846 8.51208 8.17154 8.30886L8.17156 8.30888L8.17282 8.3076C8.37873 8.09665 8.62684 7.93539 8.90225 7.83373L8.90226 7.83374L8.90306 7.83343C9.12707 7.74631 9.46773 7.64066 10.0956 7.61288L10.0956 7.61288C10.7814 7.58242 10.9866 7.57477 12.7238 7.57477C14.4637 7.57477 14.6689 7.58242 15.3522 7.61288L15.3522 7.61288C15.9826 7.64066 16.3207 7.7463 16.5447 7.83343L16.5447 7.83343L16.5455 7.83373C16.821 7.93546 17.0716 8.09674 17.2748 8.30739L17.2748 8.30741L17.2758 8.30845C17.4868 8.51447 17.648 8.76258 17.7498 9.03801L17.7501 9.03881C17.8372 9.26282 17.9429 9.60338 17.9706 10.2313L17.9707 10.2313C18.0011 10.9171 18.0088 11.1223 18.0088 12.8596C18.0088 14.5969 18.0011 14.7996 17.9707 15.4854Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.1"
                    />
                    <path
                      d="M12.7155 9.50586C10.8686 9.50586 9.37012 11.0043 9.37012 12.8513C9.37012 14.6983 10.8686 16.1967 12.7155 16.1967C14.5625 16.1967 16.0609 14.6983 16.0609 12.8513C16.0609 11.0043 14.5625 9.50586 12.7155 9.50586ZM12.7155 15.0213C11.5173 15.0213 10.5454 14.0495 10.5454 12.8513C10.5454 11.653 11.5173 10.6812 12.7155 10.6812C13.9138 10.6812 14.8856 11.653 14.8856 12.8513C14.8856 14.0495 13.9138 15.0213 12.7155 15.0213Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                    <path
                      d="M12.7155 9.45586C10.841 9.45586 9.32012 10.9766 9.32012 12.8513C9.32012 14.7259 10.841 16.2467 12.7155 16.2467C14.5901 16.2467 16.1109 14.7259 16.1109 12.8513C16.1109 10.9766 14.5901 9.45586 12.7155 9.45586ZM12.7155 14.9713C11.545 14.9713 10.5954 14.0219 10.5954 12.8513C10.5954 11.6806 11.545 10.7312 12.7155 10.7312C13.8862 10.7312 14.8356 11.6806 14.8356 12.8513C14.8356 14.0219 13.8862 14.9713 12.7155 14.9713Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.1"
                    />
                    <path
                      d="M16.9791 9.38061C16.9791 9.8119 16.6294 10.1616 16.198 10.1616C15.7667 10.1616 15.417 9.8119 15.417 9.38061C15.417 8.94922 15.7667 8.59961 16.198 8.59961C16.6294 8.59961 16.9791 8.94922 16.9791 9.38061Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                    <path
                      d="M16.198 10.2116C16.657 10.2116 17.0291 9.83952 17.0291 9.38061C17.0291 8.92159 16.657 8.54961 16.198 8.54961C15.7391 8.54961 15.367 8.9216 15.367 9.38061C15.367 9.83951 15.7391 10.2116 16.198 10.2116Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.1"
                    />
                  </g>
                </svg>
              </a>
              <a href="#" className="hover:text-[#FB7824] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.88">
                    <path
                      opacity="0.4"
                      d="M25.2862 12.8547C25.2862 19.4272 19.796 24.7739 13 24.7739C6.20409 24.7739 0.713867 19.4272 0.713867 12.8547C0.713867 6.28226 6.20409 0.935547 13 0.935547C19.796 0.935547 25.2862 6.28226 25.2862 12.8547Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.75"
                    />
                    <path
                      d="M16.4654 7.85742C15.1603 7.85742 14.14 8.78581 13.2165 9.96517C11.9473 8.43897 10.8859 7.85742 9.61572 7.85742C7.02614 7.85742 5.04199 11.0403 5.04199 14.4092C5.04199 16.5174 6.12189 17.847 7.93067 17.847C9.23253 17.847 10.1688 17.2674 11.8333 14.5194C11.8333 14.5194 12.5272 13.3622 13.0045 12.5651C13.1717 12.8201 13.3475 13.0945 13.533 13.3896L14.3135 14.6297C15.8339 17.0327 16.6811 17.847 18.2161 17.847C19.9782 17.847 20.9589 16.4992 20.9589 14.3472C20.9589 10.8199 18.93 7.85742 16.4654 7.85742ZM10.5641 13.7754C9.21453 15.7734 8.74769 16.2212 7.99633 16.2212C7.22308 16.2212 6.76354 15.58 6.76354 14.4368C6.76354 11.9911 8.05471 9.4902 9.59386 9.4902C10.4274 9.4902 11.1239 9.94482 12.1908 11.3874C11.1777 12.855 10.5641 13.7754 10.5641 13.7754ZM15.6573 13.5239L14.7241 12.0539C14.4715 11.666 14.2295 11.3096 13.996 10.9827C14.8371 9.75668 15.5309 9.14574 16.356 9.14574C18.0703 9.14574 19.4417 11.5295 19.4417 14.4575C19.4417 15.5736 19.0546 16.2212 18.2526 16.2212C17.484 16.2211 17.1168 15.7417 15.6573 13.5239Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                  </g>
                </svg>
              </a>
              <a href="#" className="hover:text-[#FB7824] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M25.5674 12.8547C25.5674 19.4272 20.0772 24.7739 13.2813 24.7739C6.48534 24.7739 0.995117 19.4272 0.995117 12.8547C0.995117 6.28226 6.48534 0.935547 13.2813 0.935547C20.0772 0.935547 25.5674 6.28226 25.5674 12.8547Z"
                    stroke="white"
                    strokeOpacity="0.88"
                    strokeWidth="0.75"
                  />
                  <path
                    d="M15.2793 12.2706L12.4023 10.6964C12.2368 10.6059 12.0413 10.6093 11.8791 10.7054C11.7169 10.8016 11.6201 10.9715 11.6201 11.16V14.2814C11.6201 14.4691 11.7163 14.6387 11.8775 14.735C11.9616 14.7853 12.0549 14.8105 12.1484 14.8105C12.234 14.8105 12.3199 14.7893 12.3989 14.7468L15.276 13.1997C15.4468 13.1078 15.5534 12.9303 15.5542 12.7362C15.5549 12.5422 15.4496 12.3638 15.2793 12.2706ZM12.3833 13.8888V11.5559L14.5335 12.7325L12.3833 13.8888Z"
                    fill="white"
                    fillOpacity="0.88"
                  />
                  <path
                    d="M15.3513 12.1391L15.3513 12.1391L12.4743 10.5648L12.4743 10.5648C12.2624 10.4489 12.0104 10.4533 11.8027 10.5763L11.8027 10.5763C11.5948 10.6995 11.4701 10.9185 11.4701 11.16V14.2814C11.4701 14.5219 11.594 14.7404 11.8005 14.8638C11.9078 14.9279 12.0277 14.9605 12.1484 14.9605C12.2589 14.9605 12.3691 14.9332 12.4699 14.8789C12.4699 14.8789 12.47 14.8789 12.47 14.8789L15.3471 13.3318L15.3471 13.3318C15.5663 13.2139 15.7032 12.9859 15.7042 12.7368V12.7368C15.7051 12.4877 15.5698 12.2586 15.3513 12.1391ZM14.219 12.7313L12.5333 13.6378V11.8089L14.219 12.7313Z"
                    stroke="white"
                    strokeOpacity="0.88"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M19.6956 10.248L19.695 10.242C19.684 10.1372 19.5742 9.2048 19.1209 8.73057C18.597 8.17279 18.0031 8.10502 17.7174 8.07253C17.6938 8.06985 17.6721 8.06737 17.6528 8.06478L17.63 8.0624C15.9084 7.93721 13.3083 7.92012 13.2823 7.92002L13.28 7.91992L13.2777 7.92002C13.2517 7.92012 10.6516 7.93721 8.91446 8.0624L8.8915 8.06478C8.87302 8.06727 8.85266 8.06955 8.8305 8.07214C8.54813 8.10473 7.96053 8.17259 7.43514 8.75055C7.00343 9.21971 6.87864 10.1321 6.86582 10.2346L6.86433 10.248C6.86046 10.2916 6.76855 11.3299 6.76855 12.3724V13.3469C6.76855 14.3893 6.86046 15.4277 6.86433 15.4714L6.86503 15.478C6.87606 15.5811 6.98575 16.4964 7.43693 16.9708C7.92953 17.5099 8.5524 17.5813 8.88743 17.6196C8.94039 17.6257 8.98599 17.6309 9.01709 17.6363L9.0472 17.6405C10.0413 17.7351 13.158 17.7817 13.2901 17.7836L13.2941 17.7837L13.2981 17.7836C13.3241 17.7835 15.9241 17.7664 17.6457 17.6412L17.6685 17.6388C17.6902 17.6359 17.7147 17.6333 17.7415 17.6306C18.0223 17.6008 18.6067 17.5389 19.1248 16.9687C19.5565 16.4995 19.6814 15.5871 19.6941 15.4847L19.6956 15.4713C19.6995 15.4276 19.7915 14.3893 19.7915 13.3469V12.3724C19.7914 11.3299 19.6995 10.2917 19.6956 10.248ZM19.0282 13.3469C19.0282 14.3117 18.944 15.3054 18.936 15.3966C18.9037 15.6479 18.772 16.2252 18.5617 16.4538C18.2374 16.8106 17.9042 16.8459 17.661 16.8717C17.6316 16.8748 17.6044 16.8777 17.5797 16.8808C15.9145 17.0012 13.4126 17.0197 13.2974 17.0204C13.1681 17.0185 10.097 16.9715 9.13324 16.882C9.08386 16.874 9.0305 16.8678 8.97427 16.8614C8.68902 16.8288 8.29854 16.784 7.99829 16.4538L7.99124 16.4462C7.78457 16.2309 7.6567 15.6911 7.62421 15.3996C7.61815 15.3307 7.53171 14.3253 7.53171 13.3469V12.3724C7.53171 11.4086 7.61577 10.4161 7.62391 10.323C7.66256 10.027 7.7967 9.48469 7.99829 9.26551C8.33252 8.89789 8.68494 8.85716 8.91803 8.83023C8.94029 8.82765 8.96105 8.82526 8.98023 8.82278C10.6697 8.70176 13.1896 8.68378 13.2801 8.68309L13.2778 8.8331C15.8894 8.70176 17.5638 8.82278C17.5844 8.82536 17.6069 8.82794 17.631 8.83073C17.8707 8.85805 18.2331 8.89938 18.5656 9.25409L18.5687 9.25736C18.7754 9.47267 18.9033 10.0219 18.9357 10.3193C18.9415 10.3844 19.0282 11.3919 19.0282 12.3724V13.3469Z"
                    fill="white"
                    fillOpacity="0.88"
                  />
                  <path
                    d="M19.845 10.2347L19.845 10.2347C19.849 10.2793 19.9414 11.323 19.9415 12.3724V13.3469C19.9415 14.3963 19.849 15.44 19.845 15.4846L19.8447 15.488L19.8447 15.488L19.8432 15.5013L19.843 15.5031C19.8361 15.5587 19.8005 15.8209 19.7107 16.1309C19.6221 16.4367 19.4752 16.8093 19.2355 17.07C18.6792 17.6819 18.0475 17.7489 17.7584 17.7796L17.7573 17.7797L17.757 17.7798C17.7298 17.7826 17.7075 17.785 17.6881 17.7875L17.6841 17.788L17.6841 17.788L17.6613 17.7904L17.6566 17.7909L17.6566 17.7908C15.9475 17.9151 13.3798 17.9331 13.2801 17.9336L13.2778 17.9336L13.2903 17.9338L13.2903 17.9336L13.288 17.9336C13.1596 17.9317 10.0347 17.8851 9.03299 17.7898L9.02658 17.7892L9.0266 17.7891L8.9965 17.7849L8.99111 17.7842L8.99113 17.7841C8.96561 17.7796 8.92561 17.775 8.87037 17.7687L8.86539 17.7681C8.5275 17.7294 7.85758 17.6528 7.32717 17.0731C7.07683 16.8092 6.92875 16.434 6.84159 16.126C6.75322 15.8138 6.72188 15.55 6.71588 15.4939L6.71587 15.4938L6.71517 15.4873L6.7149 15.4847L6.71492 15.4847C6.71097 15.4401 6.61855 14.3963 6.61855 13.3469V12.3724C6.61855 11.323 6.71097 10.2792 6.71492 10.2347L6.71523 10.2313L6.71527 10.2313L6.71676 10.218L6.71697 10.216L6.71698 10.216C6.72391 10.1606 6.75953 9.89834 6.84932 9.58835C6.9379 9.28251 7.08478 8.90996 7.32445 8.64931C7.88769 8.02995 8.52193 7.95675 8.81274 7.92319L8.81313 7.92315L8.8133 7.92313L19.845 10.2347ZM19.845 10.2347L19.8449 10.233M19.845 10.2347L19.8449 10.233M19.8449 10.233L19.8443 10.2271L19.8442 10.2263M19.8449 10.233L19.8442 10.2263M19.8442 10.2263C19.8382 10.1694 19.8069 9.90103 19.7183 9.58439C19.6309 9.27204 19.4821 8.89163 19.2299 8.62744C18.6682 8.0297 18.0283 7.95693 17.7355 7.92362L17.7344 7.92349L17.7343 7.92349M19.8442 10.2263L17.7343 7.92349M17.7343 7.92349C17.7105 7.92078 17.6903 7.91846 17.6726 7.9161L17.6726 7.91604M17.7343 7.92349L17.6726 7.91604M17.6726 7.91604L17.6684 7.9156M17.6726 7.91604L17.6684 7.9156M17.6684 7.9156L17.6456 7.91322L17.6456 7.91314M17.6684 7.9156L17.6456 7.91314M17.6456 7.91314L17.6409 7.91279M17.6456 7.91314L17.6409 7.91279M17.6409 7.91279C15.9434 7.78937 13.3988 7.77075 13.2865 7.77004M17.6409 7.91279L13.2865 7.77004M13.2865 7.77004L13.2865 7.7695L13.274 7.77004L13.2865 7.77004ZM18.4507 16.3529L18.4513 16.3522C18.532 16.2644 18.6097 16.0914 18.6723 15.8893C18.7325 15.695 18.7715 15.498 18.7869 15.3805C18.7962 15.2725 18.8782 14.2949 18.8782 13.3469V12.3724C18.8782 11.4059 18.7933 10.4113 18.7865 10.3341C18.7711 10.1945 18.7329 9.99296 18.6742 9.8016C18.6133 9.60342 18.5378 9.4418 18.4605 9.36124L18.4594 9.36006L18.4594 9.36005L18.4563 9.35677L18.4562 9.35668C18.1627 9.04365 17.8483 9.00647 17.614 8.97976L17.6138 8.97974L17.6121 8.97954C17.5902 8.97702 17.569 8.97457 17.5491 8.97211C15.8863 8.85218 13.3879 8.83381 13.2801 8.83309L13.2778 8.8331C13.141 8.83414 10.6626 8.85292 8.99515 8.97209C8.97778 8.97431 8.9594 8.97644 8.941 8.97857L8.93533 8.97923L8.93525 8.97924C8.70986 9.00527 8.40505 9.0411 8.10928 9.36642L8.10869 9.36706C8.03153 9.45095 7.9555 9.6141 7.89295 9.81088C7.83263 10.0006 7.79148 10.1999 7.77306 10.3393C7.76353 10.4489 7.68171 11.4255 7.68171 12.3724V13.3469C7.68171 14.3109 7.76633 15.3029 7.77348 15.3847C7.78882 15.5212 7.82692 15.7187 7.8856 15.9068C7.94635 16.1015 8.02173 16.2614 8.09945 16.3424L8.10086 16.3438L8.10085 16.3438L8.1079 16.3514L8.10929 16.3529L8.10928 16.3529C8.36759 16.637 8.703 16.6794 8.99135 16.7124L8.97427 16.8614L8.99112 16.7124C9.04504 16.7185 9.10008 16.7248 9.15211 16.7331C10.1105 16.8213 13.1447 16.8682 13.298 16.8704C13.4326 16.8696 15.9124 16.8508 17.5651 16.7315L18.4507 16.3529ZM18.4507 16.3529C18.1654 16.6667 17.8807 16.6976 17.6454 16.7225L18.4507 16.3529Z"
                    stroke="white"
                    strokeOpacity="0.88"
                    strokeWidth="0.3"
                  />
                </svg>
              </a>
            </div>

            <hr className="border-t text-white/56  my-4 w-full " />

            <div className="text-sm text-white/56 text-center flex flex-row w-full justify-between pb-4 items-center">
              <div className="text-left">
                <p>© Manipal School 2024 | All Rights Reserved</p>
              </div>
              <div className="flex gap-4 text-right">
                <a href="#" className="hover:text-[#FB7824]">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:text-[#FB7824]">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CounsellingForm;
