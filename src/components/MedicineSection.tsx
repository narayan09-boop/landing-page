import { Button } from "./ui/button";
import { Pill } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function MedicineSection() {
  const { theme } = useTheme();
  
  return (
    <section
      className="relative py-32 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwcHJlc2NyaXB0aW9ufGVufDF8fHx8MTc2MjUyMTcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className={`absolute inset-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-teal-600'}`}>
            <Pill className={`w-8 h-8 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
          </div>
          <h2 className="text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Comfortaa' }}>
            Read About Your Medicine
          </h2>
          <p className="text-xl text-white/90">
            Learn about your medications, dosage guidelines, side effects, and interactions. 
            Get comprehensive information to use your medicines safely and effectively.
          </p>
          <Button className={`rounded-full px-8 py-6 text-lg mt-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}>
            Search Medicines
          </Button>
        </div>
      </div>
    </section>
  );
}