import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-footer text-main pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="home" smooth={true} className="cursor-pointer mb-8 block">
              <span className="font-playfair text-3xl tracking-wide text-main">
                2.5 Mile
              </span>
            </Link>
            <p className="font-poppins font-light text-main/70 leading-relaxed mb-8">
              A premium aesthetic cafe experience in Siliguri. Serving artisanal coffee and European-inspired delicacies in a curated, minimal environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-main/20 flex items-center justify-center font-poppins font-medium text-xs text-main hover:bg-mint hover:text-primary hover:border-mint transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-main/20 flex items-center justify-center font-poppins font-medium text-xs text-main hover:bg-peach hover:text-primary hover:border-peach transition-colors">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-main/20 flex items-center justify-center font-poppins font-medium text-xs text-main hover:bg-pink hover:text-primary hover:border-pink transition-colors">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-main mb-8">Navigation</h4>
            <ul className="space-y-4 font-poppins font-light text-main/70">
              <li><Link to="home" smooth={true} className="hover:text-mint transition-colors cursor-pointer">Home</Link></li>
              <li><Link to="about" smooth={true} className="hover:text-mint transition-colors cursor-pointer">Our Story</Link></li>
              <li><Link to="menu" smooth={true} className="hover:text-mint transition-colors cursor-pointer">Menu</Link></li>
              <li><Link to="gallery" smooth={true} className="hover:text-mint transition-colors cursor-pointer">Gallery</Link></li>
              <li><Link to="reservation" smooth={true} className="hover:text-mint transition-colors cursor-pointer">Reservation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl text-main mb-8">Contact</h4>
            <ul className="space-y-4 font-poppins font-light text-main/70">
              <li>
                Two and a Half Mile Cafe,<br />
                Checkpoint, Don Bosco Colony,<br />
                Siliguri, WB.
              </li>
              <li className="pt-2">
                <a href="tel:+919876543210" className="hover:text-peach transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <a href="mailto:hello@2halfmile.com" className="hover:text-peach transition-colors">hello@2halfmile.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-xl text-main mb-8">Newsletter</h4>
            <p className="font-poppins font-light text-main/70 mb-6">
              Subscribe to receive updates, access to exclusive events, and more.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-4 py-3 bg-transparent border-b border-main/30 font-poppins font-light text-main placeholder:text-main/50 focus:outline-none focus:border-mint transition-colors"
              />
              <button className="text-left font-poppins font-medium text-sm text-mint hover:text-peach transition-colors uppercase tracking-widest mt-2">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-main/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 font-poppins font-light text-sm text-main/50">
          <p>&copy; {new Date().getFullYear()} Two and a Half Mile Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-main transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
