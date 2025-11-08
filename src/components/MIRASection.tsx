import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";

export function MIRASection() {
  const { theme } = useTheme();
  
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMEFJfGVufDF8fHx8MTc2MjQzNjkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="MIRA Medical AI Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className={`absolute inset-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-r from-black/80 to-black/60' : 'bg-gradient-to-r from-black/70 to-black/50'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'Comfortaa, cursive' }}>
            MIRA
          </h2>
          <h3 className="text-3xl mb-4">
            Medical Intelligence Response Assistant
          </h3>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed">
            MIRA is our advanced AI assistant designed to streamline your healthcare experience. 
            It conducts preliminary diagnosis through intelligent chat conversations, recommends 
            the most suitable doctors for your condition, and creates comprehensive surveys to 
            understand your symptoms better.
          </p>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Before your appointment, MIRA summarizes your diagnosis and provides detailed notes 
            to your booked doctor, ensuring they have all the information needed to provide you 
            with the best possible care.
          </p>
          <Button 
            className={`rounded-full px-8 py-6 text-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}
            disabled
          >
            Coming Soon
          </Button>
        </div>
      </div>
    </section>
  );
}