import { LucideIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl p-6 shadow-md border transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-teal-600'}`}>
          <Icon className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
        </div>
        <h3 className={`text-xl transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      </div>
      <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
}