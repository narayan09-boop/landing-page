import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ArticlesSection() {
  const { theme } = useTheme();
  
  return (
    <section
      className="relative py-32 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1652787545245-5e39748cdf97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYXJ0aWNsZXMlMjByZWFkaW5nfGVufDF8fHx8MTc2MjUyMTcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className={`absolute inset-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-teal-600'}`}>
            <BookOpen className={`w-8 h-8 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
          </div>
          <h2 className="text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Comfortaa' }}>
            Read Health Articles
          </h2>
          <p className="text-xl text-white/90">
            Stay informed with expert-written articles on health, wellness, and medical breakthroughs. 
            Access trusted information to make better health decisions.
          </p>
          <Button className={`rounded-full px-8 py-6 text-lg mt-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}>
            Browse Articles
          </Button>
        </div>
      </div>
    </section>
  );
}