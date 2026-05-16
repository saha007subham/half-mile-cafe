import { motion } from 'framer-motion';
import { Coffee, Heart, Star, Sparkles, Laptop, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Serene Ambience",
    description: "Carefully designed spaces that inspire calm and relaxation.",
    bg: "bg-mint"
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Artisanal Brews",
    description: "Handcrafted coffee from the finest ethically sourced beans.",
    bg: "bg-peach"
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Minimal Design",
    description: "An aesthetic environment perfect for your editorial moments.",
    bg: "bg-pink"
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Premium Quality",
    description: "Uncompromising standards in every dish and beverage served.",
    bg: "bg-mint"
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Creative Space",
    description: "The ideal backdrop for deep work or inspiring conversations.",
    bg: "bg-peach"
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Fresh Ingredients",
    description: "Locally sourced produce ensuring the highest quality flavors.",
    bg: "bg-pink"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Experience</h2>
          <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1]">
            The <span className="italic text-secondary">Difference</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`${reason.bg} p-12 rounded-[2rem] flex flex-col items-start transition-transform duration-500 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 bg-primary text-main rounded-full flex items-center justify-center mb-8 shrink-0">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-playfair text-primary mb-4">{reason.title}</h4>
              <p className="font-poppins text-primary/70 font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
