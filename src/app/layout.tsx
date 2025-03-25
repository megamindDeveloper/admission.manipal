import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WhatsappChatWidget from "./components/WhatsappChatWidget/WhatsappChatWidget";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manipal School | Best School in Mangalore",
  description:
    "Manipal School is a leading institution in Mangalore, providing quality education, modern facilities, and a nurturing environment for students to excel academically and personally.",
  keywords: [
    "Manipal School",
    "Best School in Mangalore",
    "Top Schools in Karnataka",
    "CBSE Schools in Mangalore",
    "ICSE Schools in Mangalore",
    "Best Education for Kids",
    "Manipal Education",
    "Schools near me",
  ],
  openGraph: {
    title: "Manipal School | Best School in Mangalore",
    description:
      "Join Manipal School, a premier educational institution in Mangalore, known for excellence in academics, extracurricular activities, and student development.",
    url: "https://www.manipalschool.edu.in/", // Replace with the actual website URL
    siteName: "Manipal School",
    images: [
      {
        url: "https://instagram.fmaa12-3.fna.fbcdn.net/v/t51.2885-19/321896329_5907347629355947_429636674318731607_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fmaa12-3.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QFF0LNLQtD_ZEZ1-03Xr_GuXQYSR1kVj769Z6fUsndb8S-zTLDR6gQE4PDWugM1p_Q&_nc_ohc=m-4u_CNLzlIQ7kNvgHgIsM3&_nc_gid=lNxQv-24QmFvT1ktueof1w&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYEzvVt4nPEExBFCVRXGq1KONbi3u2plxJ4670PX3qfnLA&oe=67E1C97A&_nc_sid=8b3546", // Replace with an actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Manipal School Campus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal School | Best School in Mangalore",
    description: "Providing top-quality education with modern facilities and a student-centric approach at Manipal School, Mangalore.",
    images: [
      "https://instagram.fmaa12-3.fna.fbcdn.net/v/t51.2885-19/321896329_5907347629355947_429636674318731607_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fmaa12-3.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QFF0LNLQtD_ZEZ1-03Xr_GuXQYSR1kVj769Z6fUsndb8S-zTLDR6gQE4PDWugM1p_Q&_nc_ohc=m-4u_CNLzlIQ7kNvgHgIsM3&_nc_gid=lNxQv-24QmFvT1ktueof1w&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYEzvVt4nPEExBFCVRXGq1KONbi3u2plxJ4670PX3qfnLA&oe=67E1C97A&_nc_sid=8b3546",
    ], // Replace with actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {" "}
        <Toaster position="top-right" />
        {children}
        <WhatsappChatWidget />
      </body>
    </html>
  );
}
