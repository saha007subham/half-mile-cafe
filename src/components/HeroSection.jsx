import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import { Link } from "react-scroll";
import cafeImg from "../assets/cafe-home-img.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center bg-[#F7F1EE] overflow-hidden py-10 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 px-6 lg:px-8 relative z-10">
        {/* Text Content - 45% Width */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left pt-6 lg:pt-0">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6 rounded-full border border-[#2B1D1B]/10 bg-white/50 px-3 py-1.5 backdrop-blur-sm"
          >
            <div className="flex gap-1 text-[#D9A05B]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-poppins text-[11px] font-medium text-[#2B1D1B]">
              Loved by 798+ Customers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-playfair text-[#2B1D1B] text-[40px] sm:text-[44px] lg:text-[48px] leading-[1.1] mb-5 tracking-tight text-balance">
              A premium coffee <br className="hidden lg:block" /> experience in{" "}
              <span className="italic text-[#73BBA3]">Siliguri</span>
            </h1>
            <p className="font-poppins text-[15px] lg:text-[16px] text-[#6F625E] mb-8 max-w-[440px] leading-[1.6]">
              Experience handcrafted coffee, aesthetic interiors, and warm
              conversations in the heart of Siliguri.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              to="menu"
              smooth={true}
              duration={800}
              className="flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-[#BFE7DA] px-7 font-poppins text-[14px] font-medium text-[#2B1D1B] transition-all duration-300 hover:bg-[#A9DCCB] hover:scale-[1.02]"
            >
              Explore Menu
            </Link>
            <Link
              to="reservation"
              smooth={true}
              duration={800}
              className="flex h-[50px] cursor-pointer items-center justify-center rounded-full border border-[#2B1D1B]/15 bg-transparent px-7 font-poppins text-[14px] font-medium text-[#2B1D1B] transition-all duration-300 hover:bg-[#2B1D1B]/5 hover:scale-[1.02]"
            >
              Reserve Table
            </Link>
          </motion.div>
        </div>

        {/* Right Side Image Block - 55% Width */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full lg:w-[55%] relative mt-8 lg:mt-0"
        >
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[500px] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(43,29,27,0.08)] group">
            <img
              src={cafeImg}
              alt="Aesthetic Cafe Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Soft overlay mask for premium feel */}
            <div className="absolute inset-0 bg-[#2B1D1B]/[0.02] mix-blend-multiply"></div>
          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 flex items-center gap-3 rounded-2xl bg-white p-3.5 lg:p-4 shadow-[0_10px_30px_rgba(43,29,27,0.06)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F1EE]">
              <Clock className="h-5 w-5 text-[#2B1D1B]" />
            </div>
            <div className="flex flex-col pr-2">
              <span className="font-poppins text-[12px] font-semibold text-[#2B1D1B]">
                Open Daily
              </span>
              <span className="font-poppins text-[11px] text-[#6F625E]">
                Till 10:00 PM
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
