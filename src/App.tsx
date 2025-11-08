import { Navigation } from "./components/Navigation";
import { SearchPanel } from "./components/SearchPanel";
import { HeroSection } from "./components/HeroSection";
import { SpecialtyCard } from "./components/SpecialtyCard";
import { FeatureCard } from "./components/FeatureCard";
import { DoctorCard } from "./components/DoctorCard";
import { ArticlesSection } from "./components/ArticlesSection";
import { MedicineSection } from "./components/MedicineSection";
import { MIRASection } from "./components/MIRASection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CTASection } from "./components/CTASection";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { Footer } from "./components/Footer";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useRef, useState } from "react";
import {
  Smile,
  Droplets,
  Thermometer,
  Baby,
  Brain,
  Video,
  Clock,
  FileText,
  Shield,
  Headphones,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./components/ui/button";

function AppContent() {
  const { theme } = useTheme();
  const specialties = [
    { icon: Smile, title: "Dental Pain" },
    { icon: Droplets, title: "Skin Issues" },
    { icon: Thermometer, title: "Cold/Fever" },
    { icon: Baby, title: "Child Not Feeling Well" },
    { icon: Brain, title: "Depression/Anxiety" },
  ];

  const features = [
    {
      icon: Video,
      title: "Instant Video Consultations",
      description: "Connect with verified doctors via secure HD video calls anytime, anywhere.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access healthcare professionals round the clock for urgent care and consultations.",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive validated e-prescriptions instantly and access your health records securely.",
    },
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "Your health data is encrypted and protected with bank-level security standards.",
    },
    {
      icon: Headphones,
      title: "AI Symptom Checker",
      description: "Get preliminary insights about your symptoms before consulting with a doctor.",
    },
    {
      icon: Award,
      title: "Verified Specialists",
      description: "All our doctors are NMC-certified with verified credentials and expertise.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialization: "General Physician",
      location: "Mumbai, Maharashtra",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1576669801945-7a346954da5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2MjQ4NDA1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiologist",
      location: "Delhi, NCR",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjI0NTc0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      location: "Bangalore, Karnataka",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI0ODE1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Amit Verma",
      specialization: "Orthopedic Surgeon",
      location: "Pune, Maharashtra",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjUxOTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Neha Gupta",
      specialization: "Pediatrician",
      location: "Chennai, Tamil Nadu",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNpYW4lMjBoZWFsdGhjYXJlJTIwd29ya2VyfGVufDF8fHx8MTc2MjUxOTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "Neurologist",
      location: "Hyderabad, Telangana",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwbWVkaWNhbCUyMGV4cGVydHxlbnwxfHx8fDE3NjI1MTkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Kavita Reddy",
      specialization: "Gynecologist",
      location: "Kolkata, West Bengal",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjI0OTcxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Anil Desai",
      specialization: "Ophthalmologist",
      location: "Ahmedabad, Gujarat",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1758691462651-611d730c5272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3BlY2lhbGlzdHxlbnwxfHx8fDE3NjI0NDE0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <Navigation />

      {/* Search Panel */}
      <SearchPanel />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section - Why Choose Appoint'd */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl text-center mb-12 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Why Choose Appoint'd?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Specialty Grid */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl text-center mb-12 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Consult top doctors online for any health concern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                icon={specialty.icon}
                title={specialty.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Read Health Articles */}
      <ArticlesSection />

      {/* Read About Your Medicine */}
      <MedicineSection />

      {/* Featured Doctors */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl text-center mb-12 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Featured Doctors</h2>
          <div className="relative">
            {/* Left Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 shadow-lg rounded-full border-none transition-colors duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
              onClick={handlePrevClick}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Left Gradient Overlay */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(to right, rgb(0, 0, 0), transparent)'
                  : 'linear-gradient(to right, rgb(249, 250, 251), transparent)'
              }}
            />

            {/* Scrollable Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {doctors.map((doctor, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <DoctorCard
                    name={doctor.name}
                    specialization={doctor.specialization}
                    location={doctor.location}
                    gender={doctor.gender}
                    image={doctor.image}
                  />
                </div>
              ))}
            </div>

            {/* Right Gradient Overlay */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(to left, rgb(0, 0, 0), transparent)'
                  : 'linear-gradient(to left, rgb(249, 250, 251), transparent)'
              }}
            />

            {/* Right Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 shadow-lg rounded-full border-none transition-colors duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
              onClick={handleNextClick}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* MIRA Section */}
      <MIRASection />

      {/* CTA Section */}
      <CTASection />

      {/* Chatbot Widget */}
      <ChatbotWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}