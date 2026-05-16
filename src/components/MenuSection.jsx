import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Tiramisu Cappuccino',
    description: 'Espresso infused with cocoa and mascarpone cream.',
    price: '₹249',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2078&auto=format&fit=crop'
  },
  {
    name: 'Peach Iced Tea',
    description: 'Refreshing brew with fresh peach nectar and mint.',
    price: '₹199',
    category: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Fudge Brownie',
    description: 'Warm chocolate brownie with vanilla bean ice cream.',
    price: '₹229',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop'
  },
  {
    name: 'Belgian Waffles',
    description: 'Crispy classic waffles topped with fresh berries.',
    price: '₹279',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Fluffy Pancakes',
    description: 'Stack of buttermilk pancakes with berry compote.',
    price: '₹259',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Creamy Alfredo',
    description: 'Penne tossed in a rich parmesan sauce.',
    price: '₹349',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha with oat milk.',
    price: '₹289',
    category: 'Hot Brew',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Avocado Toast',
    description: 'Sourdough topped with smashed avocado and feta.',
    price: '₹319',
    category: 'Bites',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072&auto=format&fit=crop'
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-32 bg-main">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="font-poppins text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-6">Menu</h2>
          <h3 className="font-playfair text-5xl md:text-6xl text-primary leading-[1.1]">
            Curated <span className="italic text-secondary">Selections</span>
          </h3>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="bg-card rounded-[2rem] p-4 group cursor-pointer transition-shadow hover:shadow-sm"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-card text-primary font-poppins font-medium px-4 py-2 rounded-full text-sm">
                  {item.price}
                </div>
              </div>
              
              <div className="px-2 pb-2">
                {/* Category Badge */}
                <span className="inline-block bg-mint/20 text-primary font-poppins text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {item.category}
                </span>
                <h4 className="text-2xl font-playfair text-primary mb-2">{item.name}</h4>
                <p className="font-poppins text-secondary font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-transparent border border-primary text-primary px-10 py-4 rounded-full font-poppins font-medium hover:bg-primary hover:text-main transition-colors">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
