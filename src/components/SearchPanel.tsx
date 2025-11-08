import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";

export function SearchPanel() {
  const { theme } = useTheme();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className={`${theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'} rounded-full shadow-lg p-2 flex items-center gap-2 border transition-colors duration-300`}>
        {/* Location Input */}
        <div className={`flex items-center gap-2 px-4 py-3 border-r ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <MapPin className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
          <input
            type="text"
            placeholder="Location"
            className={`outline-none bg-transparent min-w-[120px] ${theme === 'dark' ? 'text-white placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-400'}`}
          />
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center gap-2 px-4 py-3">
          <Search className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Find hospitals, clinics, doctors, services..."
            className={`outline-none bg-transparent w-full ${theme === 'dark' ? 'text-white placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-400'}`}
          />
        </div>

        {/* Search Button */}
        <Button className={`${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'} rounded-full px-8 py-6 transition-colors duration-300`}>
          Search
        </Button>
      </div>
    </div>
  );
}