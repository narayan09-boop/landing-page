import { LucideIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
}

export function SpecialtyCard({ icon: Icon, title }: SpecialtyCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className="text-center">
      {/* White circular card with icon */}
      <div className={`rounded-full w-32 h-32 mx-auto mb-4 shadow-md flex items-center justify-center border transition-colors duration-300 ${theme === 'dark' ? 'bg-white border-gray-800' : 'bg-teal-600 border-teal-700'}`}>
        <Icon className={`w-16 h-16 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
      </div>
      <h3 className={`mb-2 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <a href="#" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-teal-600 hover:text-teal-700'}`}>
        CONSULT NOW
      </a>
    </div>
  );
}