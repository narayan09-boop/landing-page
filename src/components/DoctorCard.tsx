import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useTheme } from "../contexts/ThemeContext";

interface DoctorCardProps {
  name: string;
  specialization: string;
  location: string;
  gender: string;
  image: string;
  available?: boolean;
}

export function DoctorCard({
  name,
  specialization,
  location,
  gender,
  image,
  available = true,
}: DoctorCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border ${theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className={`aspect-[4/3] overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className={`text-xl transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
          {available && (
            <Badge className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-white text-black' : 'bg-teal-600 text-white'}`}>Available</Badge>
          )}
        </div>
        <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{specialization}</p>
        <div className={`flex items-center gap-2 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{gender}</p>
      </div>
    </div>
  );
}