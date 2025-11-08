import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import ctaImage from '../assets/cta-background.png';

export function CTASection() {
  const { theme } = useTheme();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl text-white mb-8">
          Still Thinking?
        </h2>
        <p className="text-2xl md:text-3xl text-white/90 mb-12">
          Get Your 1st Consultation Now
        </p>
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-xl rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Consultation
        </Button>
      </div>
    </section>
  );
}
