import { motion } from 'framer-motion';
import { Leaf, Heart, Users } from 'lucide-react';
import { Link } from 'react-scroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF8F4]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Side — Image Collage */}
          <div className="w-full lg:w-1/2 relative h-[650px] sm:h-[700px] flex items-center justify-center">
            
            {/* Top Left - Square Coffee */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="absolute top-[2%] left-[2%] w-[42%] aspect-square rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(43,29,27,0.06)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
                alt="Coffee preparation" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top Right - Vertical Interior */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[8%] right-[4%] w-[34%] aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(43,29,27,0.06)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Left - Square Food */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[4%] left-[8%] w-[38%] aspect-[1/1.1] rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(43,29,27,0.06)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
                alt="Healthy Food" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Right - Landscape Interior */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[16%] right-[8%] w-[42%] aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(43,29,27,0.06)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" 
                alt="Cafe Space" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Center Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 bg-[#FAF6F2] py-4 px-7 rounded-[20px] shadow-[0_20px_40px_rgba(43,29,27,0.08)] z-20 flex flex-col items-center justify-center border border-white/60"
            >
              <span className="font-playfair text-[26px] font-bold text-[#164235] leading-tight mb-1">Since 2021</span>
              <span className="font-poppins text-[11px] font-medium text-[#8C7F79] uppercase tracking-wider">Brewing happiness</span>
            </motion.div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-poppins text-[12px] font-bold tracking-[0.2em] text-[#73BBA3] uppercase mb-4">
                Our Story
              </h3>
              <h2 className="font-playfair text-[42px] lg:text-[46px] text-[#2B1D1B] leading-[1.1] mb-6 font-bold tracking-tight text-balance">
                Where Every Sip Tells a <br className="hidden lg:block" />
                <span className="italic text-[#164235] font-normal">Story</span>
              </h2>
              
              <div className="font-poppins text-[15px] text-[#5A504C] leading-[1.8] space-y-5 mb-10 max-w-[520px]">
                <p>
                  Nestled near Bhakti Nagar Police Station in Siliguri, Two and a Half Mile Cafe is more than just a coffee shop — it's a destination for those who appreciate the finer things in life.
                </p>
                <p>
                  From our European-inspired menu to our meticulously designed pastel interiors, every detail has been crafted to give you a premium, Instagram-worthy experience without breaking the bank.
                </p>
              </div>
              
              {/* Feature List */}
              <div className="flex flex-col gap-6 mb-12">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F5F0]">
                    <Leaf className="h-[22px] w-[22px] text-[#164235]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h4 className="font-poppins text-[16px] font-bold text-[#2B1D1B] mb-1">Cozy Ambience</h4>
                    <p className="font-poppins text-[14px] text-[#5A504C] leading-relaxed">Warm, inviting spaces designed for comfort and relaxation.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F5F0]">
                    <Heart className="h-[22px] w-[22px] text-[#164235]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h4 className="font-poppins text-[16px] font-bold text-[#2B1D1B] mb-1">European-Inspired Menu</h4>
                    <p className="font-poppins text-[14px] text-[#5A504C] leading-relaxed">A carefully curated selection of continental favourites.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F5F0]">
                    <Users className="h-[22px] w-[22px] text-[#164235]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h4 className="font-poppins text-[16px] font-bold text-[#2B1D1B] mb-1">Perfect for Every Occasion</h4>
                    <p className="font-poppins text-[14px] text-[#5A504C] leading-relaxed">Dates, work sessions, or hangouts with friends.</p>
                  </div>
                </div>
                
              </div>

              {/* Bottom Button */}
              <Link
                to="menu"
                smooth={true}
                duration={800}
                className="inline-flex h-[54px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BFE7DA] to-[#F6D7B8] px-9 font-poppins text-[15px] font-bold text-[#2B1D1B] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(43,29,27,0.06)]"
              >
                Explore Our Menu
              </Link>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
