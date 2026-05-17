import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
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
    { name: 'Reserve', to: 'reservation' },
    { name: 'Location', to: 'location' },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-[#FAF6F2] ${
        isScrolled ? 'shadow-[0_1px_10px_rgba(0,0,0,0.03)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        
        {/* LEFT SECTION */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="flex cursor-pointer items-center gap-3 lg:w-[220px]"
        >
          {/* Logo Icon */}
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#BFE7DA]">
            <Coffee className="h-[18px] w-[18px] text-[#2B1D1B]" strokeWidth={1.5} />
          </div>
          
          {/* Brand Text */}
          <div className="flex flex-col justify-center">
            <span className="font-poppins text-[17px] font-bold leading-tight text-[#2B1D1B]">
              Two and a Half Mile
            </span>
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.1em] text-[#2B1D1B] opacity-70">
              CAFE · SILIGURI
            </span>
          </div>
        </Link>

        {/* CENTER NAVIGATION */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  className="font-poppins cursor-pointer text-[14px] font-medium text-[#2B1D1B] transition-colors duration-200 hover:text-[#73BBA3] relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#73BBA3] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CTA BUTTON */}
        <div className="hidden lg:flex justify-end lg:w-[220px]">
          <Link
            to="reservation"
            smooth={true}
            duration={800}
            className="flex h-[46px] cursor-pointer items-center justify-center rounded-full px-[24px] font-poppins text-[14px] font-medium text-[#2B1D1B] bg-[#BFE7DA] transition-all duration-300 hover:scale-[1.03] hover:bg-[#A9DCCB]"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-[#2B1D1B]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute left-0 top-[72px] w-full overflow-hidden bg-[#FAF6F2] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] border-t border-[#2B1D1B]/5 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer border-b border-[#2B1D1B]/5 py-3 font-poppins text-[15px] font-medium text-[#2B1D1B] transition-colors hover:text-[#73BBA3]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="reservation"
            smooth={true}
            duration={800}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-5 flex h-[48px] cursor-pointer items-center justify-center rounded-full bg-[#BFE7DA] font-poppins text-[15px] font-medium text-[#2B1D1B] transition-transform active:scale-[0.98]"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
