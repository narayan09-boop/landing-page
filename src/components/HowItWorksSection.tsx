import { useTheme } from "../contexts/ThemeContext";
import { Search, Video, FileText, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const { theme } = useTheme();

  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Search & Select",
      description: "Browse specialties and choose your preferred doctor",
    },
    {
      icon: Video,
      number: "2",
      title: "Connect Instantly",
      description: "Join a secure HD video consultation in minutes",
    },
    {
      icon: FileText,
      number: "3",
      title: "Get Prescription",
      description: "Receive digital prescription and treatment plan",
    },
    {
      icon: CheckCircle,
      number: "4",
      title: "Follow Up",
      description: "Access records and schedule follow-up visits anytime",
    },
  ];

  return (
    <section 
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 transition-colors duration-300" 
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.90)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-4xl text-center mb-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          How It Works
        </h2>
        <p className={`text-lg text-center mb-12 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Getting healthcare has never been easier
        </p>

        {/* Horizontal Flowchart */}
        <div className="relative">
          {/* Connection Line */}
          <div className={`hidden lg:block absolute top-16 left-0 right-0 h-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`} 
               style={{ width: 'calc(100% - 150px)', margin: '0 75px' }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className={`relative w-32 h-32 rounded-full flex items-center justify-center mb-4 shadow-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-zinc-900 border-4 border-white' 
                    : 'bg-white border-4 border-teal-600'
                }`}>
                  {/* Step Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-white text-black' : 'bg-teal-600 text-white'
                  }`}>
                    <span className="text-lg">{step.number}</span>
                  </div>
                  
                  <step.icon className={`w-14 h-14 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-teal-600'
                  }`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-base transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}