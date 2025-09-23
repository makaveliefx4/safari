import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, Compass, MapPin, Phone, ChevronDown, HomeIcon, BadgeDollarSignIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import './Navigation.css';
import ivoImage from '@/assets/ivo.png';

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/destinations', label: 'Destinations', icon: MapPin },
  {
    label: 'Experiences',
    icon: Compass, 
    isDropdown: true,
    subItems: [
      { to: '/hiking', label: 'Hiking' },
      { to: '/great-migration', label: 'Great Migration' },
      { to: '/big-five', label: 'Big Five'},
      { to: '/friendly', label: 'Child Friendly' },
      { to: '/beaches', label: 'Beaches'},
    ],
  },
  {
    label: 'Holiday Style',
    icon: BadgeDollarSignIcon,
    isDropdown: true,
    subItems: [
      {to:'/couple', label: 'Couple'},
      {to:'/culture', label: 'Culture'},
      {to:'/families', label: 'Families'},
      {to:'/wild-life', label: "Wildlife"},
    ],
  },
  { to: '/Contact', label: 'Contact', icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
     
      {!isOpen && (
        <div
          className={cn(
            'fixed top-4 right-4 z-50 transition-all duration-300',
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          )}
        >
          <button
            onClick={toggleMenu}
            className={cn(
              "group flex flex-col justify-between w-8 h-6 p-1 cursor-pointer transition-all duration-300",
              scrollDirection === "down" ? "text-white" : "text-black"
            )}
          >
            <span className="block h-0.5 w-full bg-current rounded transition-all duration-300 group-hover:w-5 group-hover:translate-x-1" />
            <span className="block h-0.5 w-full bg-current rounded transition-all duration-300" />
            <span className="block h-0.5 w-full bg-current rounded transition-all duration-300 group-hover:w-5 group-hover:-translate-x-1" />
          </button>
        </div>
      )}

      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={cn(
          'fixed top-0 left-0 h-full w-72 sm:w-80 bg-card/95 backdrop-blur-lg border-r border-border z-50 transform transition-transform duration-500 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          isScrolled ? " text-muted-foreground" : ""
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-foreground hover:text-accent transition"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col flex-1 overflow-y-auto p-6 space-y-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={ivoImage}
              alt="African Wildlife Icon"
              className="mb-2 w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <p className="text-xs sm:text-sm font-semibold uppercase text-muted-foreground tracking-widest">
              The unexpected safari
            </p>
            <h2 className="text-xl sm:text-3xl font-bold text-foreground mt-2">
              LUXURY SAFARI
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              if (item.isDropdown) {
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label}>
                    <button
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 group',
                        'text-foreground hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent-foreground'
                      )}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {Icon && <Icon className="h-5 w-5 shrink-0" />}
                      <span className="font-medium truncate" style={{color:"black"}}>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 ml-auto transition-transform duration-300",
                          isOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out overflow-hidden",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col pl-8 gap-2 py-2">
                          {item.subItems.map((subItem) => (
                            <NavLink
                              key={subItem.to}
                              to={subItem.to}
                              className={({ isActive }) =>
                                cn(
                                  'flex items-center gap-3 p-2 rounded-lg transition-all duration-300',
                                  isActive
                                    ? 'bg-white text-emerald-500'
                                    : 'text-foreground hover:bg-white/20 hover:text-accent-foreground'
                                )
                              }
                            >
                              <span className="font-medium truncate" style={{color:"black"}}>{subItem.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group',
                      isActive
                        ? 'bg-white text-emerald-500 shadow-[var(--shadow-safari)]'
                        : 'text-foreground hover:bg-white/20 hover:backdrop-blur-sm hover:text-accent-foreground'
                    )
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="font-medium truncate" style={{color:"black"}}>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="mt-auto p-4 bg-gradient-safari rounded-lg border border-border/50">
            <h3 className="font-semibold text-base sm:text-lg mb-2">Ready to Explore?</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3">
              Contact our safari specialists for a personalized adventure.
            </p>
            <Button variant="safari" size="sm" className="w-full">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}