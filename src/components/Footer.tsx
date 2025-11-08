import { useTheme } from "../contexts/ThemeContext";

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1A1A1A] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Part - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* For Patients */}
          <div>
            <h4 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>For Patients</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Find Doctors</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Book Appointment</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Online Consultation</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Health Records</a></li>
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h4 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>For Doctors</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Register</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Doctor Login</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Benefits</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Support</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Help Center</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>FAQs</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Contact Us</a></li>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Company</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>About Us</a></li>
              
              <li><a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-teal-600'}`}>Blog</a></li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 transition-colors duration-300 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`}>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className={`h-8 flex items-center text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Comfortaa' }}>
              appoint'd
            </div>
            <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 appoint'd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}