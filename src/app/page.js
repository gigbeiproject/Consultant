import BookingForm from "@/com/BookingForm";
import Brand from "@/com/Brand";
import CareerPathfinder from "@/com/CareerPathfinder";
import EducationPolicy from "@/com/EducationPolicy";
import EduMentor360 from "@/com/EduMentor360";
import HeroSection from "@/com/HeroSection";
import HowItWorks from "@/com/HowItWorks";
import StatsAndFeatures from "@/com/StatsAndFeatures";
import SuccessStories from "@/com/SuccessStories";
import TextMarquee from "@/com/UniversityMarquee";
import UniversityMarquee from "@/com/UniversityMarquee";
import Image from "next/image";


export default function Home() {
  return (
    <div>
     <HeroSection/>
     <TextMarquee/>
     <HowItWorks/>
     <CareerPathfinder/>
     <EduMentor360/>
     <EducationPolicy/>
     <BookingForm/>
     <SuccessStories/>
     <Brand/>
     <StatsAndFeatures/>
      {/* <h1>HELLO</h1> */}
      
    </div>
  );
}
