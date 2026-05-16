import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Reviews', to: 'reviews' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-card py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer"
        >
          <span className="font-playfair text-2xl md:text-3xl tracking-wide text-primary">
            2.5 Mile
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  className="font-poppins text-secondary hover:text-primary cursor-pointer transition-colors text-sm uppercase tracking-widest relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:-bottom-1 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="reservation"
            smooth={true}
            duration={800}
            className="bg-mint text-primary px-8 py-3 rounded-full text-sm font-medium hover:bg-peach hover:text-primary transition-colors cursor-pointer"
          >
            Reserve Table
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-lg py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-poppins text-primary text-lg border-b border-primary/10 pb-2 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="reservation"
            smooth={true}
            duration={800}
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-mint text-primary px-8 py-4 rounded-full text-center font-medium mt-4"
          >
            Reserve Table
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
