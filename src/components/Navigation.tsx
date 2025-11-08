import image_76a1770e63057f3c901558556b15edfd92a0787e from 'figma:asset/76a1770e63057f3c901558556b15edfd92a0787e.png';
import image_e87e4fe022c040630e1f187cadad33e88dc2e5d5 from 'figma:asset/e87e4fe022c040630e1f187cadad33e88dc2e5d5.png';
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-16" />
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out"
        style={{
          padding: isScrolled ? '1rem 0' : '0',
        }}
      >
        <div 
          className={`backdrop-blur-sm transition-all duration-700 ease-out mx-auto ${theme === 'dark' ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}
          style={{
            width: isScrolled ? '90%' : '100%',
            maxWidth: isScrolled ? '72rem' : '100%',
            borderRadius: isScrolled ? '9999px' : '0',
            boxShadow: isScrolled ? (theme === 'dark' ? '0 10px 40px rgba(255, 255, 255, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.1)') : 'none',
            borderWidth: isScrolled ? '1px' : '0 0 1px 0',
            borderColor: isScrolled ? (theme === 'dark' ? 'rgb(63, 63, 70)' : 'rgb(229, 231, 235)') : (theme === 'dark' ? 'rgb(39, 39, 42)' : 'rgb(243, 244, 246)'),
            borderStyle: 'solid',
          }}
        >
          <div 
            className="mx-auto transition-all duration-700 ease-out"
            style={{
              paddingLeft: isScrolled ? '1.5rem' : '2rem',
              paddingRight: isScrolled ? '1.5rem' : '2rem',
              maxWidth: isScrolled ? '100%' : '80rem',
            }}
          >
            <div 
              className="flex justify-between items-center transition-all duration-700 ease-out"
              style={{
                height: isScrolled ? '3.5rem' : '4rem',
              }}
            >
              {/* Logo */}
              <div className="flex items-center">
                <span 
                  className={`transition-all duration-700 ease-out ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  style={{ 
                    fontFamily: 'Comfortaa, cursive',
                    fontSize: isScrolled ? '1.25rem' : '1.5rem',
                  }}
                >
                  appoint'd
                </span>
              </div>

              {/* Navigation Links */}
              <div 
                className="hidden md:flex items-center transition-all duration-700 ease-out"
                style={{
                  gap: isScrolled ? '1.5rem' : '2rem',
                }}
              >
                <a 
                  href="#find-doctors" 
                  className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  style={{
                    fontSize: isScrolled ? '0.875rem' : '1rem',
                  }}
                >
                  Find Doctors
                </a>
                <a 
                  href="#for-doctors" 
                  className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  style={{
                    fontSize: isScrolled ? '0.875rem' : '1rem',
                  }}
                >
                  For Doctors
                </a>
                <a 
                  href="#mira" 
                  className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  style={{
                    fontSize: isScrolled ? '0.875rem' : '1rem',
                  }}
                >
                  MIRA
                </a>
                <a 
                  href="#resources" 
                  className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  style={{
                    fontSize: isScrolled ? '0.875rem' : '1rem',
                  }}
                >
                  Resources
                </a>
                <a 
                  href="#pricing" 
                  className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  style={{
                    fontSize: isScrolled ? '0.875rem' : '1rem',
                  }}
                >
                  Pricing
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      className={`rounded-full transition-all duration-700 ease-out ${theme === 'dark' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}
                      style={{
                        paddingLeft: isScrolled ? '1rem' : '1.5rem',
                        paddingRight: isScrolled ? '1rem' : '1.5rem',
                        paddingTop: isScrolled ? '0.375rem' : '0.5rem',
                        paddingBottom: isScrolled ? '0.375rem' : '0.5rem',
                        fontSize: isScrolled ? '0.875rem' : '1rem',
                      }}
                    >
                      Get Started
                      <ChevronDown 
                        className="ml-2 transition-all duration-700 ease-out"
                        style={{
                          width: isScrolled ? '0.75rem' : '1rem',
                          height: isScrolled ? '0.75rem' : '1rem',
                        }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className={`w-48 ${theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                    <DropdownMenuItem className={`${theme === 'dark' ? 'text-white hover:bg-zinc-800 focus:bg-zinc-800' : 'text-gray-900 hover:bg-gray-100 focus:bg-gray-100'}`}>
                      <a href="#signup" className="w-full">Sign Up</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`${theme === 'dark' ? 'text-white hover:bg-zinc-800 focus:bg-zinc-800' : 'text-gray-900 hover:bg-gray-100 focus:bg-gray-100'}`}>
                      <a href="#about" className="w-full">About</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`${theme === 'dark' ? 'text-white hover:bg-zinc-800 focus:bg-zinc-800' : 'text-gray-900 hover:bg-gray-100 focus:bg-gray-100'}`}>
                      <a href="#faq" className="w-full">FAQ</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Theme Toggle Button */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={toggleTheme}
                  className={`rounded-full transition-all duration-300 ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                  style={{
                    width: isScrolled ? '2rem' : '2.5rem',
                    height: isScrolled ? '2rem' : '2.5rem',
                  }}
                >
                  {theme === 'dark' ? (
                    <Sun 
                      className="transition-all duration-700 ease-out" 
                      style={{
                        width: isScrolled ? '1rem' : '1.25rem',
                        height: isScrolled ? '1rem' : '1.25rem',
                      }}
                    />
                  ) : (
                    <Moon 
                      className="transition-all duration-700 ease-out" 
                      style={{
                        width: isScrolled ? '1rem' : '1.25rem',
                        height: isScrolled ? '1rem' : '1.25rem',
                      }}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}