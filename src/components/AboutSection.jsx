import { motion } from 'framer-motion';
import { Coffee, Utensils, Wifi } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Collage (Left) */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" 
              alt="Cafe Interior" 
              className="absolute top-0 left-0 w-2/3 h-[400px] object-cover rounded-[2rem] z-10"
            />
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
              alt="Coffee preparation" 
              className="absolute bottom-0 right-0 w-3/5 h-[350px] object-cover rounded-[2rem] z-20"
            />
            
            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-peach p-6 rounded-2xl shadow-sm z-30 flex flex-col items-center justify-center min-w-[140px]"
            >
              <span className="font-playfair text-4xl text-primary mb-1">5+</span>
              <span className="font-poppins text-xs font-medium tracking-widest uppercase text-primary/80">Years Exp.</span>
            </motion.div>
          </div>

          {/* Text Content (Right) */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">The Story</h2>
              <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1] mb-8">
                Crafting moments <br />
                <span className="italic text-secondary">since 2018.</span>
              </h3>
              <p className="font-poppins text-secondary text-lg mb-12 font-light leading-relaxed max-w-lg">
                Nestled in the heart of Siliguri, Two and a Half Mile Cafe offers an escape from the ordinary. We believe in the slow art of coffee making and the joy of shared conversations in a serene environment.
              </p>
              
              {/* Feature Rows */}
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-2xl text-primary mb-2">Artisanal Roasts</h4>
                    <p className="font-poppins text-secondary font-light">Ethically sourced beans roasted to perfection daily.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-2xl text-primary mb-2">European Delicacies</h4>
                    <p className="font-poppins text-secondary font-light">From classic waffles to creamy pastas, made fresh.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center shrink-0">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-2xl text-primary mb-2">Work Friendly</h4>
                    <p className="font-poppins text-secondary font-light">Fast Wi-Fi and comfortable seating for your productivity.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
