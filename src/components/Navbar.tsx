
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-display text-primary">
            Home<span className="text-accent">Harbor</span>
          </h1>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/buy" className="text-foreground hover:text-primary transition-colors font-medium">
            Buy
          </Link>
          <Link to="/rent" className="text-foreground hover:text-primary transition-colors font-medium">
            Rent
          </Link>
          <Link to="/lease" className="text-foreground hover:text-primary transition-colors font-medium">
            Lease
          </Link>
          <Link to="/land" className="text-foreground hover:text-primary transition-colors font-medium">
            Land
          </Link>
          <Button variant="outline" className="ml-2">
            Sign In
          </Button>
          <Button>List Property</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
            Home
          </Link>
          <Link to="/buy" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
            Buy
          </Link>
          <Link to="/rent" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
            Rent
          </Link>
          <Link to="/lease" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
            Lease
          </Link>
          <Link to="/land" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
            Land
          </Link>
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button className="w-full">List Property</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
