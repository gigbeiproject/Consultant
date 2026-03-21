import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/com/Navbar2";
import Footer from "@/com/Footer";
import FloatingActions from "@/com/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ==========================================
   SEO METADATA CONFIGURATION
   Replace 'https://www.edumentor.com' 
   with your actual live domain.
========================================== */
export const metadata = {
  metadataBase: new URL('https://www.edumentor.com'), // CHANGE THIS TO YOUR ACTUAL DOMAIN
  
  title: {
    default: "Edu Mentor | Global University Admissions & Education Consultancy",
    template: "%s | Edu Mentor" // This adds the suffix to other pages automatically
  },
  
  description: "Your trusted partner in global education. Get expert guidance from former admissions officers for world-class university admissions and scholarship strategies.",
  
  keywords: [
    "Edu Mentor",
    "Education Consultancy",
    "Study Abroad",
    "University Admissions",
    "Scholarship Guidance",
    "Study in USA",
    "Study in UK",
    "International Education",
    "College Counseling"
  ],

  authors: [{ name: "Edu Mentor" }],
  
  // How links look when shared on Facebook/LinkedIn/WhatsApp
  openGraph: {
    title: "Edu Mentor | World-Class Education Consultancy",
    description: "Successfully guiding 500+ students to top universities worldwide. Book your free 15-minute consultation today.",
    url: 'https://www.edumentor.com',
    siteName: 'Edu Mentor',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure you have this image in your public folder
        width: 1200,
        height: 630,
        alt: 'Edu Mentor Global Education Consultancy',
      },
    ],
  },

  // Twitter Card data
  twitter: {
    card: 'summary_large_image',
    title: "Edu Mentor | Study Abroad Experts",
    description: "Expert consultation for students and families navigating global university admissions.",
    images: ['/og-image.jpg'], // Same image as above
  },

  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon in the public folder
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Local Business/Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Edu Mentor Consultancy",
              "url": "https://www.edumentor.com",
              "description": "Expert consultation for students and families navigating global university admissions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 University Avenue",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567", 
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 bg-[#f4f7fb]`}
      >
        <Navbar />
        
        <main className="min-h-screen">
            {children}
        </main>
        
        <Footer />
        <FloatingActions/>
      </body>
    </html>
  );
}