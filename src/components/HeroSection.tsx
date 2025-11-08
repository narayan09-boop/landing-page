import { ShieldCheck, Star, Video, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";

export function HeroSection() {
  const { theme } = useTheme();
  const testimonials = [
    {
      name: "Priya Mehta",
      review: "Quick consultation and very professional doctors. Highly recommend!",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      review: "Got my prescription in minutes. The AI symptom checker was spot on.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      review: "Great experience! The video quality was excellent and doctor was very helpful.",
      rating: 4,
    },
    {
      name: "Rahul Sharma",
      review: "Best telemedicine platform. Saved me a trip to the clinic.",
      rating: 5,
    },
  ];

  return (
    <section className={`relative overflow-hidden pb-56 transition-colors duration-300`} style={{ 
      background: theme === 'dark' 
        ? 'linear-gradient(135deg, #000000 0%, #18181b 100%)' 
        : 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 border transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900 border-gray-700' : 'bg-white border-gray-200'}`}>
              <ShieldCheck className={`w-4 h-4 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>100% NMC-Verified Doctors</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl leading-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                AI-Powered Healthcare.{" "}
                <span className={theme === 'dark' ? 'text-white' : 'text-teal-600'}>Available Instantly.</span>
              </h1>
              <p className={`text-xl leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Secure video calls, AI symptom checks, and digital prescriptions. 
                Your trusted clinic, right on your screen.
              </p>
            </div>

            {/* CTA Button */}
            <Button className={`rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}>
              Find a Doctor Now
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className={`text-3xl transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>50K+</div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Patients Treated</div>
              </div>
              <div className="space-y-1">
                <div className={`text-3xl transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>500+</div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Expert Doctors</div>
              </div>
              <div className="space-y-1">
                <div className={`text-3xl transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>4.9★</div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Patient Rating</div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
                <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
                <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Instant Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
                <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Digital Prescriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`} />
                <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="relative">
            {/* Main Image */}
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border transition-colors duration-300 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462749-a95ce1bd7f96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
                alt="Professional medical team"
                className="w-full h-[650px] object-cover object-top"
              />
            </div>

            {/* Floating Card - Video Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`absolute -bottom-6 -left-6 rounded-2xl shadow-xl p-4 flex items-center gap-3 border transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'}`}
            >
              <div className={`p-3 rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-teal-600'}`}>
                <Video className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
              </div>
              <div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Video Consultation</div>
                <div className={`text-lg transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>HD Quality Calls</div>
              </div>
            </motion.div>

            {/* Floating Card - Quick Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`absolute -top-6 -right-6 rounded-2xl shadow-xl p-4 flex items-center gap-3 border transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'}`}
            >
              <div className={`p-3 rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-teal-600'}`}>
                <Clock className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
              </div>
              <div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Average Wait Time</div>
                <div className={`text-lg transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Under 5 mins</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved Shape at Bottom with Testimonials */}
      <div className={`absolute bottom-0 left-0 right-0 h-56 overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 w-full h-40"
        >
          <path
            d="M0,100 C480,180 960,20 1440,100 L1440,200 L0,200 Z"
            fill={theme === 'dark' ? 'rgb(24 24 27)' : 'rgb(255 255 255)'}
          />
        </svg>
        
        {/* Sliding Testimonials */}
        <div className="absolute inset-0 flex flex-col justify-end pb-4 opacity-100">
          <h3 className={`text-4xl text-center mb-4 -mt-8 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>What patients say about us</h3>
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 shadow-md min-w-[300px] flex-shrink-0 border transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : theme === 'dark' ? "text-gray-600" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className={`text-sm mb-2 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.review}</p>
                <p className={`text-xs transition-colors duration-300 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>— {testimonial.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}