import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center bg-main overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-card px-5 py-2 flex items-center gap-2 mb-10 rounded-full border border-primary/5"
          >
            <div className="flex gap-1 text-primary">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-poppins font-medium text-primary tracking-wider uppercase">Loved by 798+ customers.</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair text-primary leading-[1.1] mb-8">
              A premium <br />
              coffee experience <br />
              in <span className="italic text-mint">Siliguri</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-12 max-w-lg font-poppins font-light leading-relaxed">
              Discover artisanal blends and European-inspired delicacies in an environment designed for your perfect moments.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link
              to="menu"
              smooth={true}
              duration={800}
              className="bg-primary text-main px-10 py-4 rounded-full text-center text-lg font-poppins font-medium hover:bg-secondary transition-colors cursor-pointer"
            >
              Explore Menu
            </Link>
            <Link
              to="reservation"
              smooth={true}
              duration={800}
              className="bg-card border border-primary/10 text-primary px-10 py-4 rounded-full text-center text-lg font-poppins font-medium hover:bg-peach transition-colors cursor-pointer"
            >
              Book Table
            </Link>
          </motion.div>
        </div>

        {/* Soft Background Image block (Editorial style) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              alt="Aesthetic Cafe Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft overlay mask */}
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-mint rounded-full -z-10 blur-2xl opacity-60"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-peach rounded-full -z-10 blur-2xl opacity-60"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
