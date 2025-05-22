
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-bold font-display ${isScrolled ? 'text-[#102341]' : 'text-white'}`}>
            East<span className="text-[#c27b43]">Homes</span>
          </h1>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            Home
          </Link>
          <Link to="/buy" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            Buy
          </Link>
          <Link to="/rent" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            Rent
          </Link>
          <Link to="/sell" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            Sell
          </Link>
          <Link to="/about" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            About
          </Link>
          <Link to="/contact" className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-[#c27b43] transition-colors font-medium`}>
            Contact
          </Link>
          <div className="flex items-center">
            <ModeToggle />
            <Button variant="outline" className={`ml-4 border-[#c27b43] text-[#c27b43] hover:bg-[#c27b43]/10`}>
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button
            className={`ml-4 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            Home
          </Link>
          <Link to="/buy" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            Buy
          </Link>
          <Link to="/rent" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            Rent
          </Link>
          <Link to="/sell" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            Sell
          </Link>
          <Link to="/about" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-[#c27b43] transition-colors py-2 font-medium">
            Contact
          </Link>
          <Button variant="outline" className="w-full border-[#c27b43] text-[#c27b43]">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
