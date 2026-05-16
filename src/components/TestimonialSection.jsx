import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Ayesha Roy",
    role: "Regular Guest",
    content: "The serene atmosphere and the attention to detail in every cup of coffee is unmatched. Truly a premium experience in Siliguri."
  },
  {
    name: "Rahul Sharma",
    role: "Freelance Designer",
    content: "An incredibly aesthetic space to work from. The minimal design and soft lighting make it perfect for creative focus."
  },
  {
    name: "Priya Das",
    role: "Food Enthusiast",
    content: "Every dish feels like a piece of art. The creamy Alfredo and their signature cold brews keep me coming back every weekend."
  },
  {
    name: "Karan Gupta",
    role: "Coffee Lover",
    content: "The aesthetic and attention to detail are spectacular. Highly recommend the Fudge Brownie, perfectly warm and gooey."
  },
  {
    name: "Sneha Agarwal",
    role: "Local Guide",
    content: "The best cappuccino I have had in town! The staff is extremely warm, and the vibe is perfect for a relaxed Sunday evening."
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    content: "Love how spacious and calming this cafe is. The Matcha Latte paired with the Avocado Toast makes for a perfect morning."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="reviews" className="py-32 bg-main overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Testimonials</h2>
          <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1]">
            Words from <span className="italic text-secondary">Our Guests</span>
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"
            >
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-12 rounded-[2rem] border border-primary/5 flex flex-col justify-between h-full"
                >
                  <p className="font-playfair text-2xl text-primary leading-relaxed mb-12 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-primary/10 pt-6 mt-auto">
                    <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center font-playfair font-bold text-xl text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-poppins font-medium text-primary">{testimonial.name}</h5>
                      <span className="font-poppins text-sm font-light text-secondary">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === currentIndex ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
