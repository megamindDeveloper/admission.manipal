"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import animationData from "../../../animation/pulseAnimation.json";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import type { LeafletMouseEvent, Map } from "leaflet";
import logo from "../../../../public/images/logo/manipalBottom.svg"
// Dynamically import components
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoiamFtc2hhZDEiLCJhIjoiY2xrOXNsdTR0MDBoZDNkbXcxNXc1YnYybCJ9.7mKn2TGyJPQ5p1cIIss9ow";
const MAPBOX_STYLE_ID = "streets-v12";
const center: [number, number] = [12.853876986146968, 74.84635264097497];

const CounsellingForm = () => {
  const mapRef = useRef<Map | null>(null);
  const [formData, setFormData] = useState({
    studentName: "",
    parentEmail: "",
    parentPhone: "",
    classApplied: "",
    location: "",
  });

  const [selectedLocation, setSelectedLocation] = useState<[number, number]>(center);
  const [popupContent, setPopupContent] = useState("Selected Location");

  useEffect(() => {
    if (mapRef.current) {
      const handleMapClick = (e: LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        setSelectedLocation([lat, lng]);
        const locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
        setPopupContent(locationText);
        setFormData({ ...formData, location: locationText });
      };

      mapRef.current.on('click', handleMapClick);
      return () => {
        mapRef.current?.off('click', handleMapClick);
      };
    }
  }, [formData]);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/1VF8MxuicvabAJoT9`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="relative flex flex-col items-center py-12">
      <MapContainer
        ref={mapRef}
        center={center}
        zoom={17}
        style={{ width: "100%", height: "100vh" }}
        scrollWheelZoom={false}
        zoomControl={false}
        minZoom={17}
        maxZoom={17}
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

      <div onClick={handleLocationClick} className="absolute cursor-pointer top-[16%] left-[48%] w-28 h-28 z-[1000]">
        <Lottie options={lottieOptions} />
      </div>

      <div className="bg-white absolute z-1000 p-8 py-24 mt-[40rem] rounded-lg shadow-lg max-w-5xl w-full">
        <h2 className="text-center text-orange-600 font-semibold text-lg">Ready to Nurture a Future Innovator</h2>
        <h3 className="text-center text-gray-800 font-bold text-xl">Book Your Counselling Session Today!</h3>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-7">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          <input
            type="email"
            name="parentEmail"
            placeholder="Parent Email"
            value={formData.parentEmail}
            onChange={handleChange}
            required
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          <input
            type="tel"
            name="parentPhone"
            placeholder="Parent Phone Number"
            value={formData.parentPhone}
            onChange={handleChange}
            required
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          <input
            type="text"
            name="classApplied"
            placeholder="Class Being Applied For"
            value={formData.classApplied}
            onChange={handleChange}
            required
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          <input
            type="text"
            name="location"
            placeholder="Located in"
            value={formData.location}
            onChange={handleChange}
            required
            className="col-span-2 px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          <button
            type="submit"
            className="w-full mx-auto bg-[#FB7824] text-white py-2 mt-8 px-6 rounded-3xl font-bold text-2xl transition-colors duration-200 max-w-[10vw] col-span-2"
          >
            Submit
          </button>
        </form>
      </div>

      <footer className="bg-[#1A1A1A] text-white w-full">
        <div className="container mx-auto px-4 pt-72">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center text-center mb-8">
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
          <div className="bg-[#FF6934] rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">For Admission Enquires</h3>
                <p className="text-sm">You can also Get in Touch</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} />
                  <span>+91 9538820398</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} />
                  <span>feedback@manipalschool.edu.in</span>
                </div>
                <p className="text-sm">Office Telephone: +91 824 4252305 / 4252307</p>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-[#FF6934] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#FF6934] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#FF6934] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-400 text-center">
              <p>© Manipal School 2024 | All Rights Reserved</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-[#FF6934]">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:text-[#FF6934]">
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
